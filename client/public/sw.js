const CACHE_NAME = 'frostline-v2';
const OFFLINE_URL = '/offline.html';
const METADATA_CACHE = 'frostline-metadata-v1';

const IMAGE_CACHE_MAX_AGE = 30 * 24 * 60 * 60 * 1000;
const API_CACHE_MAX_AGE = 24 * 60 * 60 * 1000;
const FONTS_CACHE_MAX_AGE = 365 * 24 * 60 * 60 * 1000;
const MAX_IMAGE_ENTRIES = 60;
const MAX_API_ENTRIES = 100;

const STATIC_ASSETS = [
  '/',
  '/offline.html',
  '/manifest.json',
  '/favicon.svg',
  '/favicon.png',
  '/apple-touch-icon.png',
  '/icons/icon-192x192.png',
  '/icons/icon-256x256.png',
  '/icons/icon-384x384.png',
  '/icons/icon-512x512.png',
  '/icons/maskable-192x192.png',
  '/icons/maskable-512x512.png'
];

async function getMetadata(cacheName, url) {
  const cache = await caches.open(METADATA_CACHE);
  const metaKey = `${cacheName}:${url}`;
  const response = await cache.match(metaKey);
  if (response) {
    return response.json();
  }
  return null;
}

async function setMetadata(cacheName, url, metadata) {
  const cache = await caches.open(METADATA_CACHE);
  const metaKey = `${cacheName}:${url}`;
  await cache.put(metaKey, new Response(JSON.stringify(metadata)));
}

async function deleteMetadata(cacheName, url) {
  const cache = await caches.open(METADATA_CACHE);
  const metaKey = `${cacheName}:${url}`;
  await cache.delete(metaKey);
}

async function isCacheExpired(cacheName, url, maxAge) {
  const metadata = await getMetadata(cacheName, url);
  if (!metadata || !metadata.timestamp) {
    return true;
  }
  return Date.now() - metadata.timestamp > maxAge;
}

async function cleanExpiredEntries(cacheName, maxAge, maxEntries) {
  const cache = await caches.open(cacheName);
  const keys = await cache.keys();
  const metadataCache = await caches.open(METADATA_CACHE);
  
  const entries = await Promise.all(
    keys.map(async (request) => {
      const metadata = await getMetadata(cacheName, request.url);
      return {
        request,
        timestamp: metadata?.timestamp || 0
      };
    })
  );

  entries.sort((a, b) => b.timestamp - a.timestamp);

  const toDelete = [];
  
  for (let i = 0; i < entries.length; i++) {
    const entry = entries[i];
    const isExpired = Date.now() - entry.timestamp > maxAge;
    const exceedsLimit = i >= maxEntries;
    
    if (isExpired || exceedsLimit) {
      toDelete.push(entry.request);
    }
  }

  await Promise.all(
    toDelete.map(async (request) => {
      await cache.delete(request);
      await deleteMetadata(cacheName, request.url);
    })
  );
}

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('[SW] Caching static assets');
      return cache.addAll(STATIC_ASSETS);
    })
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    Promise.all([
      caches.keys().then((cacheNames) => {
        return Promise.all(
          cacheNames
            .filter((name) => 
              name !== CACHE_NAME && 
              name !== METADATA_CACHE &&
              name !== 'fonts-cache' &&
              name !== 'images-cache' &&
              name !== 'api-cache'
            )
            .map((name) => caches.delete(name))
        );
      }),
      cleanExpiredEntries('images-cache', IMAGE_CACHE_MAX_AGE, MAX_IMAGE_ENTRIES),
      cleanExpiredEntries('api-cache', API_CACHE_MAX_AGE, MAX_API_ENTRIES)
    ])
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  if (request.method !== 'GET') {
    return;
  }

  if (request.destination === 'image') {
    event.respondWith(
      (async () => {
        const cache = await caches.open('images-cache');
        const cachedResponse = await cache.match(request);
        
        if (cachedResponse) {
          const isExpired = await isCacheExpired('images-cache', request.url, IMAGE_CACHE_MAX_AGE);
          if (!isExpired) {
            return cachedResponse;
          }
        }
        
        try {
          const networkResponse = await fetch(request);
          cache.put(request, networkResponse.clone());
          await setMetadata('images-cache', request.url, { timestamp: Date.now() });
          
          cleanExpiredEntries('images-cache', IMAGE_CACHE_MAX_AGE, MAX_IMAGE_ENTRIES);
          
          return networkResponse;
        } catch (error) {
          if (cachedResponse) {
            return cachedResponse;
          }
          return new Response('', { status: 404, statusText: 'Image not available offline' });
        }
      })()
    );
    return;
  }

  if (url.pathname.startsWith('/api/')) {
    event.respondWith(
      (async () => {
        try {
          const networkResponse = await fetch(request);
          const cache = await caches.open('api-cache');
          cache.put(request, networkResponse.clone());
          await setMetadata('api-cache', request.url, { timestamp: Date.now() });
          
          cleanExpiredEntries('api-cache', API_CACHE_MAX_AGE, MAX_API_ENTRIES);
          
          return networkResponse;
        } catch (error) {
          const cache = await caches.open('api-cache');
          const cachedResponse = await cache.match(request);
          
          if (cachedResponse) {
            const isExpired = await isCacheExpired('api-cache', request.url, API_CACHE_MAX_AGE);
            if (!isExpired) {
              return cachedResponse;
            }
          }
          
          if (cachedResponse) {
            return cachedResponse;
          }
          
          return new Response(JSON.stringify({ error: 'Offline' }), {
            status: 503,
            headers: { 'Content-Type': 'application/json' }
          });
        }
      })()
    );
    return;
  }

  if (request.mode === 'navigate') {
    event.respondWith(
      fetch(request)
        .catch(() => {
          return caches.match(OFFLINE_URL);
        })
    );
    return;
  }

  event.respondWith(
    caches.match(request).then((cachedResponse) => {
      if (cachedResponse) {
        return cachedResponse;
      }

      return fetch(request)
        .then((networkResponse) => {
          if (networkResponse.ok) {
            const responseClone = networkResponse.clone();
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(request, responseClone);
            });
          }
          return networkResponse;
        })
        .catch(() => {
          return new Response('', { status: 503, statusText: 'Service Unavailable' });
        });
    })
  );
});

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

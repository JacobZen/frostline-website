import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

if ('serviceWorker' in navigator && import.meta.env.PROD) {
  window.addEventListener('load', async () => {
    try {
      const registration = await navigator.serviceWorker.register('/sw.js', {
        scope: '/',
      });

      registration.addEventListener('updatefound', () => {
        const newWorker = registration.installing;
        if (newWorker) {
          newWorker.addEventListener('statechange', () => {
            if (newWorker.state === 'activated' && navigator.serviceWorker.controller) {
              const lastReload = sessionStorage.getItem('sw-reload');
              const now = Date.now();
              if (!lastReload || now - parseInt(lastReload) > 10000) {
                sessionStorage.setItem('sw-reload', now.toString());
                window.location.reload();
              }
            }
          });
        }
      });
    } catch (error) {
      console.log('[PWA] Service Worker registration failed:', error);
    }
  });
} else if ('serviceWorker' in navigator && import.meta.env.DEV) {
  console.log('[PWA] Service Worker disabled in development mode');
}

createRoot(document.getElementById("root")!).render(<App />);

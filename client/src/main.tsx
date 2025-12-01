import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

if ('serviceWorker' in navigator && import.meta.env.PROD) {
  window.addEventListener('load', async () => {
    try {
      const registration = await navigator.serviceWorker.register('/sw.js', {
        scope: '/',
      });
      console.log('[PWA] Service Worker registered:', registration.scope);
      
      registration.addEventListener('updatefound', () => {
        const newWorker = registration.installing;
        if (newWorker) {
          newWorker.addEventListener('statechange', () => {
            if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
              console.log('[PWA] New content available, refresh to update');
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

// Minimal service worker — its only job is to make the app installable
// (Chrome requires an active service worker with a fetch handler for the
// "Add to Home Screen" install prompt). It just passes requests straight
// through to the network; it does not cache anything.
self.addEventListener("install", (event) => {
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  event.respondWith(fetch(event.request));
});

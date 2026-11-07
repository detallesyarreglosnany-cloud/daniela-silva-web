// KubIA · service worker: guarda la app para abrirla y usarla sin internet.
const CACHE = 'kubia-v1';
const CORE = ['/kubia/', '/kubia/index.html', '/kubia/manifest.json', '/kubia/icons/icon-192.png', '/kubia/icons/icon-512.png', '/kubia/icons/icon-180.png'];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(CORE)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  // La página: primero la red (para tener la última versión); si no hay internet, la copia guardada.
  if (req.mode === 'navigate' && url.pathname.startsWith('/kubia')) {
    e.respondWith(
      fetch(req)
        .then((res) => { const copy = res.clone(); caches.open(CACHE).then((c) => c.put('/kubia/', copy)); return res; })
        .catch(() => caches.match('/kubia/'))
    );
    return;
  }
  // Íconos, manifiesto y tipografías: la copia guardada primero y se actualiza por detrás.
  if (url.pathname.startsWith('/kubia/') || url.host.includes('fonts.googleapis.com') || url.host.includes('fonts.gstatic.com')) {
    e.respondWith(
      caches.match(req).then((hit) => {
        const net = fetch(req).then((res) => { if (res && (res.ok || res.type === 'opaque')) caches.open(CACHE).then((c) => c.put(req, res.clone())); return res; }).catch(() => hit);
        return hit || net;
      })
    );
  }
});

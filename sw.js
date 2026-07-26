// Service worker minimal : rend l'application installable sur l'écran d'accueil.
// Ne met rien en cache de critique : la donnée vient toujours de Firestore en direct.
self.addEventListener('install', (e) => { self.skipWaiting(); });
self.addEventListener('activate', (e) => { self.clients.claim(); });
self.addEventListener('fetch', (e) => {
  // laisse passer toutes les requêtes normalement
});

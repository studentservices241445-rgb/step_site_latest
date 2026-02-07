self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('step2026-cache').then(cache => {
      return cache.addAll([
        '/',
        '/index.html',
        '/start.html',
        '/test.html',
        '/results.html',
        '/plan.html',
        '/quiz.html',
        '/course.html',
        '/register.html',
        '/support.html',
        '/privacy.html',
        '/terms.html'
      ]);
    })
  );
});
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});

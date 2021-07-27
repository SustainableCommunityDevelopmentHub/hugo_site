// serviceworker.js
async function searchDoRequestHandler(url, request) {
  const searchQuery = decodeURIComponent(url.search.match(/q=([^&]+)/)[1]);
  const cache = await caches.open(SEARCH_CACHE_NAME);


  cache.put(SEARCH_LATEST_QUERY_PATH, new Response(`"${searchQuery}"`));

  let response = await cache.match(request);
  if (response) return response;

  response = await fetch(request);
  if (response.status == 200) {
    cache.delete(request, {
      ignoreSearch: true,
    });
    cache.put(request, response.clone());
  }

  return response;
}

self.addEventListener('fetch', (event) => {
  const requestUrl = new URL(event.request.url);
  if (requestUrl.pathname === '/search/do') {
    event.respondWith(searchDoRequestHandler(requestUrl, event.request));
  }
});

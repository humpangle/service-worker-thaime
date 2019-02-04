workbox.core.setCacheNameDetails({ prefix: 'thaime-cache-v1' })

self.__precacheManifest = [].concat(self.__precacheManifest || [])
workbox.precaching.suppressWarnings()
workbox.precaching.precacheAndRoute(self.__precacheManifest, {})

// workbox.routing.registerNavigationRoute('/index.html', {
//   whitelist: [/\/(vowels|numbers|about|search|char\/)/],
// })
workbox.routing.registerNavigationRoute('/index.html')

self.addEventListener('message', event => {
  if (!event.data) return
  switch (event.data) {
    case 'skipWaiting':
      self.skipWaiting()
      break
    default:
      break
  }
})

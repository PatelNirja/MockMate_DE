// Simple hash-based router with route table and listeners

export function createRouter(routes) {
  let currentPath = getPath()
  const subscribers = new Set()

  function notify() {
    subscribers.forEach((fn) => fn(getPath()))
  }

  function getPath() {
    const hash = window.location.hash || '#/'
    return hash.replace('#', '')
  }

  function navigate(path) {
    if (!path.startsWith('#')) path = '#' + path
    if (window.location.hash === path) return
    window.location.hash = path
  }

  function match(pathname) {
    // Exact or parameter-less paths only for simplicity
    return routes[pathname] || routes['/404'] || null
  }

  function subscribe(fn) {
    subscribers.add(fn)
    return () => subscribers.delete(fn)
  }

  window.addEventListener('hashchange', () => {
    const next = getPath()
    if (next !== currentPath) {
      currentPath = next
      notify()
    }
  })

  return { navigate, match, subscribe, getPath }
}



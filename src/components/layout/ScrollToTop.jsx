import { useEffect, useLayoutEffect } from 'react'
import { useLocation } from 'react-router-dom'

function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (!('scrollRestoration' in window.history)) {
      return undefined
    }

    const previousScrollRestoration = window.history.scrollRestoration
    window.history.scrollRestoration = 'manual'

    return () => {
      window.history.scrollRestoration = previousScrollRestoration
    }
  }, [])

  useLayoutEffect(() => {
    if (hash) {
      return
    }

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'auto',
    })
  }, [pathname, hash])

  return null
}

export default ScrollToTop

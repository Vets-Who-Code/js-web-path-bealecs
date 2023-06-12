'use client'

import { usePathname, useSearchParams } from 'next/navigation'
import { Suspense, useEffect } from 'react'

function NavigationEventsImplementation() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    if (process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID) {
      ;(window as any).gtag('event', 'page_view')
    }
  }, [pathname, searchParams])

  return null
}

export default function TrackPageViews() {
  return (
    <Suspense fallback={null}>
      <NavigationEventsImplementation />
    </Suspense>
  )
}
"use client"

import { usePathname, useSearchParams } from "next/navigation"
import Script from "next/script"
import { useEffect, Suspense } from "react"

declare global {
  interface Window {
    gtag?: (...args: any[]) => void
  }
}


function AnalyticsComponent() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    if (typeof window.gtag !== "undefined") {
      window.gtag("config", "G-XXXXXXXXXX", {
        page_path: pathname + searchParams.toString(),
      })
    }
  }, [pathname, searchParams])

  return (
    <>
      <Script strategy="afterInteractive" src={`https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX`} />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX');
          `,
        }}
      />
    </>
  )
}

export function Analytics() {
  return (
    <Suspense fallback={null}>
      <AnalyticsComponent />
    </Suspense>
  )
}

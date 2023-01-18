import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import NextNProgress from 'nextjs-progressbar'
import Layout from '../components/Layout'
import SiteHead from '../components/SiteHead'
import * as gtag from '../lib/gtag';
import Analytics from '../components/Analytics'

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      gtag.pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return (
    <Layout>
      <NextNProgress
        color="#38BDF7"
        startPosition={0.3}
        stopDelayMs={200}
        height={5}
      />
      <SiteHead />
      <Component {...pageProps} />
      <Analytics />
    </Layout>
  )
}

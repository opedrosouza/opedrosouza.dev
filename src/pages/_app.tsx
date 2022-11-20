import '../styles/globals.css'
import type { AppProps } from 'next/app'
import NextNProgress from 'nextjs-progressbar'
import Layout from '../components/Layout'
import SiteHead from '../components/SiteHead'

export default function App({ Component, pageProps }: AppProps) {
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
    </Layout>
  )
}

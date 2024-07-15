import { Layout } from '@/components/Layout'
import * as mdxComponents from '@/components/mdx'
import { useMobileNavigationStore } from '@/components/MobileNavigation'
import { MDXProvider } from '@mdx-js/react'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import { Router } from 'next/router'

import '@/styles/tailwind.css'
import 'focus-visible'

function onRouteChange() {
  useMobileNavigationStore.getState().close()
}

Router.events.on('routeChangeStart', onRouteChange)
Router.events.on('hashChangeStart', onRouteChange)

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>{`${pageProps.title} | DiffPlug Docs`}</title>
        <meta name="description" content={pageProps.description} />
      </Head>
      <MDXProvider components={mdxComponents}>
        <Layout {...pageProps}>
          <Component {...pageProps} />
        </Layout>
      </MDXProvider>
    </>
  )
}

// Disable SSR everywhere so we can use the document object normally
export default dynamic(() => Promise.resolve(App), {
  ssr: false,
})

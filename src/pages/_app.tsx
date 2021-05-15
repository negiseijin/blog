import { AppProps } from 'next/app'
import dynamic from 'next/dynamic'
import Head from 'next/head'

import '@/styles/globals.css'

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  const SafeHydrate = dynamic(() => import('@/components/atoms/SafeHydrate'), {
    ssr: false,
  })
  return (
    <>
      <Head>
        <title>{pageProps.title}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <SafeHydrate>
        <Component {...pageProps} />
      </SafeHydrate>
    </>
  )
}

export default MyApp

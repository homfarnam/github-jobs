import "tailwindcss/tailwind.css"
import "../styles/index.scss"

import Head from "next/head"
import { QueryClient, QueryClientProvider } from "react-query"

function MyApp({ Component, pageProps }: any) {
  const queryClient = new QueryClient()

  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
          rel="preload"
          href="/fonts/KumbhSans-Light.ttf"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/KumbhSans-Regular.ttf"
          as="font"
          crossOrigin=""
        />
      </Head>
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
      </QueryClientProvider>
    </>
  )
}

// Wraps all components in the tree with the data provider
export default MyApp

import "tailwindcss/tailwind.css"
import "../styles/index.scss"
 

import Head from "next/head"

function MyApp({ Component, pageProps }: any) {
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

      <Component {...pageProps} />
    </>
  )
}

// Wraps all components in the tree with the data provider
export default MyApp

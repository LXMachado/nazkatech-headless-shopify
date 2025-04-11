import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/images/nazka-logo.png" />
        <meta name="theme-color" content="#0A1F1C" />
        <meta name="description" content="Nazka.Tech - Eco-friendly tech accessories that honor ancient wisdom while embracing modern innovation." />
        <meta property="og:title" content="Nazka.Tech - Eco Meets Tech" />
        <meta property="og:description" content="Discover our range of eco-friendly tech accessories that are kind to the planet without compromising on quality or style." />
        <meta property="og:image" content="/images/nazka-logo.png" />
        <meta property="og:url" content="https://nazka.tech" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
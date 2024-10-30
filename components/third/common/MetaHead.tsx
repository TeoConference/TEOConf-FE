import Head from 'next/head'

const MetaHead = () => {
  return (
    <Head>
      <meta charSet="utf-8" />
      <title>모두에게 열려있는 컨퍼런스 | 테오콘-TeoConf</title>
      <link
        rel="apple-touch-icon"
        sizes="57x57"
        href="images/favicon/apple-icon-57x57.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="60x60"
        href="images/favicon/apple-icon-60x60.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="72x72"
        href="images/favicon/apple-icon-72x72.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="76x76"
        href="images/favicon/apple-icon-76x76.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="114x114"
        href="images/favicon/apple-icon-114x114.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="120x120"
        href="images/favicon/apple-icon-120x120.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="144x144"
        href="images/favicon/apple-icon-144x144.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="152x152"
        href="images/favicon/apple-icon-152x152.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="images/favicon/apple-icon-180x180.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="192x192"
        href="images/favicon/android-icon-192x192.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="images/favicon/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="96x96"
        href="images/favicon/favicon-96x96.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="images/favicon/favicon-16x16.png"
      />
      <link rel="manifest" href="images/favicon/manifest.json" />
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
      <meta name="theme-color" content="#ffffff" />
      <meta
        name="description"
        content="모두에게 열려있는 컨퍼런스, 테오콘-TeoConf"
      />
      {/* Facebook Meta Tags  */}
      <meta property="og:title" content="테오콘-TeoConf" />
      <meta property="og:url" content={'https://teoconf.com'} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="images/OgImage.png" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta
        property="og:description"
        content="모두에게 열려있는 컨퍼런스, 테오콘-TeoConf"
      />
      <meta property="og:site_name" content="테오콘-TeoConf" />
      <meta property="og:locale" content="ko" />
      {/* Twitter Meta Tags  */}
      <meta name="twitter:card" content="summary" />
      <meta property="twitter:url" content={'https://teoconf.com'} />
      <meta name="twitter:title" content="테오콘-TeoConf" />
      <meta
        name="twitter:description"
        content="모두에게 열려있는 컨퍼런스, 테오콘-TeoConf"
      />
      <meta name="twitter:image" content="images/OgImage.png" />
    </Head>
  )
}

export default MetaHead

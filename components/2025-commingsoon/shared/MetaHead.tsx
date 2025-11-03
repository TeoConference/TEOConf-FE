import Head from 'next/head'
import { getPath } from '@/utils/path'

const MetaHead = () => {
  return (
    <Head>
      <meta charSet="utf-8" />
      <title>모두에게 열려있는 컨퍼런스 | 테오콘 2025 - TEOConf</title>
      <link
        rel="apple-touch-icon"
        sizes="57x57"
        href={getPath('/images/favicon/apple-icon-57x57.png')}
      />
      <link
        rel="apple-touch-icon"
        sizes="60x60"
        href={getPath('/images/favicon/apple-icon-60x60.png')}
      />
      <link
        rel="apple-touch-icon"
        sizes="72x72"
        href={getPath('/images/favicon/apple-icon-72x72.png')}
      />
      <link
        rel="apple-touch-icon"
        sizes="76x76"
        href={getPath('/images/favicon/apple-icon-76x76.png')}
      />
      <link
        rel="apple-touch-icon"
        sizes="114x114"
        href={getPath('/images/favicon/apple-icon-114x114.png')}
      />
      <link
        rel="apple-touch-icon"
        sizes="120x120"
        href={getPath('/images/favicon/apple-icon-120x120.png')}
      />
      <link
        rel="apple-touch-icon"
        sizes="144x144"
        href={getPath('/images/favicon/apple-icon-144x144.png')}
      />
      <link
        rel="apple-touch-icon"
        sizes="152x152"
        href={getPath('/images/favicon/apple-icon-152x152.png')}
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href={getPath('/images/favicon/apple-icon-180x180.png')}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="192x192"
        href={getPath('/images/favicon/android-icon-192x192.png')}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href={getPath('/images/favicon/favicon-32x32.png')}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="96x96"
        href={getPath('/images/favicon/favicon-96x96.png')}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href={getPath('/images/favicon/favicon-16x16.png')}
      />
      <link rel="manifest" href={getPath('/images/favicon/manifest.json')} />
      <meta name="msapplication-TileColor" content="#44067F" />
      <meta
        name="msapplication-TileImage"
        content={getPath('/ms-icon-144x144.png')}
      />
      <meta name="theme-color" content="#44067F" />
      <meta
        name="description"
        content="모두에게 열려있는 컨퍼런스, 테오콘 2025 - TEOConf. 12월 6일(토) ~ 7일(일) 서울 성수 엘리스Lab에서 개최됩니다."
      />
      {/* Facebook Meta Tags  */}
      <meta property="og:title" content="테오콘 2025 - TEOConf" />
      <meta property="og:url" content={'https://teoconf.com/2025'} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={getPath('/images/OgImage.png')} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta
        property="og:description"
        content="모두에게 열려있는 컨퍼런스, 테오콘 2025 - TEOConf. 12월 6일(토) ~ 7일(일) 서울 성수 엘리스Lab에서 개최됩니다."
      />
      <meta property="og:site_name" content="테오콘 2025 - TEOConf" />
      <meta property="og:locale" content="ko" />
      {/* Twitter Meta Tags  */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={'https://teoconf.com/2025'} />
      <meta name="twitter:title" content="테오콘 2025 - TEOConf" />
      <meta
        name="twitter:description"
        content="모두에게 열려있는 컨퍼런스, 테오콘 2025 - TEOConf. 12월 6일(토) ~ 7일(일) 서울 성수 엘리스Lab에서 개최됩니다."
      />
      <meta name="twitter:image" content={getPath('/images/OgImage.png')} />
    </Head>
  )
}

export default MetaHead

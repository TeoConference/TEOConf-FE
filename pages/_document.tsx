import { Head, Html, Main, NextScript } from 'next/document'

const basePath = process.env.NODE_ENV === 'development' ? '' : '/TEOConf-FE'

export default function Document() {
  return (
    <Html lang="ko">
      <Head>
        <link
          rel="shortcut icon"
          href={`${basePath}/images/favicon/favicon.ico`}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

import { Head, Html, Main, NextScript } from 'next/document'
import { getPath } from '@/utils/path'

export default function Document() {
  return (
    <Html lang="ko">
      <Head>
        <link
          rel="shortcut icon"
          href={getPath('/images/favicon/favicon.ico')}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

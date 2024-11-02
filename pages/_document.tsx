import { Head, Html, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="ko">
      <Head>
        <link rel="shortcut icon" href="images/favicon/favicon.ico" />
      </Head>
      <body className="text-typo-black">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

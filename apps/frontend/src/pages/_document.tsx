import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="ja" dir="ltr">
      <Head>
        <link
          rel="stylesheet"
          type="text/css"
          href="http://mplus-fonts.sourceforge.jp/webfonts/basic_latin/mplus_webfonts.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="http://mplus-fonts.sourceforge.jp/webfonts/general-j/mplus_webfonts.css"
        />
      </Head>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

import "@/styles/globals.css";
import "@/styles/animation.css";
import type { AppProps } from "next/app";
import { ApolloProvider } from "@apollo/client";
import client from "@/lib/apolloClient";
import { DefaultSeo } from "next-seo";
import { Analytics } from "@vercel/analytics/react";

const APP_NAME = "YOSHiKAWA CiTY FC 公式サイト";
const APP_ROOT_URL = "https://yoshikawa-fc.com";
const APP_DEFAULT_DESCRIPTION =
  "吉川市のサッカーチーム YOSHiKAWA CiTY FC 公式サイトです。「吉川市のフットボール文化を創り、育む」をテーマに活動しています。";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo
        titleTemplate={`%s | ${APP_NAME}`}
        defaultTitle={APP_NAME}
        description={APP_DEFAULT_DESCRIPTION}
        openGraph={{
          type: "website",
          description: APP_DEFAULT_DESCRIPTION,
          site_name: APP_NAME,
          url: APP_ROOT_URL,
          images: [
            {
              url: `${APP_ROOT_URL}/logo.svg`,
              width: 800,
              height: 600,
              alt: "YOSHiKAWA CiTY FC LOGO",
              type: "image/jpeg",
            },
          ],
        }}
        twitter={{
          cardType: "summary_large_image",
        }}
      />
      <ApolloProvider client={client}>
        <Component {...pageProps} />
      </ApolloProvider>
      <Analytics />
    </>
  );
}

export default MyApp;

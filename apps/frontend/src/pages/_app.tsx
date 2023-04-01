import "@/styles/globals.css";
import "@/styles/animation.css";
import type { AppProps } from "next/app";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_SUPABASE_URL!,
  cache: new InMemoryCache(),
  headers: { apiKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY! },
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp;

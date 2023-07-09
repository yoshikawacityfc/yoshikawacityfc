import { ApolloClient, InMemoryCache } from "@apollo/client";
import { envVar } from "./envVar";

const client = new ApolloClient({
  uri: envVar.graphqlEndpoint,
  cache: new InMemoryCache({}),
  headers: { apiKey: envVar.apiKey },
});

export default client;

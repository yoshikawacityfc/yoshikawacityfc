import { ApolloClient, InMemoryCache } from "@apollo/client";
import { relayStylePagination } from "@apollo/client/utilities";
import { envVar } from "./envVar";

const client = new ApolloClient({
  uri: envVar.graphqlEndpoint,
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          newsCollection: relayStylePagination(["first", "filter"]),
        },
      },
    },
  }),
  headers: { apiKey: envVar.apiKey },
});

export default client;

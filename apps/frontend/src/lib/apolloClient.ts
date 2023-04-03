import { NewsConnection } from "@/__generated__/graphql";
import { ApolloClient, InMemoryCache } from "@apollo/client";
import { envVar } from "./envVar";

const client = new ApolloClient({
  uri: envVar.graphqlEndpoint,
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          newsCollection: {
            keyArgs: false,
            merge(existing: NewsConnection, incoming: NewsConnection) {
              return {
                ...(incoming ?? {}),
                edges: [...(existing?.edges ?? []), ...(incoming?.edges ?? [])],
              };
            },
          },
        },
      },
    },
  }),
  headers: { apiKey: envVar.apiKey },
});

export default client;

import { envVar } from "@/lib/envVar";
import { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: {
    [envVar.graphqlEndpoint]: {
      headers: {
        apiKey: envVar.apiKey,
      },
    },
  },
  documents: ["**/*.tsx", "**/*.ts"],

  generates: {
    "./src/__generated__/": {
      preset: "client",
      plugins: [],
      presetConfig: {
        gqlTagName: "gql",
      },
    },
  },
  ignoreNoDocuments: true,
};

export default config;

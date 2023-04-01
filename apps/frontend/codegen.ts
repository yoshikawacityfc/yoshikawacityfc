import { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: {
    [process.env.NEXT_PUBLIC_SUPABASE_URL!]: {
      headers: {
        apiKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
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

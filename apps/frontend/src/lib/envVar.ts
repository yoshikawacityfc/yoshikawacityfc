import { Environment } from "@/types/environment";

interface EnvVar {
  env: Environment;
  graphqlEndpoint: string;
  apiKey: string;
}

const resolveEnvironment: () => Environment = () => {
  const env = process.env.NEXT_PUBLIC_ENVIRONMENT;
  switch (env) {
    case "development":
    case "staging":
    case "production":
      return env;
    default:
      return "production";
  }
};

export const envVar: EnvVar = {
  env: resolveEnvironment(),
  graphqlEndpoint: process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT!,
  apiKey: process.env.NEXT_PUBLIC_API_KEY!,
};

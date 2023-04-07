import { Environment } from "@/types/environment";

interface EnvVar {
  env: Environment;
  supabaseEndpoint: string;
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
  supabaseEndpoint: process.env.NEXT_PUBLIC_SUPABASE_ENDPOINT!,
  graphqlEndpoint: process.env.NEXT_PUBLIC_SUPABASE_GRAPHQL_ENDPOINT!,
  apiKey: process.env.NEXT_PUBLIC_API_KEY!,
};

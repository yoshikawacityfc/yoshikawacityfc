import { createClient } from "microcms-js-sdk";
import { envVar } from "./envVar";

export const client = createClient({
  serviceDomain: "ycfc",
  apiKey: envVar.microCmsApiKey,
});

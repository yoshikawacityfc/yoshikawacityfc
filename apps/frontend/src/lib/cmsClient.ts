import { createClient } from "microcms-js-sdk";
import { envVar } from "./envVar";

export const cmsClient = createClient({
  serviceDomain: "ycfc",
  apiKey: envVar.microCmsApiKey,
});

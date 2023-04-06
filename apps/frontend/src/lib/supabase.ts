import { createClient } from "@supabase/supabase-js";
import { envVar } from "./envVar";

export const supabase = createClient(envVar.supabaseEndpoint, envVar.apiKey);

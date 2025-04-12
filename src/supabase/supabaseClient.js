import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
;
const supabaseAnonKey = process.env.REACT_APP_SUPABASE_ANON_KEY;

const options = {
    db: {
      schema: 'public',
    },
    auth: {
      autoRefreshToken: true,
      persistSession: true,
      detectSessionInUrl: true
    },
    // global: {
    //   headers: { 'x-my-custom-header': 'my-app-name' },
    // },
  }

export const supabase = createClient(
    
    supabaseUrl, supabaseAnonKey, options);


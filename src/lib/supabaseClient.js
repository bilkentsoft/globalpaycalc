import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://aafbttxrwnfgnsnjqlmc.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'sb_publishable_XHDhqH6SkyX3N81O2ywSWw_EqkCreUb';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

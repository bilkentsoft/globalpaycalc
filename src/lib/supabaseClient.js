import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://aafbttxrwnfgnsnjqlmc.supabase.co';
const supabaseAnonKey = 'sb_publishable_XHDhqH6SkyX3N81O2ywSWw_EqkCreUb';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

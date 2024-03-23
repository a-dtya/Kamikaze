import { createClient } from '@supabase/supabase-js';

// Replace 'YOUR_SUPABASE_URL' and 'YOUR_SUPABASE_KEY' with your actual Supabase URL and key
if (!process.env.NEXT_PUBLIC_SUPABASE_URL) throw new Error('Missing env.NEXT_PUBLIC_SUPABASE_URL')
if (!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) throw new Error('Missing env.NEXT_PUBLIC_SUPABASE_ANON_KEY')
const supabaseUrl: string = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey: string = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const options = {
  db: {
    schema: 'public',
  },
};

// Create a new Supabase client instance
const supabase = createClient(supabaseUrl, supabaseKey,options);
// supabase
//   .channel('todos')
//   .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'todos' }, handleInserts)
//   .subscribe()

export default supabase;
import { createClient } from '@supabase/supabase-js';

// Use environment variables for Supabase credentials
const supabaseUrl = process.env.REACT_APP_SUPABASE_URL || 'https://kanhvpmzxfrfjohqwnyv.supabase.co';
const supabaseAnonKey = process.env.REACT_APP_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imthbmh2cG16eGZyZmpvaHF3bnl2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDM2NjY3NDQsImV4cCI6MjA1OTI0Mjc0NH0.ahJQxU4oUI9-TzZ17iMVlJMZUm7A5743IUJ4yOndCDA';

// Log Supabase configuration on initialization (only in development)
if (process.env.NODE_ENV === 'development') {
  console.log('Supabase URL:', supabaseUrl);
  console.log('Supabase Key available:', !!supabaseAnonKey);
}

// Create Supabase client
export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Test the connection if in development
if (process.env.NODE_ENV === 'development') {
  (async () => {
    try {
      const { data, error } = await supabase.from('contacts').select('count()', { count: 'exact', head: true });
      if (error) {
        console.error('Supabase connection test failed:', error);
      } else {
        console.log('Supabase connection successful');
      }
    } catch (err) {
      console.error('Supabase connection test error:', err);
    }
  })();
} 
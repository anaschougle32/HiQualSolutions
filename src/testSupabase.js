// Test script to verify Supabase setup
const { createClient } = require('@supabase/supabase-js');

// Use environment variables for Supabase credentials
const supabaseUrl = process.env.REACT_APP_SUPABASE_URL || 'https://kanhvpmzxfrfjohqwnyv.supabase.co';
const supabaseAnonKey = process.env.REACT_APP_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imthbmh2cG16eGZyZmpvaHF3bnl2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDM2NjY3NDQsImV4cCI6MjA1OTI0Mjc0NH0.ahJQxU4oUI9-TzZ17iMVlJMZUm7A5743IUJ4yOndCDA';

// Create Supabase client
const supabase = createClient(supabaseUrl, supabaseAnonKey);

async function testSupabaseSetup() {
  console.log('Testing Supabase setup...');
  console.log(`Using Supabase URL: ${supabaseUrl}`);
  console.log(`Supabase Key available: ${!!supabaseAnonKey}`);

  try {
    // 1. Check if the contacts table exists
    console.log('\nChecking if contacts table exists...');
    const { data: tableInfo, error: tableError } = await supabase
      .from('contacts')
      .select('count(*)', { count: 'exact', head: true });
    
    if (tableError) {
      if (tableError.code === '42P01') { // Table doesn't exist error
        console.error('❌ The contacts table does not exist. Please create it using the SQL in SUPABASE_SETUP.md');
      } else {
        console.error('❌ Error checking contacts table:', tableError);
      }
    } else {
      console.log('✅ Contacts table exists');
    }

    // 2. Try to insert a test record
    console.log('\nTesting insert capability...');
    const testData = {
      name: 'Test User',
      email: 'test@example.com',
      message: 'This is a test message',
      consent: true,
    };

    const { data: insertData, error: insertError } = await supabase
      .from('contacts')
      .insert([testData])
      .select();

    if (insertError) {
      console.error('❌ Insert test failed:', insertError);
      
      if (insertError.code === '42501') { // Permission denied
        console.error('This appears to be a Row Level Security (RLS) policy issue. Please check that you have:');
        console.error('1. Enabled RLS on the contacts table');
        console.error('2. Created an INSERT policy for anonymous users using WITH CHECK (true)');
      }
    } else {
      console.log('✅ Insert test successful, record ID:', insertData[0]?.id);
      
      // Clean up test data
      if (insertData && insertData[0]?.id) {
        console.log('Cleaning up test record...');
        const { error: deleteError } = await supabase
          .from('contacts')
          .delete()
          .eq('id', insertData[0].id);
        
        if (deleteError) {
          console.error('❌ Cleanup failed:', deleteError);
        } else {
          console.log('✅ Test record cleanup successful');
        }
      }
    }

    console.log('\nIf any tests failed, please follow the instructions in SUPABASE_SETUP.md');
    console.log('You can also run the SQL in supabase/contacts_table.sql directly in the Supabase SQL Editor');
    
  } catch (error) {
    console.error('❌ Unexpected error during testing:', error);
  }
}

// Run the test
testSupabaseSetup();

// To run this test:
// 1. Add "type": "module" to package.json
// 2. Run: node src/testSupabase.js 
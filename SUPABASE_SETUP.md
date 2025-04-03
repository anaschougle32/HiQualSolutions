# Supabase Setup Guide for HiQual Solutions Contact Form

This guide will help you set up Supabase to store contact form submissions from your HiQual Solutions website.

## Step 1: Create a Supabase Account and Project

1. Go to [Supabase](https://supabase.com/) and sign up for an account if you don't have one already.
2. Create a new project by clicking "New Project" in the dashboard.
3. Fill in the necessary details:
   - Name your project (e.g., "hiqual-solutions")
   - Set a secure database password
   - Choose a region closest to your users
4. Click "Create new project" and wait for the setup to complete.

## Step 2: Create the Contacts Table

1. In your Supabase project dashboard, navigate to the "Table Editor" section in the left sidebar.
2. Click "New Table" to create a new table.
3. Name the table `contacts`.
4. Add the following columns:

| Column Name | Data Type | Default Value | Is Primary Key | Is Nullable | Extra |
|-------------|-----------|---------------|----------------|-------------|-------|
| id          | uuid      | gen_random_uuid() | ✓ (enabled) | ✗ (disabled) | |
| created_at  | timestamp with time zone | now() | ✗ (disabled) | ✗ (disabled) | |
| name        | text      | NULL         | ✗ (disabled) | ✗ (disabled) | |
| email       | text      | NULL         | ✗ (disabled) | ✗ (disabled) | |
| phone       | text      | NULL         | ✗ (disabled) | ✓ (enabled) | |
| message     | text      | NULL         | ✗ (disabled) | ✗ (disabled) | |
| consent     | boolean   | false        | ✗ (disabled) | ✗ (disabled) | |

5. Click "Save" to create the table.

## Step 3: Set Up Row-Level Security (RLS)

For security, we need to set up Row-Level Security policies to control access to the data:

1. In the "Authentication" section in the left sidebar, navigate to "Policies".
2. Find the `contacts` table and click "New Policy".
3. Choose "Create a policy from scratch".
4. For the contact form submission, create an "INSERT" policy:
   - Policy name: `Allow anonymous insertions`
   - Target roles: `authenticated` and `anon`
   - Policy definition: Select "INSERT" for the operation
   - WITH CHECK expression: `true` (allows all inserts)

> **Important Note**: For INSERT policies, Supabase requires using a "WITH CHECK" expression rather than a "USING" expression.

## Step 4: Get Your API Keys

1. In the left sidebar, go to "Project Settings" and then "API".
2. You'll find your "Project URL" and "anon/public" key.
3. Copy these values as you'll need them for your environment variables.

## Step 5: Update Your Environment Variables

1. Open the `.env` file in your project root.
2. Replace the placeholder values with your actual Supabase values:

```
REACT_APP_SUPABASE_URL=your_project_url
REACT_APP_SUPABASE_ANON_KEY=your_anon_key
```

## Step 6: Test Your Contact Form

1. Run your project locally using `npm start`.
2. Navigate to the contact form and submit a test message.
3. Check your Supabase dashboard to verify that the data was inserted correctly.

## Troubleshooting

If your form submissions aren't working:

1. Check browser console for errors.
2. Verify that your environment variables are correctly set.
3. Ensure your Supabase table structure matches what's expected in the code.
4. Check the RLS policies to ensure they allow insertions from anonymous users.
5. If you see an error about "only WITH CHECK expression allowed for INSERT", make sure your INSERT policy uses "WITH CHECK" and not "USING".

## Using SQL Editor for Setup

You can also set up your table and policies using the SQL Editor in Supabase. Here's the SQL for your convenience:

```sql
-- Create the 'contacts' table
CREATE TABLE contacts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  message TEXT NOT NULL,
  consent BOOLEAN NOT NULL DEFAULT FALSE
);

-- Enable Row Level Security
ALTER TABLE contacts ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anonymous insertions
CREATE POLICY "Allow anonymous insertions" 
  ON contacts 
  FOR INSERT 
  TO anon, authenticated 
  WITH CHECK (true);
```

## Additional Resources

- [Supabase Documentation](https://supabase.io/docs)
- [Row Level Security in Supabase](https://supabase.io/docs/guides/auth/row-level-security)
- [React Supabase Guide](https://supabase.io/docs/guides/with-react)

## Fixing RLS Policy Issues

If you're encountering a Row Level Security (RLS) policy error when submitting the contact form or running the test script, follow these steps:

1. Navigate to your Supabase project dashboard
2. Click on the **SQL Editor** tab in the left sidebar
3. Click **New Query** to create a new SQL query
4. Copy and paste the contents of the `supabase/fix_rls_policy.sql` file
5. Click **Run** to execute the SQL script

This script will:
- Check if RLS is enabled on the contacts table
- Drop any existing policies that might be misconfigured
- Create a new policy that allows anonymous users to insert data
- Create a policy for authenticated users to view data (for testing)
- Test the policy by attempting to insert a record

If the script runs successfully, you should see a record ID returned, confirming that the RLS policy is now correctly configured.

### Common RLS Error Messages

If you see any of these errors, you need to fix your RLS policies:

```
new row violates row-level security policy for table "contacts"
```

This means RLS is enabled but the policy is not configured correctly for inserts.

```
permission denied for table contacts
```

This means RLS might be enabled without any policies, or the policies don't grant the necessary permissions.

## Testing Your Setup

You can test your Supabase setup using the included test script:

```
npm run test:supabase
```

If all tests pass, your contact form should work correctly! 
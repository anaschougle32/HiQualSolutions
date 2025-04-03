-- This script fixes Row Level Security (RLS) issues with the contacts table
-- Run this in the Supabase SQL Editor

-- First check if RLS is enabled on the contacts table
DO $$
DECLARE
    rls_enabled BOOLEAN;
BEGIN
    SELECT relrowsecurity INTO rls_enabled
    FROM pg_class
    WHERE relname = 'contacts';
    
    IF rls_enabled IS NULL THEN
        RAISE NOTICE 'The contacts table does not exist. Please create it first.';
    ELSIF rls_enabled = false THEN
        RAISE NOTICE 'Row Level Security is not enabled on the contacts table. Enabling it...';
        ALTER TABLE contacts ENABLE ROW LEVEL SECURITY;
    ELSE
        RAISE NOTICE 'Row Level Security is already enabled on the contacts table.';
    END IF;
END
$$;

-- Drop any existing policies on the contacts table
DROP POLICY IF EXISTS "Allow anonymous insertions" ON contacts;

-- Create a new INSERT policy
CREATE POLICY "Allow anonymous insertions" 
ON contacts 
FOR INSERT 
TO anon, authenticated 
WITH CHECK (true);

-- Verify policy was created
SELECT
    schemaname,
    tablename,
    policyname,
    permissive,
    roles,
    cmd,
    qual,
    with_check
FROM
    pg_policies
WHERE
    tablename = 'contacts';

-- If you want to allow SELECT for testing
DROP POLICY IF EXISTS "Allow authenticated to view" ON contacts;
CREATE POLICY "Allow authenticated to view" 
ON contacts 
FOR SELECT 
TO authenticated 
USING (true);

-- Test with a simple insert
INSERT INTO contacts (name, email, message, consent)
VALUES ('SQL Test User', 'sql_test@example.com', 'Test message from SQL', true)
RETURNING id; 
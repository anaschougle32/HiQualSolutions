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

-- Optional: Create policy to allow authenticated users to view submissions
-- Uncomment if you want authenticated users to be able to view submissions
-- CREATE POLICY "Allow authenticated users to view contacts" 
--   ON contacts 
--   FOR SELECT 
--   TO authenticated 
--   USING (true);

-- Comment on the table and columns for better documentation
COMMENT ON TABLE contacts IS 'Contact form submissions from the website';
COMMENT ON COLUMN contacts.id IS 'Unique identifier for each contact submission';
COMMENT ON COLUMN contacts.created_at IS 'Timestamp when the contact form was submitted';
COMMENT ON COLUMN contacts.name IS 'Full name of the person submitting the form';
COMMENT ON COLUMN contacts.email IS 'Email address of the person submitting the form';
COMMENT ON COLUMN contacts.phone IS 'Optional phone number of the person submitting the form';
COMMENT ON COLUMN contacts.message IS 'Message content from the contact form';
COMMENT ON COLUMN contacts.consent IS 'Whether the person has consented to data storage and processing'; 
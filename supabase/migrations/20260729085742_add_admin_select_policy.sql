CREATE POLICY "Admin can read all donations"
ON donations
FOR SELECT
TO authenticated
USING (
  auth.jwt()->>'email' = 'happilynvraft@gmail.com'
);
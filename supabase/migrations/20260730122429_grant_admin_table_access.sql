GRANT UPDATE ON TABLE donations TO authenticated;

CREATE POLICY "Admin can update donations"
ON donations
FOR UPDATE
TO authenticated
USING (
    auth.jwt()->>'email' = 'happilynvraft@gmail.com'
)
WITH CHECK (
    auth.jwt()->>'email' = 'happilynvraft@gmail.com'
);
GRANT DELETE ON TABLE donations TO authenticated;

CREATE POLICY "Admin can delete donations"
ON donations
FOR DELETE
TO authenticated
USING (
    auth.jwt()->>'email' = 'happilynvraft@gmail.com'
)
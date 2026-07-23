CREATE POLICY "Public can read campaigns"
ON campaigns
FOR SELECT
TO anon, authenticated
USING (true);

CREATE POLICY "Public can read approved donations"
ON donations
for SELECT
TO anon, authenticated
USING (status = 'approved');

CREATE POLICY "Public can create donations"
ON donations
FOR INSERT
TO anon, authenticated
WITH CHECK (true);
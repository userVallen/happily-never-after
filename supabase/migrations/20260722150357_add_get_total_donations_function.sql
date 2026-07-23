CREATE OR REPLACE FUNCTION get_total_donations(
    p_campaign_id uuid
)
RETURNS TABLE (
    krw_total bigint,
    idr_total bigint
)
LANGUAGE sql
AS $$
    SELECT
        COALESCE(SUM(amount) FILTER (WHERE currency = 'KRW'), 0) AS krw_total,
        COALESCE(SUM(amount) FILTER (WHERE currency = 'IDR'), 0) AS idr_total
    FROM donations
    WHERE campaign_id = p_campaign_id AND status = 'approved';
$$;
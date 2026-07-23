import { createClient } from '@/lib/supabase/server';

export async function getTotalDonationsService(campaignId: string) {
  const supabase = await createClient();

  const { data, error } = await supabase.rpc('get_total_donations', {
    p_campaign_id: campaignId,
  });

  if (error) throw error;

  return data;
}

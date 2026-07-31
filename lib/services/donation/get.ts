import { createClient } from '@/lib/supabase/server';

export async function getTotalDonationsService(campaignId: string) {
  const supabase = await createClient();

  const { data, error } = await supabase.rpc('get_total_donations', {
    p_campaign_id: campaignId,
  });

  if (error) throw error;

  return data;
}

export async function getPendingDonationsService(campaignId: string) {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from('donations')
    .select()
    .match({ campaign_id: campaignId, status: 'pending' });

  if (error) throw error;

  return data;
}

export async function getApprovedDonationsService(campaignId: string) {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from('donations')
    .select()
    .match({ campaign_id: campaignId, status: 'approved' });

  if (error) throw error;

  return data;
}

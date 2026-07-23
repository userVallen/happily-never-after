import { createClient } from '@/lib/supabase/server';

export async function getCampaignService() {
  const supabase = await createClient();

  const { data, error } = await supabase.from('campaigns').select().single();

  if (error) throw new Error(`Failed to fetch campaign: ${error.message}`);

  return data;
}

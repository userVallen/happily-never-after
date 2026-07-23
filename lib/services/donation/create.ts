import { CreateDonationInput } from '@/lib/validation/donation';
import { createClient } from '@/lib/supabase/server';

export async function createDonationService(input: CreateDonationInput) {
  const supabase = await createClient();

  const { error } = await supabase.from('donations').insert({
    campaign_id: input.campaignId,
    name: input.name,
    message: input.message,
    amount: input.amount,
    currency: input.currency,
  });

  if (error) throw error;
}

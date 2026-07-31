import { createClient } from '@/lib/supabase/server';

export async function rejectDonationService(donationId: string) {
  const supabase = await createClient();

  await supabase
    .from('donations')
    .update({
      status: 'rejected',
      updated_at: new Date().toISOString(),
    })
    .match({ id: donationId, status: 'pending' });
}

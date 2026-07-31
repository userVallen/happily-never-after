import { createClient } from '@/lib/supabase/server';

export async function approveDonationService(donationId: string) {
  const supabase = await createClient();

  const { error } = await supabase
    .from('donations')
    .update({
      status: 'approved',
      updated_at: new Date().toISOString(),
    })
    .match({ id: donationId, status: 'pending' });

  if (error) throw error;
}

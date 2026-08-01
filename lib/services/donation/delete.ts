import { createClient } from '@/lib/supabase/server';

export async function deleteDonationService(donationId: string) {
  const supabase = await createClient();

  const { error } = await supabase
    .from('donations')
    .delete()
    .match({ id: donationId, status: 'approved' });

  if (error) throw error;
}

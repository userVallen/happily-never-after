import { redirect } from 'next/navigation';

import { getCampaignService } from '@/lib/services/campaign/get';
import { getTotalDonationsService } from '@/lib/services/donation/get';
import {
  getPendingDonationsService,
  getApprovedDonationsService,
} from '@/lib/services/donation/get';
import { authenticateAdmin } from '@/lib/auth/authenticate-admin';

import { Card, CardContent } from '@/components/ui/card';
import ProgressBar from '@/components/progress-bar';
import DonationsTable from '@/components/donations-table';

export default async function AdminPage() {
  const auth = await authenticateAdmin();

  if (!auth.success) {
    redirect('/login');
  }

  const campaign = await getCampaignService();
  const totalDonations = await getTotalDonationsService(campaign.id);
  const pendingDonations = await getPendingDonationsService(campaign.id);
  const approvedDonations = await getApprovedDonationsService(campaign.id);

  return (
    <main className="flex flex-col gap-15 p-8">
      <Card>
        <CardContent>
          <ProgressBar
            currency="KRW"
            goalAmount={campaign.goal_amount}
            totalDonations={totalDonations[0]}
          />
        </CardContent>
      </Card>

      <DonationsTable type="pending" donations={pendingDonations} />
      <DonationsTable type="approved" donations={approvedDonations} />
    </main>
  );
}

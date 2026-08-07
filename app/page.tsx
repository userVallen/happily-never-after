import DonationCard from '@/components/donation-card';
import Hero from '@/components/hero';
import Synopsis from '@/components/synopsis';
import Logline from '@/components/logline';

import { getCampaignService } from '@/lib/services/campaign/get';
import { getTotalDonationsService } from '@/lib/services/donation/get';

export default async function Home() {
  const campaign = await getCampaignService();
  const totalDonations = await getTotalDonationsService(campaign.id);

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black wrap-anywhere">
      <main className="flex flex-1 relative w-full flex-col items-center gap-10 py-8 bg-background dark:bg-black sm:gap-30">
        <div className="bg-paper relative w-full z-0">
          <div className="relative w-full flex flex-col items-center z-1">
            <Hero />
            <Synopsis />
          </div>
        </div>

        <Logline />

        <DonationCard campaign={campaign} totalDonations={totalDonations[0]} />

        <p>ㅠ PLS HELP ME GRADUATE ㅠ</p>
      </main>
    </div>
  );
}

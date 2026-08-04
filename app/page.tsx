import Image from 'next/image';

import DonationCard from '@/components/donation-card';
import Hero from '@/components/hero';

import { getCampaignService } from '@/lib/services/campaign/get';
import { getTotalDonationsService } from '@/lib/services/donation/get';

export default async function Home() {
  const campaign = await getCampaignService();
  const totalDonations = await getTotalDonationsService(campaign.id);

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black wrap-anywhere">
      <main className="flex flex-1 relative w-full flex-col items-center gap-10 py-8 bg-background dark:bg-black sm:gap-30">
        <div className="bg-paper relative w-full">
          <Hero />
          <div className="flex flex-col relative text-center items-center justify-between py-5">
            <Image
              src="/images/flower.webp"
              alt="Flower decoration"
              width={648}
              height={810}
              className="relative"
            />

            <div className="absolute flex flex-col items-center top-[15%]">
              <p className="relative font-heading text-3xl font-bold underline">
                Synopsis
              </p>

              <p className="relative w-[clamp(100px,40%,200px)] text-justify text-fluid-md py-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Praesent volutpat nisl ut auctor viverra. Curabitur vestibulum
                dolor diam, ut accumsan dolor vulputate ac. In hac habitasse
                platea dictumst. Integer a ante ac leo pellentesque gravida.
                Praesent blandit ligula mauris, porta semper turpis auctor eu.
              </p>
            </div>
          </div>
        </div>

        <p className="text-fluid-md text-center max-w-xl px-8">
          Worked on the screenplay for 1 year. Team & I working hard to make it
          come to life. Food & coffee to support the team&apos;s hard work. PLS
        </p>

        <DonationCard campaign={campaign} totalDonations={totalDonations[0]} />

        <p>ㅠ PLS HELP ME GRADUATE ㅠ</p>
      </main>
    </div>
  );
}

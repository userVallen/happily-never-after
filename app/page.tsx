import DonationCard from '@/components/donation-card';
import { getCampaignService } from '@/lib/services/campaign/get';
import { getTotalDonationsService } from '@/lib/services/donation/get';

export default async function Home() {
  const campaign = await getCampaignService();
  const totalDonations = await getTotalDonationsService(campaign.id);

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black wrap-anywhere">
      <main className="flex flex-1 w-full flex-col items-center gap-10 p-8 bg-white dark:bg-black sm:gap-30">
        <h1 className="text-4xl w-full text-center font-bold border-b-2 border-zinc-300 pb-5">
          Title Header
        </h1>

        <div className="flex flex-col w-full text-start py-5">
          <p className="text-4xl font-bold sm:text-6xl sm:py-2">Thesis Film</p>
          <p className="text-4xl font-bold sm:text-6xl sm:py-2">
            Happily Never After
          </p>
          <p className="text-4xl font-bold sm:text-6xl sm:py-2">
            by Claire Valen
          </p>
        </div>

        <div className="flex flex-col gap-5 justify-between py-5 sm:flex-row sm:gap-10">
          <div className="flex flex-col flex-3">
            <p className="text-3xl font-bold underline">Synopsis</p>
            <p className="text-xl py-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              volutpat nisl ut auctor viverra. Curabitur vestibulum dolor diam,
              ut accumsan dolor vulputate ac. In hac habitasse platea dictumst.
              Integer a ante ac leo pellentesque gravida. Praesent blandit
              ligula mauris, porta semper turpis auctor eu. Suspendisse et
              lectus vel mi gravida volutpat. Suspendisse varius lectus non ex
              lobortis egestas. Maecenas interdum mi nisi, vel tempor est
              volutpat in. Nullam quis erat auctor, sollicitudin ipsum in,
              congue libero. Aenean aliquam, dolor eu aliquam dapibus, quam
              velit lobortis quam, a condimentum metus nulla vitae ipsum. Mauris
              massa quam, tincidunt vel justo id, tempus pharetra risus.
            </p>
          </div>

          <div className="flex flex-col flex-1">
            <p className="text-3xl font-bold underline">Genre</p>
            <p className="text-xl py-5">Drama</p>
          </div>
        </div>

        <p className="text-3xl font-bold text-center max-w-xl">
          Worked on the screenplay for 1 year. Team & I working hard to make it
          come to life. Food & coffee to support the team&apos;s hard work. PLS
        </p>

        <DonationCard campaign={campaign} totalDonations={totalDonations[0]} />

        <p>ㅠ PLS HELP ME GRADUATE ㅠ</p>
      </main>
    </div>
  );
}

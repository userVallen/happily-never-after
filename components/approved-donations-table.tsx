import { Fragment } from 'react';

import { formatAmount } from '@/lib/utils';
import { Database } from '@/lib/supabase/database.types';

import { Card, CardHeader, CardContent } from '@/components/ui/card';
import DonationActions from '@/components/donation-actions';

type ApprovedDonationsTableProps = {
  approvedDonations: Database['public']['Tables']['donations']['Row'][];
};

export default function ApprovedDonationsTable({
  approvedDonations,
}: ApprovedDonationsTableProps) {
  return (
    <div className="flex flex-col gap-4">
      <p className="font-heading font-bold text-4xl">Approved Donations</p>

      <div className="hidden md:grid grid-cols-[3fr_5fr_2fr_1fr_1fr] gap-y-2 items-center">
        <p className="font-bold text-xl">Name</p>
        <p className="font-bold text-xl">Message</p>
        <p className="font-bold text-xl">Amount</p>
        <p className="font-bold text-xl">Currency</p>
        <hr className="col-span-5 border-2 border-foreground" />

        {approvedDonations.map((entry) => {
          return (
            <Fragment key={entry.id}>
              <p className="text-lg">{entry.name}</p>
              <p className="text-lg">{entry.message}</p>
              <p className="text-lg">{formatAmount(entry.amount)}</p>
              <p className="text-lg">{entry.currency}</p>
              <DonationActions donationId={entry.id} actions={['delete']} />
            </Fragment>
          );
        })}
      </div>

      <div className="md:hidden flex flex-col gap-8">
        {approvedDonations.map((entry) => {
          return (
            <Fragment key={entry.id}>
              <Card className="gap-2">
                <CardHeader>
                  <p className="text-xl font-heading font-bold">{entry.name}</p>
                </CardHeader>

                <CardContent className="flex flex-col gap-1">
                  <p className="text-lg">{entry.message}</p>
                  <p className="text-lg">{`${entry.currency} ${formatAmount(entry.amount)}`}</p>
                  <DonationActions donationId={entry.id} actions={['delete']} />
                </CardContent>
              </Card>
            </Fragment>
          );
        })}
      </div>
    </div>
  );
}

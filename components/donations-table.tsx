import { Fragment } from 'react';

import { formatAmount, capitalizeFirstLetter } from '@/lib/utils';
import { Database } from '@/lib/supabase/database.types';

import { Card, CardHeader, CardContent } from '@/components/ui/card';
import DonationActions from '@/components/donation-actions';

type DonationsTableProps = {
  type: 'pending' | 'approved';
  donations: Database['public']['Tables']['donations']['Row'][];
};

export default function DonationsTable({
  type,
  donations,
}: DonationsTableProps) {
  return (
    <div className="flex flex-col gap-4">
      <p className="font-heading font-bold text-4xl">{`${capitalizeFirstLetter(type)} Donations`}</p>

      <div className="hidden md:grid grid-cols-[2fr_6fr_1fr_1fr_1fr] gap-x-10 gap-y-2 items-center">
        <p className="font-bold text-xl">Name</p>
        <p className="font-bold text-xl">Message</p>
        <p className="font-bold text-xl">Amount</p>
        <p className="font-bold text-xl">Currency</p>
        <p className="font-bold text-xl">Actions</p>
        <hr className="col-span-5 border-2 border-foreground" />

        {donations.length === 0 ? (
          <p className="col-span-5 text-center py-5">
            <i>Nothing to see here</i>
          </p>
        ) : (
          donations.map((entry) => {
            return (
              <Fragment key={entry.id}>
                <p className="text-lg py-2">{entry.name}</p>
                <p className="text-lg py-2">{entry.message}</p>
                <p className="text-lg py-2">{formatAmount(entry.amount)}</p>
                <p className="text-lg py-2">{entry.currency}</p>
                <DonationActions
                  donationId={entry.id}
                  actions={
                    type === 'pending' ? ['approve', 'reject'] : ['delete']
                  }
                />
              </Fragment>
            );
          })
        )}
      </div>

      <div className="md:hidden flex flex-col gap-8">
        <hr className="w-full border-2 border-foreground" />
        {donations.length === 0 ? (
          <p className="self-center py-5">
            <i>Nothing to see here</i>
          </p>
        ) : (
          donations.map((entry) => {
            return (
              <Fragment key={entry.id}>
                <Card className="gap-2">
                  <CardHeader>
                    <p className="text-xl font-heading font-bold">
                      {entry.name}
                    </p>
                  </CardHeader>

                  <CardContent className="flex flex-col gap-1">
                    <p className="text-lg">{entry.message}</p>
                    <p className="text-lg">{`${entry.currency} ${formatAmount(entry.amount)}`}</p>
                    <DonationActions
                      donationId={entry.id}
                      actions={
                        type === 'pending' ? ['approve', 'reject'] : ['delete']
                      }
                    />
                  </CardContent>
                </Card>
              </Fragment>
            );
          })
        )}
      </div>
    </div>
  );
}

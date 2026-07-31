import { Fragment } from 'react';

import { formatAmount } from '@/lib/utils';
import { Database } from '@/lib/supabase/database.types';

type ApprovedDonationsTableProps = {
  approvedDonations: Database['public']['Tables']['donations']['Row'][];
};

export default function ApprovedDonationsTable({
  approvedDonations,
}: ApprovedDonationsTableProps) {
  return (
    <div className="flex flex-col gap-4">
      <p className="font-heading font-bold text-4xl">Approved Donations</p>

      <div className="grid grid-cols-[3fr_5fr_2fr_1fr] gap-y-2 items-center">
        <p className="font-bold text-xl">Name</p>
        <p className="font-bold text-xl">Message</p>
        <p className="font-bold text-xl">Amount</p>
        <p className="font-bold text-xl">Currency</p>
        <hr className="col-span-4 border-2 border-foreground" />

        {approvedDonations.map((entry) => {
          return (
            <Fragment key={entry.id}>
              <p className="text-lg">{entry.name}</p>
              <p className="text-lg">{entry.message}</p>
              <p className="text-lg">{formatAmount(entry.amount)}</p>
              <p className="text-lg">{entry.currency}</p>
            </Fragment>
          );
        })}
      </div>
    </div>
  );
}

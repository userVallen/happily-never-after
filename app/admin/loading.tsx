import { Card, CardContent } from '@/components/ui/card';
import ProgressBarSkeleton from '@/components/progress-bar-skeleton';
import PendingDonationsTableSkeleton from '@/components/pending-donations-table-skeleton';
import ApprovedDonationsTableSkeleton from '@/components/approved-donations-table-skeleton';

export default function Loading() {
  return (
    <main className="flex flex-col gap-15 p-8">
      <Card>
        <CardContent>
          <ProgressBarSkeleton />
        </CardContent>
      </Card>

      <PendingDonationsTableSkeleton />
      <ApprovedDonationsTableSkeleton />
    </main>
  );
}

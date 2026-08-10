import { Card, CardContent } from '@/components/ui/card';
import ProgressBarSkeleton from '@/components/progress-bar-skeleton';
import DonationsTableSkeleton from '@/components/donations-table-skeleton';

export default function Loading() {
  return (
    <main className="flex flex-col gap-15 p-8">
      <Card>
        <CardContent>
          <ProgressBarSkeleton />
        </CardContent>
      </Card>

      <DonationsTableSkeleton type="pending" />
      <DonationsTableSkeleton type="approved" />
    </main>
  );
}

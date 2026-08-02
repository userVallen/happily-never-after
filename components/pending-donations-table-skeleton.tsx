import { Skeleton } from '@/components/ui/skeleton';
import { Card, CardHeader, CardContent } from '@/components/ui/card';

export default function PendingDonationsTableSkeleton() {
  return (
    <div className="flex flex-col gap-4">
      <p className="font-heading font-bold text-4xl">Pending Donations</p>

      <div className="hidden md:grid grid-cols-[3fr_5fr_2fr_1fr_1fr] gap-y-2 items-center">
        <p className="font-bold text-xl">Name</p>
        <p className="font-bold text-xl">Message</p>
        <p className="font-bold text-xl">Amount</p>
        <p className="font-bold text-xl">Currency</p>
        <p className="font-bold text-xl">Actions</p>
        <hr className="col-span-5 border-2 border-foreground" />
        <Skeleton className="h-6 w-30" />
        <Skeleton className="h-6 w-30" />
        <Skeleton className="h-6 w-20" />
        <Skeleton className="h-6 w-15" />
        <Skeleton className="h-6 w-15" />
      </div>

      <div className="md:hidden flex flex-col gap-8">
        <Card className="gap-2">
          <CardHeader>
            <Skeleton className="h-6 w-20" />
          </CardHeader>

          <CardContent className="flex flex-col gap-1">
            <Skeleton className="h-6 w-30" />
            <Skeleton className="h-6 w-30" />
            <Skeleton className="h-6 w-30" />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

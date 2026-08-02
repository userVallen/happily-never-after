import { Skeleton } from '@/components/ui/skeleton';

export default function ProgressBarSkeleton() {
  return (
    <div className="flex flex-col gap-2">
      <Skeleton className="h-6 w-50" />
      <Skeleton className="h-6 w-full" />
    </div>
  );
}

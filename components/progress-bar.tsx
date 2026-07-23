import { Progress } from '@/components/ui/progress';

import { formatAmount } from '@/lib/utils';
import { CONVERSION_RATE } from '@/lib/constants';

type ProgressBarProps = {
  currency: 'KRW' | 'IDR';
  goalAmount: number;
  totalDonations: Record<string, number>;
};

export default function ProgressBar({
  currency,
  goalAmount,
  totalDonations,
}: ProgressBarProps) {
  const displayedDonationAmount =
    currency === 'KRW'
      ? totalDonations.krw_total + totalDonations.idr_total / CONVERSION_RATE
      : totalDonations.idr_total + totalDonations.krw_total * CONVERSION_RATE;

  const displayedGoalAmount =
    currency === 'KRW' ? goalAmount : goalAmount * CONVERSION_RATE;

  const progress = (displayedDonationAmount / displayedGoalAmount) * 100;

  return (
    <div>
      <p>
        {currency} {formatAmount(displayedDonationAmount)}/
        {formatAmount(displayedGoalAmount)}
      </p>
      <Progress value={progress}></Progress>
    </div>
  );
}

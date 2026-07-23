'use client';

import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import ProgressBar from '@/components/progress-bar';
import DonationForm from '@/components/donation-form';

import { Campaign } from '@/lib/supabase/types';

type DonationFormProps = {
  campaign: Campaign;
  totalDonations: Record<string, number>;
};

export default function DonationCard({
  campaign,
  totalDonations,
}: DonationFormProps) {
  const [currency, setCurrency] = useState<'KRW' | 'IDR'>('KRW');

  return (
    <Card className="w-[clamp(400px,80vw,800px)] py-8 px-5">
      <CardContent className="flex flex-col gap-8">
        <ProgressBar
          currency={currency}
          goalAmount={campaign.goal_amount}
          totalDonations={totalDonations}
        />

        <div className="flex flex-col gap-2">
          <p className="text-xl font-semibold">Be in the credits!</p>
          <DonationForm
            campaign={campaign}
            currency={currency}
            onCurrencyChange={setCurrency}
          />
        </div>
      </CardContent>
    </Card>
  );
}

'use client';

import { Check, X } from 'lucide-react';

import { toast } from 'sonner';
import { Button } from '@/components/ui/button';

import { approveDonation, rejectDonation } from '@/app/actions/donation';

type DonationActionsProps = {
  donationId: string;
};

export default function DonationActions({ donationId }: DonationActionsProps) {
  const handleApprove = async () => {
    const result = await approveDonation(donationId);

    if (!result.success) {
      toast.error('Failed to approve donation.');
    }

    toast.success('Donation successfully approved.');
  };

  const handleReject = async () => {
    const result = await rejectDonation(donationId);

    if (!result.success) {
      toast.error('Failed to reject donation.');
    }

    toast.success('Donation successfully rejected.');
  };

  return (
    <div className="flex gap-2">
      <Button type="button" onClick={handleApprove}>
        <Check />
      </Button>

      <Button type="button" onClick={handleReject}>
        <X />
      </Button>
    </div>
  );
}

'use client';

import { Check, X, Trash2 } from 'lucide-react';

import { toast } from 'sonner';
import { Button } from '@/components/ui/button';

import {
  approveDonation,
  rejectDonation,
  deleteDonation,
} from '@/app/actions/donation';

type DonationAction = 'approve' | 'reject' | 'delete';

type DonationActionsProps = {
  donationId: string;
  actions: DonationAction[];
};

export default function DonationActions({
  donationId,
  actions,
}: DonationActionsProps) {
  const handleApprove = async () => {
    const result = await approveDonation(donationId);

    if (!result.success) {
      toast.error('Failed to approve donation.');
      return;
    }

    toast.success('Donation successfully approved.');
  };

  const handleReject = async () => {
    const result = await rejectDonation(donationId);

    if (!result.success) {
      toast.error('Failed to reject donation.');
      return;
    }

    toast.success('Donation successfully rejected.');
  };

  const handleDelete = async () => {
    const result = await deleteDonation(donationId);

    if (!result.success) {
      toast.error('Failed to delete donation.');
      return;
    }

    toast.success('Donation successfully deleted.');
  };

  return (
    <div className="flex gap-2">
      {actions.includes('approve') && (
        <Button type="button" onClick={handleApprove}>
          <Check />
        </Button>
      )}

      {actions.includes('reject') && (
        <Button type="button" onClick={handleReject}>
          <X />
        </Button>
      )}

      {actions.includes('delete') && (
        <Button type="button" onClick={handleDelete}>
          <Trash2 />
        </Button>
      )}
    </div>
  );
}

'use server';

import { flattenError } from 'zod';
import { revalidatePath } from 'next/cache';

import { DonationSchema, donationSchema } from '@/lib/validation/donation';
import { createDonationService } from '@/lib/services/donation/create';

import { ActionResult } from '@/app/actions/types';
import { approveDonationService } from '@/lib/services/donation/approve';
import { rejectDonationService } from '@/lib/services/donation/reject';
import { deleteDonationService } from '@/lib/services/donation/delete';

export async function createDonation(
  values: DonationSchema
): Promise<ActionResult> {
  const result = donationSchema.safeParse(values);

  if (!result.success) {
    // Validation error
    const flattenedError = flattenError(result.error);

    return {
      success: false,
      fieldErrors: flattenedError.fieldErrors,
    };
  }

  try {
    await createDonationService(result.data);
  } catch (error) {
    // Internal error
    console.error(error);

    return {
      success: false,
      message: 'Something went wrong.',
    };
  }

  revalidatePath('/');

  return { success: true };
}

export async function approveDonation(
  donationId: string
): Promise<ActionResult> {
  try {
    await approveDonationService(donationId);
  } catch (error) {
    console.error(error);

    return {
      success: false,
      message: 'Something went wrong',
    };
  }

  revalidatePath('/admin');

  return { success: true };
}

export async function rejectDonation(
  donationId: string
): Promise<ActionResult> {
  try {
    await rejectDonationService(donationId);
  } catch (error) {
    console.error(error);

    return {
      success: false,
      message: 'Something went wrong.',
    };
  }

  revalidatePath('/admin');

  return { success: true };
}

export async function deleteDonation(
  donationId: string
): Promise<ActionResult> {
  try {
    await deleteDonationService(donationId);
  } catch (error) {
    console.error(error);

    return {
      success: false,
      message: 'Something went wrong.',
    };
  }

  revalidatePath('/admin');

  return { success: true };
}

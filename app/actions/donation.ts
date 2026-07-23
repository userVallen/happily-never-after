'use server';

import { flattenError } from 'zod';
import { revalidatePath } from 'next/cache';

import {
  CreateDonationInput,
  createDonationSchema,
} from '@/lib/validation/donation';
import { createDonationService } from '@/lib/services/donation/create';

import { ActionResult } from '@/app/actions/types';

export async function createDonation(
  values: CreateDonationInput
): Promise<ActionResult> {
  const result = createDonationSchema.safeParse(values);

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

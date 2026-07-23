import { z } from 'zod';

export const createDonationSchema = z.object({
  campaignId: z.uuid(),
  name: z.string().trim().min(1).max(100),
  amount: z.coerce.number().int().positive(),
  message: z.string().trim().max(400).optional(),
  currency: z.enum(['KRW', 'IDR']),
});

export type CreateDonationInput = z.infer<typeof createDonationSchema>;

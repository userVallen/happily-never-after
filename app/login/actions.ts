'use server';

import { createClient } from '@/lib/supabase/server';
import { LoginSchema } from '@/lib/validation/login';

import { ActionResult } from '@/app/actions/types';

export async function signInWithEmail({
  email,
  password,
}: LoginSchema): Promise<ActionResult> {
  const supabase = await createClient();
  const { error } = await supabase.auth.signInWithPassword({
    email: email,
    password: password,
  });

  if (!error) return { success: true };

  return { success: false, message: 'Invalid email or password.' };
}

import type { User } from '@supabase/supabase-js';

import { createClient } from '@/lib/supabase/server';

type AdminAuthResult =
  | {
      success: true;
      user: User;
    }
  | {
      success: false;
      message: string;
    };

export async function authenticateAdmin(): Promise<AdminAuthResult> {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return { success: false, message: 'You must be logged in.' };
  }

  if (user.email !== process.env.ADMIN_EMAIL) {
    return { success: false, message: 'Unauthorized access.' };
  }

  return { success: true, user: user };
}

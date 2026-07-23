import { Database } from './database.types';

export type Campaign = Database['public']['Tables']['campaigns']['Row'];
export type Donation = Database['public']['Tables']['donations']['Row'];

create type donation_currency as enum ('KRW', 'IDR');
create type donation_status as enum ('pending', 'approved', 'rejected');

create table campaigns (
    id uuid primary key default gen_random_uuid(),
    title text not null,
    goal_amount bigint not null
);

create table donations (
    id uuid primary key default gen_random_uuid(),
    campaign_id uuid not null references campaigns(id),
    name text not null,
    message text not null,
    amount bigint not null,
    currency donation_currency not null,
    status donation_status not null default 'pending',
    created_at timestamptz not null default now(),
    updated_at timestamptz not null default now()
);
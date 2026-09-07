-- ============================================================
-- contact_inquiries table for Trinetra ARC
-- Run this in: Supabase Dashboard -> SQL Editor
-- ============================================================

create table if not exists public.contact_inquiries (
  id              uuid        primary key default gen_random_uuid(),
  created_at      timestamptz not null    default now(),
  name            text        not null,
  email           text        not null,
  company         text,
  project_type    text,
  services        text[]      default '{}',
  project_details text        not null,
  status          text        not null    default 'new',
  email_sent      boolean     not null    default false,
  source          text        not null    default 'website-contact-form'
);

create index if not exists contact_inquiries_created_at_idx
  on public.contact_inquiries (created_at desc);

create index if not exists contact_inquiries_status_idx
  on public.contact_inquiries (status);

alter table public.contact_inquiries enable row level security;

-- Visitors using the anon key CANNOT read inquiries.
-- The Edge Function uses the service-role key which bypasses RLS.
-- No public insert/select policies are defined intentionally.

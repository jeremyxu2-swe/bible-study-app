-- Run this once in Supabase → SQL Editor → New query → Run.
-- Creates the tables for notes and folders, with rules so each person can only see their own.

create table if not exists notes (
  user_id   uuid not null references auth.users on delete cascade default auth.uid(),
  key       text not null,
  title     text,
  html      text default '',
  text      text default '',
  tags      text[] default '{}',
  folder_id text,
  created   timestamptz default now(),
  updated   timestamptz default now(),
  deleted   boolean default false,
  primary key (user_id, key)
);

create table if not exists folders (
  user_id   uuid not null references auth.users on delete cascade default auth.uid(),
  id        text not null,
  name      text not null,
  parent_id text,
  color     text,
  updated   timestamptz default now(),
  deleted   boolean default false,
  primary key (user_id, id)
);

alter table notes   enable row level security;
alter table folders enable row level security;

drop policy if exists "own notes" on notes;
drop policy if exists "own folders" on folders;
create policy "own notes"   on notes   for all using (auth.uid() = user_id) with check (auth.uid() = user_id);
create policy "own folders" on folders for all using (auth.uid() = user_id) with check (auth.uid() = user_id);

create index if not exists notes_updated_idx   on notes (user_id, updated);
create index if not exists folders_updated_idx on folders (user_id, updated);

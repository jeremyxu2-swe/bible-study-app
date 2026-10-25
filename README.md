# Lamp & Path — Bible Study App

A high-level view of the Bible: all 66 books with author, date written, background, summary, empire, sections and chapter summaries; key characters; prophecies of Christ; and your own notes.

## Open it

Double-click **Bible Study App.html**. It opens in your browser (Chrome or Edge work best). No internet or install is needed, except for the fonts.

## Your notes

- Every book, section, chapter and character has a notebook. Click the note (or **Edit**) to start writing; the formatting buttons appear only while editing. Press **Done**, Esc, or click elsewhere to finish. Notes save automatically as you type.
- Buttons: bold, italic, highlight, bullets, numbered list, checklist, and **⋯** for heading, quote, add tag, indent/outdent and undo/redo.
- Type `- ` to start a bullet list. Write `#tags` (like `#faith`) to find notes later.
- **Folders:** on **My Notes**, create folders and sub-folders (+ New), and rename, move, recolor or delete them (⋯, or press and hold on a phone). Deleting a folder never deletes notes — they move to Unfiled. Use the folder chip on any note to file it.
- **Stand-alone notes:** **+ New note** makes a note that isn't tied to a chapter (sermon notes, prayers, topic studies).
- **Search:** the My Notes search bar finds `#tags` or any words in your notes, with suggestions as you type and matches highlighted. Search one folder (and its sub-folders) or all notes.
- Notes and folders are stored **in this browser on this computer**. Use **My Notes → Export backup** regularly to save a copy, and **Import backup** to restore them or move them to another device.

## Syncing notes with Supabase

Notes always save on the device first, so the app works offline. When you sign in, they also sync to your Supabase account and appear on your other devices.

**One-time setup**
1. In Supabase, open **SQL Editor → New query**, paste everything from `supabase-setup.sql`, and click **Run**.
2. Open **Authentication → Sign In / Providers → Email** and turn off **Confirm email**, then **Save**. (The app signs in with email + password, so no emails are sent.)
3. Open **Project Settings → API Keys**, copy the **Publishable** key, and put it in a file named `.env` in this folder (see `.env.example`). Never use the secret / service_role key.
4. Rebuild: `npm run build:single` (and `npm run build` for the hosted version).

**Using it**: on **My Notes**, under **Sync across devices**, choose **Create account** the first time (email + password). On every other device, choose **Sign in** with the same email and password. Your existing notes and folders upload the first time. If the same note is edited on two devices, the most recent edit wins.

**Optional**: after creating your account, turn off **Allow new users to sign up** on the same Supabase page so no one else can create accounts on your project.

**Forgot your password?** In Supabase → **Authentication → Users**, delete your user and create the account again from the app — your notes are still on your devices and will upload again. (Or set up custom SMTP in Supabase to enable password-reset emails.)


## Putting it on your phone

The phone version needs the app to be hosted online (free):

1. Install Node.js (https://nodejs.org), open a terminal in this folder, and run `npm install`, then `npm run build`.
2. Go to https://app.netlify.com/drop and drag the new `dist` folder onto the page.
3. Open the link on your phone and choose **Add to Home Screen**. It then works like an app, even offline.

Notes don't sync between devices yet. Use Export/Import until syncing is added (planned: Supabase).

## Editing the content

All content lives in `src/data/`:

| File | What's in it |
|---|---|
| `booksOT.js`, `booksNT.js` | Author, dates, background, summary, empire, sections |
| `chapters/*.js` | One summary per chapter, in order |
| `characters.js` | People: bio, story, related people |
| `prophecies.js` | Old Testament promise → New Testament fulfillment |
| `eras.js` | Timeline eras and empires |

After editing, run `npm run build:single` and copy `dist-single/index.html` over `Bible Study App.html`.

Ruth and 1 Samuel chapter summaries, sections and the Ruth/Saul/David bios are from your own study notes. Everything else was drafted by Claude: dates are approximate and authorship follows traditional views. Treat it as a starting point and check it against your Bible.

## Bible version

Key verses are quoted from the ESV® Bible (The Holy Bible, English Standard Version®), © 2001 by Crossway, a publishing ministry of Good News Publishers. Used by permission. All rights reserved. Crossway allows quoting up to 1,000 verses this way in a non-commercial work, with this notice.

## For developers

- `npm run dev`: live development server
- `npm run build`: installable web app (PWA) in `dist/`
- `npm run build:single`: one self-contained HTML file in `dist-single/`

## Chapter text from the ESV API

Tap a chapter summary (on a book page or a chapter page) to load that chapter's full ESV text below it. The request goes through a Supabase Edge Function, so the ESV API key never ships in the app.

One-time setup:
1. Create a free ESV API application at https://api.esv.org/account/create-application/ (personal, non-commercial use) and copy its key.
2. Install the Supabase CLI and link this project: `npx supabase login`, then `npx supabase link --project-ref hdrpuqhfkmmylmojqsas`.
3. Store the key: `npx supabase secrets set ESV_API_KEY=<your key>`.
   Optional: `npx supabase secrets set ALLOWED_ORIGINS=https://jeremyxu2-swe.github.io,http://localhost:5173` so only your site can use it.
4. Deploy: `npx supabase functions deploy esv-passage --no-verify-jwt` (the app uses a publishable key, which isn't a JWT; `supabase/config.toml` says the same).

Recently read chapters are saved on the device (IndexedDB) for offline reading, within the ESV terms: no more than 500 verses in total and never more than half of a book; the oldest chapters are removed first. Apocrypha books keep their old behavior (the ESV API doesn't serve them).

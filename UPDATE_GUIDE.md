# How to apply this update to your repo

Everything in the `wedding-site-update/` folder mirrors your repo's structure,
so applying it is mostly copy-paste. There are also **five files to delete**,
which copying can't do for you.

---

## Step 1 — Open a terminal in your cloned repo

```bash
cd path/to/your/wedding-website
git checkout main
git pull                          # make sure you're on the latest
git checkout -b remove-chinese-and-add-invitation
```

Working on a branch means that if anything looks wrong you can throw it away
with `git checkout main` and nothing is lost.

## Step 2 — Delete the files that are going away

```bash
git rm -r src/i18n
git rm src/components/LanguageToggle.tsx
git rm src/pages/Gallery.tsx
git rm src/pages/SaveTheDate.tsx
git rm src/assets/gallery-1.jpg src/assets/gallery-2.jpg src/assets/gallery-3.jpg \
       src/assets/gallery-4.jpg src/assets/gallery-5.jpg src/assets/gallery-6.jpg
```

If `git rm` complains that a file doesn't exist, it's already gone — skip it.

## Step 3 — Copy the new files in

Unzip `wedding-site-update.zip` somewhere, then copy its contents over your
repo root, overwriting when asked.

**macOS / Linux:**

```bash
cp -R ~/Downloads/wedding-site-update/. ./
```

(The `/.` at the end matters — it copies the *contents* of the folder, not the
folder itself.)

**Windows:** open both folders in File Explorer, select everything inside
`wedding-site-update`, drag into your repo folder, and choose
**Replace the files in the destination**.

Files you're adding or replacing:

| Path | What changed |
|---|---|
| `index.html` | Adds the invitation's web fonts |
| `vercel.json` | SPA routing fallback (new) |
| `public/_redirects` | SPA routing fallback (new) |
| `public/invite/*` | 9 invitation images (new) |
| `src/App.tsx` | Routes cleaned up; nested-router bug fixed |
| `src/components/Navigation.tsx` | Language toggle + 2 tabs removed |
| `src/components/RsvpConfirmation.tsx` | Rewritten confirmation screen |
| `src/pages/Rsvp.tsx` | Meal question removed; crash fixed |
| `src/pages/Timelines.tsx` | New schedule |
| `src/pages/Gifts.tsx` | Zelle number, memo note, Venmo QR |
| `src/pages/Invitation.tsx` | Real invitation page (new) |
| `src/pages/invitation.css` | Invitation styles, scoped (new) |
| `src/pages/invitationHtml.ts` | Invitation markup (new) |
| `src/assets/venmo-qr.png` | Venmo QR code (new) |
| `src/lib/googleForm.ts` | `meal` removed from the payload |
| `GOOGLE_FORM_SETUP.md` | Notes on the meal removal |

## Step 4 — Check it locally before pushing

```bash
npm install
npm run build      # must finish with "✓ built in ..."
npm run dev        # then open http://localhost:8080
```

Click through all five tabs. Specifically check:

- `/invitation` renders the full invitation with all the watercolor icons
- `/gifts` shows the Venmo QR and the phone number
- `/rsvp` has no meal dropdown, and submitting shows the new confirmation
- No "EN / 中文" toggle anywhere

If `npm run build` fails, stop here and send me the error — don't push a
broken build.

## Step 5 — Commit and push

```bash
git add -A
git status          # skim the list; it should match the table above
git commit -m "Remove Chinese translations, add invitation page, update RSVP/gifts/timeline"
git push -u origin remove-chinese-and-add-invitation
```

Then on GitHub, open a Pull Request and merge it into `main`. Or, if you'd
rather skip the branch dance:

```bash
git checkout main
git merge remove-chinese-and-add-invitation
git push
```

## Step 6 — Republish through Lovable

Lovable picks up GitHub changes but doesn't deploy them on its own. Open your
Lovable project, let it sync, and hit **Publish**.

## Step 7 — Verify on the live site

Type these directly into the address bar (don't click links — direct URL
access is what QR codes do, and it's what the routing config fixes):

- `https://elaine-byron.com/invitation`
- `https://elaine-byron.com/gifts`
- `https://elaine-byron.com/rsvp`
- `https://elaine-byron.com/timelines`

All four should load. If any shows a 404, the SPA fallback isn't active on
your host — tell me who's hosting it and I'll give you the right config file.

---

## If something goes wrong

Nothing is pushed until Step 5, so before that point:

```bash
git checkout -- .        # undo all uncommitted changes
```

After pushing, roll back the whole thing with:

```bash
git revert -m 1 HEAD
git push
```

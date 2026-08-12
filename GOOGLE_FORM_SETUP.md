# RSVP → Google Form → Google Sheet setup (~5 minutes)

The RSVP page posts responses straight to a Google Form's public endpoint.
Guests never see the form and are **not** asked to sign in. Every response
appears in the Form's "Responses" tab and in a linked Google Sheet.

## 1. Create the form

Go to https://forms.google.com and create a new blank form (name it e.g.
"Wedding RSVP Responses"). Add exactly these **7 questions**, all of type
**Short answer** except where noted:

| # | Question title            | Type          |
|---|---------------------------|---------------|
| 1 | Full Name                 | Short answer  |
| 2 | Email                     | Short answer  |
| 3 | Phone                     | Short answer  |
| 4 | Attending                 | Short answer  |
| 5 | Number of Guests          | Short answer  |
| 6 | Guest Details             | **Paragraph** |
| 7 | Message to the Couple     | **Paragraph** |

Do **not** mark any question required, and do **not** enable
"Limit to 1 response" or "Collect email addresses" in Settings →
Responses (those force sign-in, which would break the no-login flow).

"Guest Details" receives one line per guest with name, age, allergies,
and drink preference, e.g.:

```
Guest 1: Jane Doe | Age: 21+ | Allergies/Dietary: peanuts | Drinks: Wine
Guest 2: John Doe | Age: 21+ | Allergies/Dietary: None | Drinks: Beer
```

> **Note:** Meal preference used to appear in this line and was removed in
> August 2026. Nothing needs to change in the Google Form — meal was never
> its own question. See "Removing meal preference" at the bottom of this file.

## 2. Get the FORM_ID

Click **Send** → link icon → copy the link. It looks like:

```
https://docs.google.com/forms/d/e/1FAIpQLSc...long-id.../viewform
```

The long string between `/d/e/` and `/viewform` is your **FORM_ID**.

## 3. Get the entry IDs

In the form editor, click ⋮ (top-right) → **Get pre-filled link**.
Type a distinct dummy value into each field (e.g. `AAA`, `BBB`, `CCC`, ...),
click **Get link** → **Copy link**. Paste it somewhere; it contains pairs like:

```
...&entry.1234567890=AAA&entry.2345678901=BBB&...
```

Match each `entry.XXXXXXXXXX` to its field by the dummy value you typed.

## 4. Paste into the site

Open `src/lib/googleForm.ts` and replace:

- `FORM_ID: "REPLACE_WITH_YOUR_FORM_ID"` with your FORM_ID
- each `entry.100000X` placeholder with the matching real entry ID

## 5. Link the Google Sheet

In the form's **Responses** tab, click the green Sheets icon →
**Create a new spreadsheet**. Every RSVP now lands there automatically,
one row per response, with a timestamp column.

## 6. Test

Run the site, submit a test RSVP, and confirm it appears in the Sheet.
(Until the config is filled in, submissions are kept only in the visitor's
browser localStorage and a warning is printed to the console.)

### Notes

- The browser sends the POST with `mode: "no-cors"`, so the site cannot
  read Google's response — it optimistically shows the thank-you screen.
  This is a normal limitation of the no-login Google Form approach.
- The site itself also validates email/phone before sending.


## Removing meal preference (August 2026)

Meal preference was dropped from the RSVP form. Here's the full picture of
what changed and what, if anything, you need to do on Google's side.

### In the code (already done)

- `src/pages/Rsvp.tsx` — the "Meal Preference" dropdown and the
  `MEAL_OPTIONS` list are gone.
- `src/lib/googleForm.ts` — `meal` was removed from the `GuestInfo` type and
  from the `serializeGuests()` output string.

### In the Google Form — nothing to delete

This is the important part: **meal was never a separate Google Form
question.** All per-guest answers are packed into the single **Guest Details**
paragraph field before being submitted. So there is no "Meal Preference"
question in your form to find and delete, and no entry ID to remove.

If you open your form and *do* see a question called "Meal Preference", it was
added by hand and the site never wrote to it. In that case, delete it with:
form editor → click the question → trash-can icon → **Delete**.

### In the Google Sheet — nothing to delete either

For the same reason, there is no "Meal" column. Meal appeared as text
*inside* the Guest Details cell, like `| Meal: fish |`.

- **New responses** submitted after you deploy this update will simply not
  contain the `| Meal: ... |` segment. No action needed.
- **Old responses** already in the sheet keep their `| Meal: ... |` text.
  Leave them — the sheet is your record of what people actually said.

If you'd rather scrub the meal text out of historical rows:

1. Open the linked Google Sheet.
2. Select the **Guest Details** column.
3. **Edit → Find and replace**.
4. Tick **Search using regular expressions** and **Also search within formulas**.
5. Find: `\s*\|\s*Meal:[^|]*` — Replace with: (leave empty)
6. Click **Replace all**.

Make a copy of the sheet first (**File → Make a copy**) if you want an undo
point — find-and-replace is not reversible beyond Ctrl+Z.

### Don't delete the column itself

Never delete or reorder columns in the responses sheet. Google Forms writes
to it by position, so removing a column makes every future response land in
the wrong place.

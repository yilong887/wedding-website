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

"Guest Details" receives one line per guest with name, age, meal,
allergies, and drink preference, e.g.:

```
Guest 1: Jane Doe | Age: 21+ | Meal: fish | Allergies/Dietary: peanuts | Drinks: Wine
Guest 2: John Doe | Age: 21+ | Meal: chicken | Allergies/Dietary: None | Drinks: Beer
```

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

/**
 * Google Form backend for the RSVP page.
 *
 * The RSVP form POSTs directly to a Google Form's public `formResponse`
 * endpoint. Guests never see the form and are never asked to sign in.
 * Every submission lands in the Form's "Responses" tab and in the Google
 * Sheet linked to the form.
 *
 * Setup instructions: see GOOGLE_FORM_SETUP.md in the project root.
 * Fill in FORM_ID and the entry IDs below, then you're live.
 */

export const GOOGLE_FORM_CONFIG = {
  /** From your form's URL: https://docs.google.com/forms/d/e/<FORM_ID>/viewform */
  FORM_ID: "1FAIpQLSeGmVHUTNoW3N2uUHsOoD0FHvCRtTyNpWzIhI-cNa6B1lMnnw",

  /** entry.XXXXXXXX IDs from the form's prefilled link (see setup doc). */
  ENTRIES: {
    fullName: "entry.328065147",
    email: "entry.75001668",
    phone: "entry.905119440",
    attending: "entry.1080123360",
    guestCount: "entry.1911978283",
    guestDetails: "entry.537628484", // one paragraph field; all guests serialized
    message: "entry.1000007",
  },
};

export interface GuestInfo {
  name: string;
  age: string;
  meal: string;
  allergies: string;
  alcohol: string;
}

export interface RsvpPayload {
  fullName: string;
  email: string;
  phone: string;
  attending: boolean;
  guestCount: number;
  guests: GuestInfo[];
  message: string;
}

export const isFormConfigured = () =>
  !GOOGLE_FORM_CONFIG.FORM_ID.startsWith("REPLACE");

export const serializeGuests = (guests: GuestInfo[]) =>
  guests
    .map(
      (g, i) =>
        `Guest ${i + 1}: ${g.name || "—"} | Age: ${g.age || "—"} | Meal: ${
          g.meal || "—"
        } | Allergies/Dietary: ${g.allergies || "None"} | Drinks: ${
          g.alcohol || "—"
        }`
    )
    .join("\n");

/**
 * Submits the RSVP to the Google Form. Uses `no-cors`, so the response is
 * opaque — Google doesn't allow reading it cross-origin, but the submission
 * still records. Throws only on network failure.
 */
export async function submitToGoogleForm(payload: RsvpPayload): Promise<void> {
  const { FORM_ID, ENTRIES } = GOOGLE_FORM_CONFIG;
  const body = new URLSearchParams();
  body.append(ENTRIES.fullName, payload.fullName);
  body.append(ENTRIES.email, payload.email);
  body.append(ENTRIES.phone, payload.phone);
  body.append(ENTRIES.attending, payload.attending ? "Joyfully Accept" : "Regretfully Decline");
  body.append(ENTRIES.guestCount, String(payload.guestCount));
  body.append(ENTRIES.guestDetails, payload.attending ? serializeGuests(payload.guests) : "");
  body.append(ENTRIES.message, payload.message);

  await fetch(
    `https://docs.google.com/forms/d/e/${FORM_ID}/formResponse`,
    {
      method: "POST",
      mode: "no-cors",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: body.toString(),
    }
  );
}

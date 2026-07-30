import { useState } from "react";
import ScrollReveal from "@/components/ScrollReveal";
import FloralDivider from "@/components/FloralDivider";
import {
  GuestInfo,
  isFormConfigured,
  submitToGoogleForm,
} from "@/lib/googleForm";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
// 10–15 digits after stripping spaces, dashes, dots, parens; optional leading +
const PHONE_RE = /^\+?\d{10,15}$/;

const AGE_OPTIONS = ["Under 12", "12–20", "21+"];
const MEAL_OPTIONS = [
  { value: "chicken", label: "Herb-Roasted Chicken" },
  { value: "fish", label: "Pan-Seared Salmon" },
  { value: "vegetarian", label: "Garden Vegetarian" },
];
const ALCOHOL_OPTIONS = [
  "No alcohol",
  "Wine",
  "Beer",
  "Cocktails",
  "Surprise me!",
];

const emptyGuest = (): GuestInfo => ({
  name: "",
  age: "",
  meal: "",
  allergies: "",
  alcohol: "",
});

const Rsvp = () => {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    guests: "1",
    attending: true,
    notes: "",
  });
  const [guestInfos, setGuestInfos] = useState<GuestInfo[]>([emptyGuest()]);

  const guestCount = parseInt(form.guests, 10);

  const setGuestCount = (value: string) => {
    const n = parseInt(value, 10);
    setGuestInfos((prev) => {
      const next = [...prev];
      while (next.length < n) next.push(emptyGuest());
      return next.slice(0, n);
    });
    setForm({ ...form, guests: value });
  };

  const updateGuest = (i: number, field: keyof GuestInfo, value: string) => {
    setGuestInfos((prev) =>
      prev.map((g, idx) => (idx === i ? { ...g, [field]: value } : g))
    );
  };

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!form.name.trim()) errs.name = "Please enter your name.";
    if (!form.email.trim()) errs.email = "Email is required.";
    else if (!EMAIL_RE.test(form.email.trim()))
      errs.email = "Please enter a valid email address (e.g. you@example.com).";
    const cleanedPhone = form.phone.replace(/[\s\-().]/g, "");
    if (!form.phone.trim()) errs.phone = "Phone number is required.";
    else if (!PHONE_RE.test(cleanedPhone))
      errs.phone = "Please enter a valid phone number (10–15 digits).";
    if (form.attending) {
      guestInfos.forEach((g, i) => {
        if (!g.name.trim())
          errs[`guest-${i}-name`] = `Please enter Guest ${i + 1}'s name.`;
      });
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitting(true);

    const payload = {
      fullName: form.name.trim(),
      email: form.email.trim(),
      phone: form.phone.trim(),
      attending: form.attending,
      guestCount: form.attending ? guestCount : 0,
      guests: form.attending ? guestInfos : [],
      message: form.notes.trim(),
    };

    // Local backup copy regardless of backend state
    try {
      const existing = JSON.parse(localStorage.getItem("wedding-rsvps") || "[]");
      existing.push({ ...payload, submittedAt: new Date().toISOString() });
      localStorage.setItem("wedding-rsvps", JSON.stringify(existing));
    } catch {
      /* storage unavailable — ignore */
    }

    try {
      if (isFormConfigured()) {
        await submitToGoogleForm(payload);
      } else {
        console.warn(
          "[RSVP] Google Form not configured yet — see GOOGLE_FORM_SETUP.md. Response saved to localStorage only."
        );
      }
      setSubmitted(true);
    } catch {
      setErrors({
        submit:
          "Something went wrong sending your RSVP. Please check your connection and try again.",
      });
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <main className="min-h-screen flex items-center justify-center pt-16">
        <ScrollReveal>
          <div className="text-center px-6 max-w-md">
            <FloralDivider className="mb-8" />
            <h2 className="wedding-heading text-foreground mb-4">Thank You</h2>
            <p className="text-muted-foreground leading-relaxed">
              We've received your RSVP. We're so excited to celebrate with you!
            </p>
            <FloralDivider className="mt-8" />
          </div>
        </ScrollReveal>
      </main>
    );
  }

  const inputClass =
    "w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-sage/30 focus:border-sage transition-all text-sm";
  const errorInputClass =
    "border-destructive focus:border-destructive focus:ring-destructive/20";
  const labelClass =
    "text-xs tracking-widest uppercase text-muted-foreground mb-2 block";
  const errorTextClass = "text-xs text-destructive mt-1.5";

  return (
    <main className="min-h-screen pt-24 pb-16">
      <div className="max-w-lg mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-12">
            <h1 className="wedding-heading text-foreground mb-3">RSVP</h1>
            <p className="text-muted-foreground">Kindly respond by August 25, 2026</p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={150}>
          <form onSubmit={handleSubmit} noValidate className="wedding-card space-y-6">
            <div>
              <label htmlFor="rsvp-name" className={labelClass}>
                Full Name
              </label>
              <input
                id="rsvp-name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className={`${inputClass} ${errors.name ? errorInputClass : ""}`}
                placeholder="Your name"
              />
              {errors.name && <p className={errorTextClass}>{errors.name}</p>}
            </div>

            <div>
              <label htmlFor="rsvp-email" className={labelClass}>
                Email
              </label>
              <input
                id="rsvp-email"
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className={`${inputClass} ${errors.email ? errorInputClass : ""}`}
                placeholder="your@email.com"
              />
              {errors.email && <p className={errorTextClass}>{errors.email}</p>}
            </div>

            <div>
              <label htmlFor="rsvp-phone" className={labelClass}>
                Phone Number
              </label>
              <input
                id="rsvp-phone"
                type="tel"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className={`${inputClass} ${errors.phone ? errorInputClass : ""}`}
                placeholder="(555) 123-4567"
              />
              {errors.phone && <p className={errorTextClass}>{errors.phone}</p>}
            </div>

            <div>
              <span className={labelClass}>Will you be attending?</span>
              <div className="flex gap-3">
                {[true, false].map((val) => (
                  <button
                    type="button"
                    key={String(val)}
                    onClick={() => setForm({ ...form, attending: val })}
                    className={`flex-1 py-3 rounded-lg text-sm tracking-wide transition-all duration-200 active:scale-[0.97] ${
                      form.attending === val
                        ? "bg-sage text-primary-foreground shadow-sm"
                        : "bg-secondary text-muted-foreground hover:bg-secondary/80"
                    }`}
                  >
                    {val ? "Joyfully Accept" : "Regretfully Decline"}
                  </button>
                ))}
              </div>
            </div>

            {form.attending && (
              <>
                <div>
                  <label htmlFor="rsvp-guests" className={labelClass}>
                    Number of Guests (including yourself)
                  </label>
                  <select
                    id="rsvp-guests"
                    value={form.guests}
                    onChange={(e) => setGuestCount(e.target.value)}
                    className={inputClass}
                  >
                    {[1, 2, 3, 4].map((n) => (
                      <option key={n} value={n}>
                        {n} {n === 1 ? "Guest" : "Guests"}
                      </option>
                    ))}
                  </select>
                </div>

                {guestInfos.map((guest, i) => (
                  <fieldset
                    key={i}
                    className="rounded-xl border border-border bg-secondary/40 p-5 space-y-4"
                  >
                    <legend className="px-2 text-xs tracking-widest uppercase text-sage font-medium">
                      Guest {i + 1}
                      {i === 0 && guestCount > 1 ? " (You)" : ""}
                    </legend>

                    <div>
                      <label htmlFor={`guest-${i}-name`} className={labelClass}>
                        Name
                      </label>
                      <input
                        id={`guest-${i}-name`}
                        value={guest.name}
                        onChange={(e) => updateGuest(i, "name", e.target.value)}
                        className={`${inputClass} ${
                          errors[`guest-${i}-name`] ? errorInputClass : ""
                        }`}
                        placeholder={i === 0 ? "Your name" : `Guest ${i + 1}'s name`}
                      />
                      {errors[`guest-${i}-name`] && (
                        <p className={errorTextClass}>{errors[`guest-${i}-name`]}</p>
                      )}
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label htmlFor={`guest-${i}-age`} className={labelClass}>
                          Age
                        </label>
                        <select
                          id={`guest-${i}-age`}
                          value={guest.age}
                          onChange={(e) => updateGuest(i, "age", e.target.value)}
                          className={inputClass}
                        >
                          <option value="">Select</option>
                          {AGE_OPTIONS.map((a) => (
                            <option key={a} value={a}>
                              {a}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label htmlFor={`guest-${i}-alcohol`} className={labelClass}>
                          Drinks
                        </label>
                        <select
                          id={`guest-${i}-alcohol`}
                          value={guest.alcohol}
                          onChange={(e) => updateGuest(i, "alcohol", e.target.value)}
                          className={inputClass}
                        >
                          <option value="">Select</option>
                          {ALCOHOL_OPTIONS.map((a) => (
                            <option key={a} value={a}>
                              {a}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor={`guest-${i}-meal`} className={labelClass}>
                        Meal Preference
                      </label>
                      <select
                        id={`guest-${i}-meal`}
                        value={guest.meal}
                        onChange={(e) => updateGuest(i, "meal", e.target.value)}
                        className={inputClass}
                      >
                        <option value="">Select preference</option>
                        {MEAL_OPTIONS.map((m) => (
                          <option key={m.value} value={m.value}>
                            {m.label}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label htmlFor={`guest-${i}-allergies`} className={labelClass}>
                        Allergies / Dietary Needs
                      </label>
                      <input
                        id={`guest-${i}-allergies`}
                        value={guest.allergies}
                        onChange={(e) => updateGuest(i, "allergies", e.target.value)}
                        className={inputClass}
                        placeholder="e.g. peanut allergy, gluten-free (optional)"
                      />
                    </div>
                  </fieldset>
                ))}
              </>
            )}

            <div>
              <label htmlFor="rsvp-notes" className={labelClass}>
                Message to the Couple
              </label>
              <textarea
                id="rsvp-notes"
                value={form.notes}
                onChange={(e) => setForm({ ...form, notes: e.target.value })}
                rows={3}
                className={inputClass}
                placeholder="Share your well wishes..."
              />
            </div>

            {errors.submit && <p className={errorTextClass}>{errors.submit}</p>}

            <button
              type="submit"
              disabled={submitting}
              className="w-full py-3 bg-sage text-primary-foreground rounded-lg text-sm tracking-widest uppercase hover:opacity-90 transition-all duration-200 active:scale-[0.97] shadow-sm disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {submitting ? "Sending..." : "Send RSVP"}
            </button>
          </form>
        </ScrollReveal>
      </div>
    </main>
  );
};

export default Rsvp;

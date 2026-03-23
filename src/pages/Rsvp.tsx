import { useState } from "react";
import ScrollReveal from "@/components/ScrollReveal";
import FloralDivider from "@/components/FloralDivider";

const Rsvp = () => {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    guests: "1",
    attending: true,
    meal: "",
    notes: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Store in localStorage as mock backend
    const existing = JSON.parse(localStorage.getItem("wedding-rsvps") || "[]");
    existing.push({ ...form, submittedAt: new Date().toISOString() });
    localStorage.setItem("wedding-rsvps", JSON.stringify(existing));
    setSubmitted(true);
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

  return (
    <main className="min-h-screen pt-24 pb-16">
      <div className="max-w-lg mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-12">
            <h1 className="wedding-heading text-foreground mb-3">RSVP</h1>
            <p className="text-muted-foreground">Kindly respond by August 1, 2026</p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={150}>
          <form onSubmit={handleSubmit} className="wedding-card space-y-6">
            <div>
              <label className="text-xs tracking-widest uppercase text-muted-foreground mb-2 block">
                Full Name
              </label>
              <input
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className={inputClass}
                placeholder="Your name"
              />
            </div>

            <div>
              <label className="text-xs tracking-widest uppercase text-muted-foreground mb-2 block">
                Email or Phone
              </label>
              <input
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className={inputClass}
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label className="text-xs tracking-widest uppercase text-muted-foreground mb-2 block">
                Will you be attending?
              </label>
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
                  <label className="text-xs tracking-widest uppercase text-muted-foreground mb-2 block">
                    Number of Guests
                  </label>
                  <select
                    value={form.guests}
                    onChange={(e) => setForm({ ...form, guests: e.target.value })}
                    className={inputClass}
                  >
                    {[1, 2, 3, 4].map((n) => (
                      <option key={n} value={n}>
                        {n} {n === 1 ? "Guest" : "Guests"}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="text-xs tracking-widest uppercase text-muted-foreground mb-2 block">
                    Meal Preference
                  </label>
                  <select
                    value={form.meal}
                    onChange={(e) => setForm({ ...form, meal: e.target.value })}
                    className={inputClass}
                  >
                    <option value="">Select preference</option>
                    <option value="chicken">Herb-Roasted Chicken</option>
                    <option value="fish">Pan-Seared Salmon</option>
                    <option value="vegetarian">Garden Vegetarian</option>
                  </select>
                </div>
              </>
            )}

            <div>
              <label className="text-xs tracking-widest uppercase text-muted-foreground mb-2 block">
                Message to the Couple
              </label>
              <textarea
                value={form.notes}
                onChange={(e) => setForm({ ...form, notes: e.target.value })}
                rows={3}
                className={inputClass}
                placeholder="Share your well wishes..."
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-sage text-primary-foreground rounded-lg text-sm tracking-widest uppercase hover:opacity-90 transition-all duration-200 active:scale-[0.97] shadow-sm"
            >
              Send RSVP
            </button>
          </form>
        </ScrollReveal>
      </div>
    </main>
  );
};

export default Rsvp;

import { Link } from "react-router-dom";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const CONTACT_EMAIL = "yilongchen2018@gmail.com";

type Props = {
  /** Pass the guest's answer so the copy matches. Defaults to attending. */
  attending?: boolean;
};

export function RsvpConfirmation({ attending = true }: Props) {
  return (
    <main className="min-h-screen pt-24 pb-16">
      <section className="mx-auto w-full max-w-xl px-6 text-center">
        <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-sage/15">
          <Check className="text-sage" size={26} strokeWidth={2.5} />
        </div>

        <p className="text-xs uppercase tracking-[0.24em] text-muted-foreground">
          RSVP Received
        </p>

        <h1 className="mt-4 wedding-heading text-foreground">
          {attending ? "Thank you! we can't wait!" : "Thank you for letting us know"}
        </h1>

        <p className="mt-5 text-base leading-relaxed text-muted-foreground">
          {attending
            ? "We've received your RSVP and you're on the guest list. We're so happy you'll be there to celebrate with us by the lake."
            : "We've received your RSVP. We'll miss you on the day, but we're grateful you took the time to respond."}
        </p>

        {/* What happens next */}
        <div className="wedding-card mt-10 text-left">
          <h2 className="text-xs uppercase tracking-[0.2em] text-sage font-medium mb-3">
            What happens next
          </h2>
          <p className="text-sm leading-relaxed text-muted-foreground">
            A confirmation email is on its way to the address you gave us. If it
            hasn't arrived within a few minutes, please check your spam or
            promotions folder. Still nothing? Please get in touch at{" "}
            <a
              href={`mailto:${CONTACT_EMAIL}?subject=RSVP%20confirmation`}
              className="text-sage underline-offset-4 hover:underline"
            >
              {CONTACT_EMAIL}
            </a>{" "}
            and we'll make sure you're counted.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            And of course, if your plans happen to change before August 25, 2026, just reply to this email and let us know. We’d be more than happy to make any changes for you.
          </p>
        </div>

        {/* Gifts — set apart so it reads as a gentle aside, not a request */}
        <div className="mt-12 border-t border-border pt-12">
          <h2 className="wedding-subheading text-foreground">
            One last thing
          </h2>
          <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
            Your presence is truly the only gift we're hoping for. If you'd still
            like to mark the occasion, we've set up a honeymoon fund toward our
            first adventure as a married couple.
          </p>

          <Button asChild variant="outline" className="mt-7 rounded-full px-7">
            <Link to="/gifts">Visit our honeymoon fund</Link>
          </Button>
        </div>

        {/* Exits */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm">
          <Link
            to="/timelines"
            className="text-muted-foreground underline-offset-4 hover:underline"
          >
            View the day's schedule
          </Link>
          <Link
            to="/"
            className="text-muted-foreground underline-offset-4 hover:underline"
          >
            Back to home
          </Link>
        </div>
      </section>
    </main>
  );
}

export default RsvpConfirmation;

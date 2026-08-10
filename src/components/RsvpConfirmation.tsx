import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/i18n/LanguageContext";

type Props = {
  /** Pass the guest's answer so the copy matches. Defaults to attending. */
  attending?: boolean;
};

export function RsvpConfirmation({ attending = true }: Props) {
  const { t } = useLanguage();

  return (
    <section className="mx-auto w-full max-w-xl px-6 py-16 text-center">
      {/* Confirmation */}
      <p className="text-xs uppercase tracking-[0.24em] text-muted-foreground">
        {t("confirm.eyebrow")}
      </p>

      <h1 className="mt-5 font-serif text-3xl leading-snug sm:text-4xl">
        {attending ? t("confirm.headingYes") : t("confirm.headingNo")}
      </h1>

      <p className="mt-6 text-base leading-relaxed text-muted-foreground">
        {attending ? t("confirm.bodyYes") : t("confirm.bodyNo")}
      </p>

      <p className="mt-4 text-sm leading-relaxed text-muted-foreground/80">
        {t("confirm.spamNote")} {t("confirm.editNote")}
      </p>

      {/* Gifts — set apart so it reads as an aside, not part of the confirmation */}
      <div className="mt-14 border-t border-border pt-12">
        <h2 className="font-serif text-xl leading-snug">
          {t("confirm.giftsHeading")}
        </h2>

        <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
          {t("confirm.giftsBody")}
        </p>

        <Button asChild variant="outline" className="mt-7 rounded-full px-7">
          <Link to="/gifts">{t("confirm.giftsButton")}</Link>
        </Button>
      </div>

      {/* Exits */}
      <div className="mt-12 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm">
        <Link to="/timelines" className="text-muted-foreground underline-offset-4 hover:underline">
          {t("confirm.viewSchedule")}
        </Link>
        <Link to="/" className="text-muted-foreground underline-offset-4 hover:underline">
          {t("confirm.backHome")}
        </Link>
      </div>
    </section>
  );
}

export default RsvpConfirmation;

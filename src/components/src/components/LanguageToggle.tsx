import { useLanguage } from "@/i18n/LanguageContext";
import { cn } from "@/lib/utils";

/**
 * Two-state switch. Both labels are always visible in their own script, so a
 * guest who can't read the current language can still find their way out.
 */
export function LanguageToggle({ className }: { className?: string }) {
  const { language, setLanguage, t } = useLanguage();

  const base =
    "px-2.5 py-1 text-[10px] lg:text-xs tracking-widest uppercase rounded-full transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage/40";

  return (
    <div
      role="group"
      aria-label={t("lang.label")}
      className={cn(
        "inline-flex items-center gap-0.5 rounded-full border border-border/60 p-0.5",
        className
      )}
    >
      <button
        type="button"
        onClick={() => setLanguage("en")}
        aria-pressed={language === "en"}
        className={cn(
          base,
          language === "en"
            ? "bg-sage/15 text-sage font-medium"
            : "text-muted-foreground hover:text-foreground"
        )}
      >
        EN
      </button>
      <button
        type="button"
        onClick={() => setLanguage("zh")}
        aria-pressed={language === "zh"}
        className={cn(
          base,
          // No uppercase/tracking on CJK — letter-spacing looks broken on Chinese glyphs.
          "normal-case tracking-normal text-xs",
          language === "zh"
            ? "bg-sage/15 text-sage font-medium"
            : "text-muted-foreground hover:text-foreground"
        )}
      >
        中文
      </button>
    </div>
  );
}

export default LanguageToggle;

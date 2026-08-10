import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { LanguageToggle } from "@/components/LanguageToggle";
import { useLanguage } from "@/i18n/LanguageContext";

const Navigation = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const { t } = useLanguage();

  // Moved inside the component: t() is a hook value and can't run at module scope.
  const links = [
    { to: "/", label: t("nav.home") },
    { to: "/save-the-date", label: t("nav.saveTheDate") },
    { to: "/invitation", label: t("nav.invitation") },
    { to: "/rsvp", label: t("nav.rsvp") },
    { to: "/timelines", label: t("nav.timelines") },
    { to: "/gallery", label: t("nav.gallery") },
    { to: "/gifts", label: t("nav.gifts") },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
        <Link to="/" className="font-serif text-xl tracking-wide font-medium text-foreground">
          B <span className="text-sage font-light">&</span> E
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`text-xs lg:text-sm tracking-widest uppercase whitespace-nowrap transition-colors duration-200 ${
                location.pathname === l.to
                  ? "text-sage font-medium"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {l.label}
            </Link>
          ))}

          <LanguageToggle className="ml-1" />
        </div>

        {/* Mobile: toggle sits outside the hamburger so it's reachable without opening the menu */}
        <div className="flex items-center gap-1 md:hidden">
          <LanguageToggle />
          <button
            onClick={() => setOpen(!open)}
            className="p-2 text-foreground active:scale-95 transition-transform"
            aria-label={t("nav.toggleMenu")}
            aria-expanded={open}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-background/95 backdrop-blur-md border-b border-border animate-slide-up">
          <div className="flex flex-col items-center gap-6 py-8">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className={`text-sm tracking-widest uppercase transition-colors ${
                  location.pathname === l.to
                    ? "text-sage font-medium"
                    : "text-muted-foreground"
                }`}
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;

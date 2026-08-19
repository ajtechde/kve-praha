import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Globe } from "lucide-react";
import { useLang } from "@/i18n/LanguageContext";
import { translations } from "@/i18n/translations";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { Lang } from "@/i18n/translations";

const langLabels: Record<Lang, string> = { ru: "RU", cz: "CZ", de: "DE", en: "EN" };

export default function Header() {
  const { lang, setLang, t } = useLang();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [location.pathname]);

  const links = [
    { to: "/", label: t(translations.nav.home) },
    { to: "/about", label: t(translations.nav.about) },
    { to: "/beliefs", label: t(translations.nav.beliefs) },
    { to: "/locations", label: t(translations.nav.locations) },
    { to: "/contact", label: t(translations.nav.contact) },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-card/95 backdrop-blur-md shadow-sm border-b border-border"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <Link to="/" className="font-serif text-xl font-bold tracking-wide text-primary">
          KVE – Praha
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={cn(
                "text-sm font-medium transition-colors hover:text-accent",
                location.pathname === l.to ? "text-accent" : "text-foreground/80"
              )}
            >
              {l.label}
            </Link>
          ))}
          {/* Language switcher */}
          <div className="relative">
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="flex items-center gap-1 text-sm text-foreground/70 hover:text-accent transition-colors"
              aria-label="Change language"
            >
              <Globe className="w-4 h-4" />
              {langLabels[lang]}
            </button>
            {langOpen && (
              <div className="absolute right-0 mt-2 bg-card border border-border rounded-md shadow-lg py-1 min-w-[80px]">
                {(["ru", "cz", "de", "en"] as Lang[]).map((l) => (
                  <button
                    key={l}
                    onClick={() => { setLang(l); setLangOpen(false); }}
                    className={cn(
                      "block w-full text-left px-4 py-2 text-sm hover:bg-muted transition-colors",
                      l === lang && "text-accent font-semibold"
                    )}
                  >
                    {langLabels[l]}
                  </button>
                ))}
              </div>
            )}
          </div>
        </nav>

        {/* Mobile burger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 text-foreground"
          aria-label="Toggle menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-card border-t border-border animate-fade-in-up">
          <nav className="flex flex-col p-4 gap-2">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className={cn(
                  "py-2 px-3 rounded-md text-sm font-medium transition-colors",
                  location.pathname === l.to
                    ? "bg-muted text-accent"
                    : "text-foreground/80 hover:bg-muted"
                )}
              >
                {l.label}
              </Link>
            ))}
            <div className="flex gap-2 pt-2 border-t border-border mt-2">
              {(["ru", "cz", "de", "en"] as Lang[]).map((l) => (
                <Button
                  key={l}
                  variant={l === lang ? "default" : "outline"}
                  size="sm"
                  onClick={() => { setLang(l); setOpen(false); }}
                >
                  {langLabels[l]}
                </Button>
              ))}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

import { Link } from "react-router-dom";
import { useLang } from "@/i18n/LanguageContext";
import { translations } from "@/i18n/translations";

export default function Footer() {
  const { t } = useLang();
  const year = new Date().getFullYear();

  const links = [
    { to: "/about", label: t(translations.nav.about) },
    { to: "/beliefs", label: t(translations.nav.beliefs) },
    { to: "/locations", label: t(translations.nav.locations) },
    { to: "/contact", label: t(translations.nav.contact) },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-serif text-lg font-semibold mb-3">KVE – Praha</h3>
            <p className="text-sm text-primary-foreground/70 leading-relaxed">
              {t({
                ru: "Христиане Веры Евангельской — Церковь Прага",
                cz: "Křesťané evangelické víry — Sbor Praha",
                de: "Christen des Evangelischen Glaubens — Gemeinde Prag",
                en: "Christians of the Evangelical Faith — Church Prague",
              })}
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-3">
              {t({ ru: "Навигация", cz: "Navigace", de: "Navigation", en: "Navigation" })}
            </h4>
            <nav className="flex flex-col gap-2">
              {links.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                >
                  {l.label}
                </Link>
              ))}
            </nav>
          </div>
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-3">
              {t(translations.locationsSection.contactPerson)}
            </h4>
            <div className="flex flex-col gap-2 text-sm text-primary-foreground/70">
              <a
                href="https://wa.me/420608609013"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary-foreground transition-colors"
              >
                WhatsApp
              </a>
              <a
                href="https://t.me/+420608609013"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary-foreground transition-colors"
              >
                Telegram
              </a>
            </div>
          </div>
        </div>
        <div className="mt-10 pt-6 border-t border-primary-foreground/20 text-center text-xs text-primary-foreground/50">
          {t(translations.footer.copyright).replace("{year}", String(year))}
        </div>
      </div>
    </footer>
  );
}

import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useLang } from "@/i18n/LanguageContext";
import { translations } from "@/i18n/translations";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";

const beliefIcons = [
  {
    label: { ru: "Писание", cz: "Písmo", de: "Schrift", en: "Scripture" },
    svg: (
      <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="8" y="5" width="44" height="54" rx="5"/>
        <line x1="16" y1="5" x2="16" y2="59"/>
        <line x1="32" y1="19" x2="32" y2="38"/>
        <line x1="23" y1="26" x2="41" y2="26"/>
        <line x1="23" y1="45" x2="41" y2="45"/>
        <line x1="26" y1="50" x2="38" y2="50"/>
      </svg>
    ),
  },
  {
    label: { ru: "Крест", cz: "Kříž", de: "Kreuz", en: "Cross" },
    svg: (
      <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="32" y1="6" x2="32" y2="58"/>
        <line x1="14" y1="20" x2="50" y2="20"/>
      </svg>
    ),
  },
  {
    label: { ru: "Царство", cz: "Království", de: "Königreich", en: "Kingdom" },
    svg: (
      <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10 42 L10 26 L20 36 L32 18 L44 36 L54 26 L54 42 Z"/>
        <line x1="8" y1="48" x2="56" y2="48"/>
        <circle cx="10" cy="24" r="2.5" fill="currentColor" stroke="none"/>
        <circle cx="32" cy="16" r="2.5" fill="currentColor" stroke="none"/>
        <circle cx="54" cy="24" r="2.5" fill="currentColor" stroke="none"/>
      </svg>
    ),
  },
  {
    label: { ru: "Дух Святой", cz: "Duch Svatý", de: "Heiliger Geist", en: "Holy Spirit" },
    svg: (
      <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M32 10 C20 10 12 18 14 28 C16 36 24 38 28 42 L28 52"/>
        <path d="M28 52 L36 52"/>
        <path d="M32 10 C38 6 48 10 46 20 C44 28 36 30 32 34"/>
        <path d="M32 10 L36 16"/>
        <path d="M38 8 C42 12 42 18 38 20"/>
        <circle cx="30" cy="54" r="2" fill="currentColor" stroke="none"/>
      </svg>
    ),
  },
  {
    label: { ru: "Церковь", cz: "Církev", de: "Kirche", en: "Church" },
    svg: (
      <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10 58 L10 30 L32 14 L54 30 L54 58 Z"/>
        <line x1="32" y1="6" x2="32" y2="14"/>
        <line x1="28" y1="10" x2="36" y2="10"/>
        <path d="M26 58 L26 42 Q32 38 38 42 L38 58"/>
        <path d="M28 34 Q32 30 36 34 Q32 38 28 34 Z" fill="currentColor" stroke="none"/>
      </svg>
    ),
  },
  {
    label: { ru: "Служение", cz: "Služba", de: "Dienst", en: "Service" },
    svg: (
      <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8 44 L20 32 L28 38 L40 24 L52 32"/>
        <path d="M36 20 L44 16 L48 24 L40 28 Z"/>
        <path d="M10 52 L54 52"/>
        <path d="M16 44 L16 52"/>
        <path d="M28 38 L28 52"/>
        <path d="M40 32 L40 52"/>
      </svg>
    ),
  },
];

export default function Beliefs() {
  const { t } = useLang();

  return (
    <Layout
      title={`${t(translations.beliefsSection.title)} — KVE Praha`}
      description={t(translations.beliefsSection.summary)}
    >
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-center mb-6">
              {t(translations.beliefsSection.title)}
            </h1>
            <p className="text-lg text-muted-foreground text-center leading-relaxed mb-12">
              {t(translations.beliefsSection.summary)}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-verse-bg rounded-lg p-8 md:p-12"
          >
            <div className="prose prose-lg max-w-none">
              {t(translations.beliefsSection.creed).split("\n\n").map((paragraph, i) => (
                <p key={i} className="text-foreground/90 leading-relaxed mb-4 last:mb-0">
                  {paragraph}
                </p>
              ))}
            </div>
          </motion.div>

          {/* Questions CTA */}
          <div className="mt-16 text-center bg-muted rounded-lg p-8">
            <h2 className="font-serif text-2xl font-semibold mb-3">
              {t(translations.beliefsSection.questionsTitle)}
            </h2>
            <p className="text-muted-foreground mb-6">
              {t(translations.beliefsSection.questionsText)}
            </p>
            <Button asChild>
              <Link to="/contact">
                {t(translations.hero.ctaContact)} <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}

import { Heart, Users, Music, Sprout } from "lucide-react";
import { motion } from "framer-motion";
import { useLang } from "@/i18n/LanguageContext";
import { translations } from "@/i18n/translations";
import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";

function BibleIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      {/* Book body */}
      <rect x="8" y="6" width="44" height="52" rx="5" ry="5" />
      {/* Spine line */}
      <line x1="16" y1="6" x2="16" y2="58" />
      {/* Cross — vertical */}
      <line x1="36" y1="20" x2="36" y2="38" />
      {/* Cross — horizontal */}
      <line x1="28" y1="26" x2="44" y2="26" />
      {/* Decorative lines below cross */}
      <line x1="26" y1="44" x2="46" y2="44" />
      <line x1="29" y1="49" x2="43" y2="49" />
    </svg>
  );
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Book: BibleIcon, Heart, Users, Music, Sprout,
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.5 },
  }),
};

export default function About() {
  const { t } = useLang();

  return (
    <Layout
      title={`${t(translations.aboutPage.title)} — KVE Praha`}
      description={t(translations.aboutPage.intro)}
    >
      {/* Intro */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6">
              {t(translations.aboutPage.title)}
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t(translations.aboutPage.intro)}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-muted py-20">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-3xl font-semibold text-center mb-12">
            {t(translations.aboutPage.values.title)}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {translations.aboutPage.valuesCards.map((card, i) => {
              const Icon = iconMap[card.icon] || Book;
              return (
                <motion.div
                  key={card.icon}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  custom={i}
                >
                  <Card className="h-full text-center hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                      <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-accent/10 flex items-center justify-center">
                        <Icon className="w-8 h-8 text-accent" />
                      </div>
                      <h3 className="font-serif text-lg font-semibold mb-2">{t(card.title)}</h3>
                      <p className="text-sm text-muted-foreground">{t(card.text)}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </Layout>
  );
}

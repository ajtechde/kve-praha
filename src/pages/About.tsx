import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useLang } from "@/i18n/LanguageContext";
import { translations } from "@/i18n/translations";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";

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

      {/* Creed */}
      <section className="bg-muted py-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-serif text-3xl font-semibold text-center mb-10">
              {t(translations.beliefsSection.title)}
            </h2>
            <div className="bg-verse-bg rounded-lg p-8 md:p-12">
              <div className="prose prose-lg max-w-none">
                {t(translations.beliefsSection.creed).split("\n\n").map((paragraph, i) => (
                  <p key={i} className="text-foreground/90 leading-relaxed mb-4 last:mb-0">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            <div className="mt-12 text-center">
              <Button asChild>
                <Link to="/contact">
                  {t(translations.hero.ctaContact)} <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}

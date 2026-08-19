import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useLang } from "@/i18n/LanguageContext";
import { translations } from "@/i18n/translations";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";

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

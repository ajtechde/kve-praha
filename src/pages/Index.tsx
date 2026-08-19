import { Link } from "react-router-dom";
import { MapPin, Clock, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useLang } from "@/i18n/LanguageContext";
import { translations } from "@/i18n/translations";
import { locations } from "@/i18n/locations";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import heroBg from "@/assets/hero-bg.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5 },
  }),
};

export default function Home() {
  const { t, lang } = useLang();

  return (
    <Layout
      title={t(translations.meta.homeTitle)}
      description={t(translations.meta.homeDesc)}
    >
      {/* Hero */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        <div className="absolute inset-0 bg-hero-overlay/70" />
        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="font-serif text-4xl md:text-6xl font-bold text-white mb-4 leading-tight"
          >
            {t(translations.hero.headline)}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg md:text-xl text-white/85 mb-8 font-light"
          >
            {t(translations.hero.subheadline)}
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button size="lg" asChild className="bg-accent text-accent-foreground hover:bg-accent/90">
              <Link to="/locations">{t(translations.hero.ctaVisit)}</Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="bg-transparent border-white text-white hover:bg-white/15 hover:text-white hover:border-white">
              <Link to="/contact">{t(translations.hero.ctaContact)}</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Bible verse */}
      <section className="bg-verse-bg py-16">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <blockquote className="font-serif text-xl md:text-2xl text-foreground/90 leading-relaxed italic">
            &laquo;{t(translations.verse.john316)}&raquo;
          </blockquote>
          <cite className="block mt-4 text-sm text-muted-foreground not-italic font-medium">
            — {t(translations.verse.john316ref)}
          </cite>
        </div>
      </section>

      {/* About teaser */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-6">
              {t(translations.aboutSection.title)}
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              {t(translations.aboutSection.text)}
            </p>
            <Button variant="outline" asChild>
              <Link to="/about">
                {t(translations.aboutSection.link)} <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Beliefs teaser */}
      <section className="bg-muted py-20">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-6">
              {t(translations.beliefsSection.title)}
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              {t(translations.beliefsSection.summary)}
            </p>
            <Button variant="outline" asChild>
              <Link to="/beliefs">
                {t(translations.beliefsSection.link)} <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Locations cards */}
      <section className="py-20" id="locations">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-center mb-12">
            {t(translations.locationsSection.title)}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {locations.map((loc, i) => (
              <motion.div
                key={loc.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i}
              >
                <Card className="h-full hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <h3 className="font-serif text-xl font-semibold mb-3">
                      {t(loc.city)}
                    </h3>
                    <div className="flex items-start gap-2 text-sm text-muted-foreground mb-3">
                      <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                      {loc.address}
                    </div>
                    <div className="flex items-start gap-2 text-sm text-muted-foreground mb-4">
                      <Clock className="w-4 h-4 mt-0.5 shrink-0" />
                      <span>
                        {t(translations.locationsSection.sunday)} {loc.services.find(s => s.day === "sunday")?.time}
                      </span>
                    </div>
                    <Button variant="outline" size="sm" asChild className="w-full">
                      <Link to="/locations">{t(translations.locationsSection.details)}</Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact teaser */}
      <section className="bg-verse-bg py-20">
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <blockquote className="font-serif text-lg md:text-xl text-foreground/90 italic mb-2">
            &laquo;{t(translations.verse.matt1128)}&raquo;
          </blockquote>
          <cite className="block text-sm text-muted-foreground not-italic mb-8">
            — {t(translations.verse.matt1128ref)}
          </cite>
          <Button size="lg" asChild>
            <Link to="/contact">{t(translations.hero.ctaContact)}</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}

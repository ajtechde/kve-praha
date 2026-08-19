import { MapPin, Clock, ExternalLink, Phone, User } from "lucide-react";
import { motion } from "framer-motion";
import { useLang } from "@/i18n/LanguageContext";
import { translations } from "@/i18n/translations";
import { locations } from "@/i18n/locations";
import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.15, duration: 0.5 },
  }),
};

const dayKeys: Record<string, keyof typeof translations.locationsSection> = {
  sunday: "sunday",
  tuesday: "tuesday",
  friday: "friday",
};

export default function Locations() {
  const { t } = useLang();

  return (
    <Layout
      title={`${t(translations.locationsSection.title)} — KVE Praha`}
      description={t(translations.meta.homeDesc)}
    >
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-center mb-4">
            {t(translations.locationsSection.title)}
          </h1>
          <p className="text-center text-muted-foreground mb-12 max-w-xl mx-auto">
            {t({
              ru: "Наши общины в Чехии. Приходите — мы рады каждому!",
              cz: "Naše sbory v Česku. Přijďte — těšíme se na vás!",
              de: "Unsere Gemeinden in Tschechien. Kommen Sie — wir freuen uns auf Sie!",
              en: "Our congregations in Czechia. Come — everyone is welcome!",
            })}
          </p>

          <div className="space-y-8 max-w-4xl mx-auto">
            {locations.map((loc, i) => (
              <motion.div
                key={loc.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i}
              >
                <Card className="overflow-hidden">
                  <CardContent className="p-0">
                    <div className="grid grid-cols-1 md:grid-cols-2">
                      <div className="p-6 md:p-8">
                        <h2 className="font-serif text-2xl font-semibold mb-4">{t(loc.city)}</h2>
                        <div className="space-y-3 text-sm">
                          <div className="flex items-start gap-3">
                            <MapPin className="w-4 h-4 mt-0.5 text-accent shrink-0" />
                            <span className="text-muted-foreground">{loc.address}</span>
                          </div>
                          <div className="flex items-start gap-3">
                            <Clock className="w-4 h-4 mt-0.5 text-accent shrink-0" />
                            <div className="text-muted-foreground">
                              <span className="font-medium text-foreground">{t(translations.locationsSection.services)}</span>
                              <ul className="mt-1 space-y-0.5">
                                {loc.services.map((s) => (
                                  <li key={s.day}>
                                    {t(translations.locationsSection[dayKeys[s.day]] as Record<string, string>)} — {s.time}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                          <div className="flex items-start gap-3">
                            <User className="w-4 h-4 mt-0.5 text-accent shrink-0" />
                            <div className="text-muted-foreground">
                              <span className="font-medium text-foreground">{t(translations.locationsSection.contactPerson)}</span>
                              <div className="mt-1">{loc.contact}</div>
                            </div>
                          </div>
                          <div className="flex items-start gap-3">
                            <Phone className="w-4 h-4 mt-0.5 text-accent shrink-0" />
                            <a
                              href={`tel:${loc.phone.replace(/\s/g, "")}`}
                              className="text-muted-foreground hover:text-accent transition-colors"
                            >
                              {loc.phone}
                            </a>
                          </div>
                        </div>
                        <Button variant="outline" size="sm" className="mt-4" asChild>
                          <a
                            href={`https://www.google.com/maps/search/?api=1&query=${loc.mapQuery}`}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <ExternalLink className="w-3.5 h-3.5 mr-1.5" />
                            {t(translations.locationsSection.openMap)}
                          </a>
                        </Button>
                      </div>
                      <div className="h-64 md:h-auto min-h-[250px]">
                        <iframe
                          title={`Map - ${loc.address}`}
                          src={`https://www.google.com/maps?q=${loc.mapQuery}&output=embed`}
                          className="w-full h-full border-0"
                          loading="lazy"
                          allowFullScreen
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}

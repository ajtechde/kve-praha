import { MapPin, Send, MessageCircle, Phone, User } from "lucide-react";
import { motion } from "framer-motion";
import { useLang } from "@/i18n/LanguageContext";
import { translations } from "@/i18n/translations";
import { locations } from "@/i18n/locations";
import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Contact() {
  const { t } = useLang();

  return (
    <Layout
      title={`${t(translations.contactSection.title)} — KVE Praha`}
      description={t(translations.contactSection.teaser)}
    >
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-center mb-4">
            {t(translations.contactSection.title)}
          </h1>
          <blockquote className="text-center text-muted-foreground italic max-w-xl mx-auto mb-12">
            &laquo;{t(translations.contactSection.teaser)}&raquo;
            <cite className="block mt-2 text-sm not-italic font-medium">
              — {t(translations.verse.matt1128ref)}
            </cite>
          </blockquote>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Contact options */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Card>
                <CardContent className="p-6 md:p-8 text-center">
                  <p className="text-muted-foreground mb-6">
                    {t({
                      ru: "Свяжитесь с нами удобным для вас способом — мы ответим как можно скорее.",
                      cz: "Spojte se s námi způsobem, který vám vyhovuje — co nejdříve odpovíme.",
                      de: "Kontaktieren Sie uns auf dem für Sie bequemsten Weg — wir antworten so schnell wie möglich.",
                      en: "Reach out in whichever way suits you best — we will reply as soon as possible.",
                    })}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <Button size="lg" asChild className="flex-1">
                      <a href="https://wa.me/420608609013" target="_blank" rel="noopener noreferrer">
                        <MessageCircle className="w-5 h-5 mr-2" />
                        WhatsApp
                      </a>
                    </Button>
                    <Button size="lg" variant="outline" asChild className="flex-1">
                      <a href="https://t.me/+420608609013" target="_blank" rel="noopener noreferrer">
                        <Send className="w-5 h-5 mr-2" />
                        Telegram
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Locations sidebar */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-4"
            >
              {locations.map((loc) => (
                <Card key={loc.id}>
                  <CardContent className="p-5 space-y-2">
                    <h3 className="font-serif text-lg font-semibold mb-2">{t(loc.city)}</h3>
                    <div className="flex items-start gap-2 text-sm text-muted-foreground">
                      <MapPin className="w-4 h-4 mt-0.5 text-accent shrink-0" />
                      {loc.address}
                    </div>
                    <div className="flex items-start gap-2 text-sm text-muted-foreground">
                      <User className="w-4 h-4 mt-0.5 text-accent shrink-0" />
                      {loc.contact}
                    </div>
                    <div className="flex items-start gap-2 text-sm">
                      <Phone className="w-4 h-4 mt-0.5 text-accent shrink-0" />
                      <a
                        href={`tel:${loc.phone.replace(/\s/g, "")}`}
                        className="text-muted-foreground hover:text-accent transition-colors"
                      >
                        {loc.phone}
                      </a>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

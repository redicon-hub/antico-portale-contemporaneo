import { createFileRoute, Link } from "@tanstack/react-router";
import { Wine, Wheat, UtensilsCrossed } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Reveal } from "@/components/site/primitives";
import { contact } from "@/lib/contact";
import { LangProvider, useLang } from "@/lib/i18n";
import { media } from "@/lib/media";

const SITE = "https://www.anticoportalevaldambra.com";
const PAGE_URL = `${SITE}/aperitivo-valdarno-provincia-arezzo`;
const title = "Aperitivo Valdarno, provincia di Arezzo | Antico Portale";
const description =
  "Aperitivo nel Valdarno, in provincia di Arezzo: tagliere, pagnotta e due drink sulla terrazza di Antico Portale. Formula per due persone a 35 €.";

export const Route = createFileRoute("/aperitivo-valdarno-provincia-arezzo")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: PAGE_URL },
      { property: "og:locale", content: "it_IT" },
      { property: "og:locale:alternate", content: "en_GB" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: PAGE_URL }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Restaurant",
              "@id": `${SITE}/#restaurant`,
              name: "Antico Portale",
              url: SITE,
              telephone: contact.phone,
              servesCuisine: ["Tuscan", "Contemporary Italian"],
              address: {
                "@type": "PostalAddress",
                streetAddress: contact.street,
                addressLocality: contact.city,
                addressRegion: contact.province,
                postalCode: contact.postalCode,
                addressCountry: contact.country,
              },
            },
            {
              "@type": "Offer",
              name: "Aperitivo al Portale per due persone",
              description: "Tagliere del Portale o vegetariano, pagnotta della casa e due drink a scelta.",
              price: "35",
              priceCurrency: "EUR",
              url: PAGE_URL,
              offeredBy: { "@id": `${SITE}/#restaurant` },
            },
            {
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: `${SITE}/` },
                { "@type": "ListItem", position: 2, name: "Aperitivo al Portale", item: PAGE_URL },
              ],
            },
          ],
        }),
      },
    ],
  }),
  component: AperitivoPage,
});

function AperitivoPage() {
  return (
    <LangProvider>
      <Header />
      <main>
        <AperitivoContent />
      </main>
      <Footer />
    </LangProvider>
  );
}

function AperitivoContent() {
  const { t } = useLang();
  const offer = [
    { icon: UtensilsCrossed, text: t.aperitivoPage.board },
    { icon: Wheat, text: t.aperitivoPage.bread },
    { icon: Wine, text: t.aperitivoPage.drinks },
  ];

  return (
    <>
      <section className="relative min-h-[88svh] overflow-hidden bg-ink text-ivory">
        <img
          src={media.APERITIVO_BOARD}
          alt="Tagliere e cocktail per un aperitivo nel Valdarno in provincia di Arezzo"
          width={1200}
          height={1600}
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <span aria-hidden className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/30 to-ink/45" />
        <div className="relative mx-auto flex min-h-[88svh] max-w-[1500px] items-end px-5 pb-14 pt-36 md:px-10 md:pb-20">
          <div className="max-w-4xl">
            <p className="eyebrow text-copper">{t.aperitivoPage.eyebrow}</p>
            <h1 className="display-xl mt-6 max-w-[13ch] text-ivory">{t.aperitivoPage.title}</h1>
            <p className="mt-7 max-w-[38ch] font-display text-xl font-light leading-snug text-ivory/85 md:text-2xl">
              {t.aperitivoPage.subtitle}
            </p>
          </div>
        </div>
      </section>

      <section className="bg-background py-24 md:py-36">
        <div className="mx-auto grid max-w-[1500px] gap-14 px-5 md:grid-cols-12 md:px-10">
          <Reveal className="md:col-span-5">
            <p className="eyebrow text-copper">{t.aperitivoPage.formulaEyebrow}</p>
            <h2 className="display-lg mt-6 max-w-[12ch]">{t.aperitivoPage.formulaTitle}</h2>
            <p className="lede mt-8 max-w-[44ch] text-muted-foreground">{t.aperitivoPage.intro}</p>
          </Reveal>

          <Reveal delay={120} className="md:col-span-6 md:col-start-7">
            <div className="border-y border-border">
              {offer.map((item) => (
                <div key={item.text} className="flex items-center gap-5 border-b border-border px-1 py-6 last:border-b-0 md:py-8">
                  <item.icon size={26} strokeWidth={1.2} className="shrink-0 text-copper" aria-hidden />
                  <p className="font-display text-xl font-light leading-snug md:text-2xl">{item.text}</p>
                </div>
              ))}
            </div>
            <div className="mt-10 flex items-end justify-between gap-6 border-l-2 border-copper pl-6">
              <div>
                <p className="font-display text-5xl font-light md:text-6xl">{t.aperitivoPage.price}</p>
                <p className="mt-2 text-sm tracking-wide text-muted-foreground">{t.aperitivoPage.priceNote}</p>
              </div>
              <span className="eyebrow text-copper">Antico Portale</span>
            </div>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href={contact.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-forest-deep bg-forest-deep px-7 py-3.5 text-[0.78rem] tracking-[0.14em] text-ivory transition-colors duration-500 hover:bg-transparent hover:text-forest-deep"
              >
                {t.aperitivoPage.whatsapp}
              </a>
              <a
                href={contact.phoneHref}
                className="border border-forest-deep/40 px-7 py-3.5 text-[0.78rem] tracking-[0.14em] transition-colors duration-500 hover:border-forest-deep"
              >
                {t.aperitivoPage.call}
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-forest-deep py-24 text-ivory md:py-36">
        <div className="mx-auto max-w-[1500px] px-5 md:px-10">
          <div className="grid gap-10 md:grid-cols-12 md:gap-6">
            <Reveal className="md:col-span-4 md:pt-10">
              <p className="eyebrow text-copper">{t.aperitivoPage.atmosphereEyebrow}</p>
              <h2 className="display-md mt-6 max-w-[13ch] text-ivory">{t.aperitivoPage.atmosphereTitle}</h2>
              <p className="body-copy mt-6 max-w-[34ch] text-ivory/70">{t.aperitivoPage.atmosphereText}</p>
            </Reveal>

            <Reveal delay={100} className="md:col-span-4">
              <img
                src={media.APERITIVO_TABLE}
                alt="Tavolo apparecchiato per l'aperitivo sulla terrazza di Antico Portale"
                loading="lazy"
                width={1200}
                height={1600}
                className="aspect-[4/5] w-full object-cover"
              />
            </Reveal>

            <Reveal delay={200} className="md:col-span-4">
              <img
                src={media.APERITIVO_CLOSE}
                alt="Cocktail e tagliere dell'aperitivo di Antico Portale"
                loading="lazy"
                width={1200}
                height={1600}
                className="aspect-[4/5] w-full object-cover"
              />
            </Reveal>
          </div>

          <Reveal className="mt-14 flex justify-center">
            <Link
              to="/"
              className="border-b border-ivory/50 pb-2 text-[0.78rem] tracking-[0.14em] transition-opacity hover:opacity-70"
            >
              {t.aperitivoPage.back}
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
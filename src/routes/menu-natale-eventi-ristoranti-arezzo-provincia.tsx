import { createFileRoute, Link } from "@tanstack/react-router";
import { Download } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Reveal } from "@/components/site/primitives";
import { contact } from "@/lib/contact";
import { LangProvider, useLang } from "@/lib/i18n";
import { natale, NATALE_PATH, NATALE_PDF } from "@/lib/natale-menu";
import poster from "@/assets/natale01.jpeg.asset.json";
import menuImg from "@/assets/natale02.jpeg.asset.json";
import vegImg from "@/assets/natale03.jpeg.asset.json";

const SITE = "https://www.anticoportalevaldambra.com";
const PAGE_URL = `${SITE}${NATALE_PATH}`;
const title = "Pranzo di Natale 2026 | Ristoranti Arezzo e provincia — Antico Portale";
const description =
  "Menu di Natale 2026 ad Antico Portale, tra i ristoranti di Arezzo e provincia: pranzo del 25 dicembre dalle 12:30, menu tradizionale o vegetariano a 50 €. Scarica il menu.";

const it = natale.it;

export const Route = createFileRoute("/menu-natale-eventi-ristoranti-arezzo-provincia")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { name: "keywords", content: "ristoranti Arezzo e provincia, pranzo di Natale Arezzo, menu di Natale Valdarno, ristorante Natale Valdambra, menu speciali eventi Arezzo" },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "article" },
      { property: "og:url", content: PAGE_URL },
      { property: "og:locale", content: "it_IT" },
      { property: "og:locale:alternate", content: "en_GB" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "geo.region", content: "IT-AR" },
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
              url: `${SITE}/`,
              telephone: contact.phone,
              servesCuisine: ["Tuscan", "Contemporary Italian"],
              address: {
                "@type": "PostalAddress",
                streetAddress: contact.street,
                addressLocality: `${contact.locality}, ${contact.city}`,
                addressRegion: contact.province,
                postalCode: contact.postalCode,
                addressCountry: contact.country,
              },
            },
            {
              "@type": "FoodEvent",
              "@id": `${PAGE_URL}#evento`,
              name: "Pranzo di Natale 2026 ad Antico Portale",
              description,
              startDate: `${natale.date}T${natale.time}:00+01:00`,
              endDate: `${natale.date}T17:00:00+01:00`,
              eventStatus: "https://schema.org/EventScheduled",
              eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
              inLanguage: "it-IT",
              url: PAGE_URL,
              location: { "@id": `${SITE}/#restaurant` },
              organizer: { "@id": `${SITE}/#restaurant` },
              offers: [
                { "@type": "Offer", name: "Adulti", price: String(natale.price), priceCurrency: "EUR", availability: "https://schema.org/InStock", url: PAGE_URL, validThrough: `${natale.date}T12:00:00+01:00` },
                { "@type": "Offer", name: "Bambini sotto i 12 anni", price: String(natale.kidsPrice), priceCurrency: "EUR", availability: "https://schema.org/InStock", url: PAGE_URL },
              ],
            },
            ...it.menus.map((m, i) => ({
              "@type": "Menu",
              "@id": `${PAGE_URL}#menu-${i + 1}`,
              name: `${m.name} 2026 — Antico Portale`,
              inLanguage: "it-IT",
              hasMenuSection: m.courses.map((c) => ({
                "@type": "MenuSection",
                name: c.label,
                hasMenuItem: (c.title ? [c.title + " " + c.items.join(" ")] : c.items).map((n) => ({ "@type": "MenuItem", name: n })),
              })),
            })),
            {
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: `${SITE}/` },
                { "@type": "ListItem", position: 2, name: "Menu speciali ed eventi", item: PAGE_URL },
              ],
            },
          ],
        }),
      },
    ],
  }),
  component: NatalePage,
});

function NatalePage() {
  return (
    <LangProvider>
      <Header />
      <main>
        <NataleContent />
      </main>
      <Footer />
    </LangProvider>
  );
}

function NataleContent() {
  const { lang } = useLang();
  const c = natale[lang];
  const images = [menuImg.url, vegImg.url];
  return (
    <>
      <section className="bg-forest-deep pb-20 pt-36 text-ivory md:pb-28 md:pt-44">
        <div className="mx-auto grid max-w-[1500px] items-center gap-12 px-5 md:grid-cols-12 md:px-10">
          <div className="md:col-span-7">
            <p className="eyebrow text-copper">{c.eyebrow}</p>
            <h1 className="display-xl mt-6 max-w-[16ch] text-ivory">{c.h1}</h1>
            <p className="lede mt-8 max-w-[48ch] text-ivory/80">{c.lede}</p>
            <p className="mt-8 font-display text-2xl font-light text-copper">{c.when}</p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a href={NATALE_PDF} download="menu-natale-2026-antico-portale.pdf" className="inline-flex items-center gap-3 border border-copper bg-copper px-7 py-3.5 text-[0.78rem] tracking-[0.14em] text-ink transition-colors duration-500 hover:bg-transparent hover:text-copper">
                <Download size={16} aria-hidden /> {c.download}
              </a>
              <a href={contact.whatsappHref} target="_blank" rel="noopener noreferrer" className="border border-ivory/60 px-7 py-3.5 text-[0.78rem] tracking-[0.14em] transition-colors duration-500 hover:bg-ivory hover:text-ink">
                {c.book}
              </a>
            </div>
          </div>
          <div className="md:col-span-5">
            <img src={poster.url} alt="Pranzo di Natale 25 dicembre 2026, Antico Portale ristorante" width={1122} height={1402} className="w-full shadow-2xl" />
          </div>
        </div>
      </section>

      <section className="bg-background py-24 md:py-32">
        <div className="mx-auto grid max-w-[1500px] gap-16 px-5 md:grid-cols-2 md:px-10">
          {c.menus.map((m, i) => (
            <Reveal key={m.name} delay={i * 120} className="border border-border p-8 md:p-12">
              <h2 className="display-md text-center">{m.name}</h2>
              <div className="mt-10 space-y-8 text-center">
                {m.courses.map((course) => (
                  <div key={course.label}>
                    <h3 className="eyebrow text-copper">{course.label}</h3>
                    {course.title && <p className="mt-3 font-display text-xl">{course.title}</p>}
                    {course.items.map((item) => (
                      <p key={item} className="mt-2 font-display text-lg font-light italic leading-snug text-muted-foreground">{item}</p>
                    ))}
                  </div>
                ))}
              </div>
              <p className="mt-10 text-center text-sm italic text-muted-foreground">{c.included}</p>
              <div className="mt-6 text-center">
                <p className="font-display text-4xl font-light">{c.price}</p>
                <p className="mt-2 text-sm text-muted-foreground">{c.kids}</p>
              </div>
              <img src={images[i]} alt={`${m.name} — Antico Portale`} loading="lazy" className="mx-auto mt-10 aspect-[4/5] w-2/3 object-cover" />
            </Reveal>
          ))}
        </div>
        <div className="mt-14 flex flex-wrap justify-center gap-4 px-5">
          <a href={NATALE_PDF} download="menu-natale-2026-antico-portale.pdf" className="inline-flex items-center gap-3 border border-forest-deep bg-forest-deep px-7 py-3.5 text-[0.78rem] tracking-[0.14em] text-ivory transition-colors duration-500 hover:bg-transparent hover:text-forest-deep">
            <Download size={16} aria-hidden /> {c.download}
          </a>
          <a href={contact.phoneHref} className="border border-forest-deep/40 px-7 py-3.5 text-[0.78rem] tracking-[0.14em] hover:border-forest-deep">
            {c.call} {contact.phone}
          </a>
        </div>
      </section>

      <section className="bg-ink py-20 text-ivory md:py-28">
        <div className="mx-auto max-w-3xl px-5 text-center">
          <h2 className="display-md text-ivory">{c.eventsTitle}</h2>
          <p className="body-copy mt-6 text-ivory/70">{c.eventsText}</p>
          <Link to="/" className="mt-10 inline-block border-b border-ivory/50 pb-2 text-[0.78rem] tracking-[0.14em] hover:opacity-70">{c.back}</Link>
        </div>
      </section>
    </>
  );
}

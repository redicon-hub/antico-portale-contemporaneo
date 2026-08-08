import { createFileRoute } from "@tanstack/react-router";
import { LangProvider } from "@/lib/i18n";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Hero } from "@/components/home/Hero";
import { Manifesto, FourWomen, Kitchen, Bao, ChefRagu } from "@/components/home/Story";
import { MenuGallery, Aperitivo, Place } from "@/components/home/Gallery";
import { Reviews, Booking } from "@/components/home/Closing";
import { Faq } from "@/components/home/Faq";
import { faqCopy } from "@/lib/faq-content";
import { contact } from "@/lib/contact";

const SITE = "https://www.anticoportalevaldambra.com";

const title = "Miglior ristorante Valdambra e Valdarno | Antico Portale, Arezzo";
const description =
  "Ristorante gourmet in provincia di Arezzo: cucina toscana contemporanea in Valdambra, a due passi dal Valdarno, tra Arezzo, Firenze e Siena. Menu stagionale, brigata femminile, prenotazioni.";

const openingHours = [
  { days: ["Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], opens: "18:30", closes: "22:00" },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      {
        name: "keywords",
        content:
          "miglior ristorante Valdambra, miglior ristorante Valdarno, ristorante gourmet Arezzo, ristorante provincia di Arezzo, cucina contemporanea toscana, ristorante Bucine, ristorante Capannole",
      },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "restaurant.restaurant" },
      { property: "og:url", content: `${SITE}/` },
      { property: "og:locale", content: "it_IT" },
      { property: "og:locale:alternate", content: "en_GB" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "geo.region", content: "IT-AR" },
      { name: "geo.placename", content: "Capannole, Bucine (Arezzo)" },
    ],
    links: [{ rel: "canonical", href: `${SITE}/` }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebSite",
              "@id": `${SITE}/#website`,
              url: `${SITE}/`,
              name: "Antico Portale",
              inLanguage: ["it-IT", "en"],
              description,
            },
            {
              "@type": ["Restaurant", "LocalBusiness"],
              "@id": `${SITE}/#restaurant`,
              name: "Antico Portale",
              url: `${SITE}/`,
              description,
              slogan: "Cucina toscana contemporanea in Valdambra",
              servesCuisine: ["Tuscan", "Contemporary Italian", "Cucina toscana contemporanea"],
              areaServed: [
                { "@type": "Place", name: "Valdambra" },
                { "@type": "Place", name: "Valdarno" },
                { "@type": "Place", name: "Provincia di Arezzo" },
                { "@type": "Place", name: "Toscana" },
              ],
              acceptsReservations: true,
              currenciesAccepted: "EUR",
              telephone: contact.phone,
              hasMenu: `${SITE}/menu`,
              address: {
                "@type": "PostalAddress",
                streetAddress: contact.street,
                addressLocality: `${contact.locality}, ${contact.city}`,
                addressRegion: contact.province,
                postalCode: contact.postalCode,
                addressCountry: contact.country,
              },
              openingHoursSpecification: openingHours.map((h) => ({
                "@type": "OpeningHoursSpecification",
                dayOfWeek: h.days,
                opens: h.opens,
                closes: h.closes,
              })),
              sameAs: [contact.google.profile],
              hasMap: contact.google.directions,
            },
            {
              "@type": "FAQPage",
              "@id": `${SITE}/#faq`,
              inLanguage: "it-IT",
              mainEntity: faqCopy.it.items.map((f) => ({
                "@type": "Question",
                name: f.q,
                acceptedAnswer: { "@type": "Answer", text: f.a },
              })),
            },
          ],
        }),
      },
    ],
  }),
  component: Home,
});


function Home() {
  return (
    <LangProvider>
      <Header />
      <main>
        <Hero />
        <Manifesto />
        <FourWomen />
        <Kitchen />
        <Bao />
        <ChefRagu />
        <MenuGallery />
        <Aperitivo />
        <Place />
        <Reviews />
        <Faq />
        <Booking />

      </main>
      <Footer />
    </LangProvider>
  );
}

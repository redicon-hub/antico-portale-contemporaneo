import { createFileRoute } from "@tanstack/react-router";
import { LangProvider } from "@/lib/i18n";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Hero } from "@/components/home/Hero";
import { Manifesto, FourWomen, Kitchen, Bao, ChefRagu } from "@/components/home/Story";
import { MenuGallery, Aperitivo, Place } from "@/components/home/Gallery";
import { International, Reviews, Booking } from "@/components/home/Closing";

const title = "Antico Portale — Ristorante toscano nel Valdarno, cucina contemporanea";
const description =
  "Cucina toscana contemporanea nel Valdarno: un casale nel Valdambra tra Arezzo, Firenze e Siena, guidato da quattro donne. Ristorante gourmet, terrazza e aperitivo.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "restaurant.restaurant" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebSite",
              name: "Antico Portale",
              inLanguage: ["it-IT", "en"],
              description,
            },
            {
              "@type": ["Restaurant", "LocalBusiness"],
              name: "Antico Portale",
              description,
              servesCuisine: ["Tuscan", "Contemporary Italian"],
              areaServed: ["Valdarno", "Valdambra", "Toscana"],
              acceptsReservations: true,
              telephone: "+39 055 995 5514",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Via della Bottega 37/A",
                addressLocality: "Capannole, Bucine",
                addressRegion: "AR",
                postalCode: "52021",
                addressCountry: "IT",
              },
              sameAs: ["https://share.google/Fz6VLFcLhrzBH1Kfp"],
              hasMap: "https://share.google/Fz6VLFcLhrzBH1Kfp",
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
        <International />
        <Reviews />
        <Booking />
      </main>
      <Footer />
    </LangProvider>
  );
}

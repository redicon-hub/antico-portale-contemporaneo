import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Reveal } from "@/components/site/primitives";
import { contact } from "@/lib/contact";
import { LangProvider, useLang } from "@/lib/i18n";
import { cateringCopy, cateringMedia, CATERING_PATH } from "@/lib/catering-content";

const SITE = "https://www.anticoportalevaldambra.com";
const PAGE_URL = `${SITE}${CATERING_PATH}`;
const title = "Catering matrimoni ed eventi in provincia di Arezzo e Valdarno | Antico Portale";
const description =
  "Catering gourmet per matrimoni, feste private ed eventi aziendali in qualsiasi location in provincia di Arezzo, Valdarno e Valdambra. Finger food, live cooking, open bar.";

export const Route = createFileRoute("/catering-matrimoni-eventi-arezzo-valdarno")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: PAGE_URL },
      { property: "og:locale", content: "it_IT" },
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
              "@type": "Service",
              name: "Catering matrimoni ed eventi — Antico Portale",
              serviceType: "Catering",
              description,
              url: PAGE_URL,
              provider: { "@id": `${SITE}/#restaurant`, "@type": "Restaurant", name: "Antico Portale", telephone: contact.phone },
              areaServed: ["Provincia di Arezzo", "Valdarno", "Valdambra", "Toscana"],
            },
            {
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: `${SITE}/` },
                { "@type": "ListItem", position: 2, name: "Catering matrimoni ed eventi", item: PAGE_URL },
              ],
            },
          ],
        }),
      },
    ],
  }),
  component: CateringPage,
});

function CateringPage() {
  return (
    <LangProvider>
      <Header />
      <main>
        <CateringContent />
      </main>
      <Footer />
    </LangProvider>
  );
}

function CateringContent() {
  const { lang } = useLang();
  const c = cateringCopy[lang];
  return (
    <>
      <section className="relative min-h-[90svh] overflow-hidden bg-ink text-ivory">
        <img src={cateringMedia.HERO} alt="Tavolata nuziale con luci tra gli ulivi, catering Valdarno" className="absolute inset-0 h-full w-full object-cover" />
        <span aria-hidden className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/35 to-ink/50" />
        <div className="relative mx-auto flex min-h-[90svh] max-w-[1500px] items-end px-5 pb-14 pt-36 md:px-10 md:pb-20">
          <div className="max-w-4xl">
            <p className="eyebrow text-copper">{c.eyebrow}</p>
            <h1 className="display-lg mt-6 max-w-[20ch] text-ivory">{c.h1}</h1>
            <p className="mt-7 max-w-[42ch] font-display text-xl font-light leading-snug text-ivory/85 md:text-2xl">{c.subtitle}</p>
          </div>
        </div>
      </section>

      <section className="bg-background py-24 md:py-32">
        <div className="mx-auto grid max-w-[1500px] gap-14 px-5 md:grid-cols-12 md:px-10">
          <Reveal className="md:col-span-5">
            <p className="eyebrow text-copper">{c.introEyebrow}</p>
            <h2 className="display-md mt-6 max-w-[14ch]">{c.introTitle}</h2>
            <p className="lede mt-8 max-w-[46ch] text-muted-foreground">{c.intro}</p>
          </Reveal>
          <Reveal delay={120} className="md:col-span-6 md:col-start-7">
            <p className="eyebrow mb-6 text-muted-foreground">{c.valuesTitle}</p>
            <div className="border-y border-border">
              {c.values.map((v, i) => (
                <div key={v.k} className="grid grid-cols-[3rem_1fr] gap-4 border-b border-border py-7 last:border-b-0">
                  <span className="font-display text-copper">0{i + 1}</span>
                  <div>
                    <h3 className="font-display text-2xl font-light">{v.k}</h3>
                    <p className="body-copy mt-2 text-muted-foreground">{v.v}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-forest-deep py-24 text-ivory md:py-32">
        <div className="mx-auto max-w-[1500px] px-5 md:px-10">
          <Reveal>
            <p className="eyebrow text-copper">{c.occasionsEyebrow}</p>
            <h2 className="display-md mt-6 max-w-[18ch] text-ivory">{c.occasionsTitle}</h2>
          </Reveal>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {[cateringMedia.COURTYARD, cateringMedia.MISE, cateringMedia.TABLES].map((src, i) => (
              <Reveal key={src} delay={i * 100}>
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img src={src} alt={`${c.occasions[i].k} — catering provincia di Arezzo`} loading="lazy" className="h-full w-full object-cover" />
                  <span aria-hidden className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-6">
                    <h3 className="font-display text-3xl font-light text-ivory">{c.occasions[i].k}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-ivory/80">{c.occasions[i].v}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background py-24 md:py-32">
        <div className="mx-auto max-w-[1500px] px-5 md:px-10">
          <Reveal>
            <p className="eyebrow text-copper">{c.expEyebrow}</p>
            <h2 className="display-md mt-6">{c.expTitle}</h2>
          </Reveal>
          <div className="mt-14 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
            {c.experiences.map((e) => (
              <div key={e.k} className="bg-background p-7 md:p-9">
                <h3 className="font-display text-2xl font-light">{e.k}</h3>
                <p className="body-copy mt-3 text-muted-foreground">{e.v}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink text-ivory">
        <div className="mx-auto grid max-w-[1500px] md:grid-cols-12">
          <div className="grid grid-cols-2 gap-3 p-5 md:col-span-7 md:p-10">
            <img src={cateringMedia.ESPRESSO} alt="Brindisi con Espresso Martini, open bar per matrimoni" loading="lazy" className="aspect-[3/4] w-full object-cover" />
            <img src={cateringMedia.MILLEFOGLIE} alt="Millefoglie nuziale ai frutti di bosco" loading="lazy" className="aspect-[3/4] w-full object-cover" />
          </div>
          <Reveal className="flex flex-col justify-center px-5 pb-16 md:col-span-5 md:px-12 md:py-20">
            <p className="eyebrow text-copper">{c.fingerEyebrow}</p>
            <h2 className="display-md mt-6 max-w-[14ch] text-ivory">{c.fingerTitle}</h2>
            <p className="body-copy mt-6 max-w-[42ch] text-ivory/75">{c.fingerText}</p>
            <div className="mt-10 border-l-2 border-copper pl-6">
              <h3 className="font-display text-2xl font-light">{c.cakeTitle}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ivory/70">{c.cakeText}</p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="relative overflow-hidden bg-forest-deep py-24 text-ivory md:py-32">
        <img src={cateringMedia.TOWER} alt="" aria-hidden loading="lazy" className="absolute inset-0 h-full w-full object-cover opacity-25" />
        <Reveal className="relative mx-auto max-w-3xl px-5 text-center">
          <h2 className="display-md text-ivory">{c.formTitle}</h2>
          <p className="lede mx-auto mt-6 max-w-[40ch] text-ivory/80">{c.formText}</p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a href={contact.whatsappHref} target="_blank" rel="noopener noreferrer" className="border border-copper bg-copper px-8 py-4 text-[0.8rem] tracking-[0.14em] text-ink transition-colors duration-500 hover:bg-transparent hover:text-copper">
              {c.whatsapp}
            </a>
            <a href={contact.phoneHref} className="border border-ivory/50 px-8 py-4 text-[0.8rem] tracking-[0.14em] transition-colors duration-500 hover:border-ivory">
              {c.call}
            </a>
          </div>
          <Link to="/" className="mt-12 inline-block border-b border-ivory/50 pb-2 text-[0.78rem] tracking-[0.14em] hover:opacity-70">
            {c.back}
          </Link>
        </Reveal>
      </section>
    </>
  );
}

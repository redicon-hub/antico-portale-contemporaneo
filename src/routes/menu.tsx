import { createFileRoute, Link } from "@tanstack/react-router";
import { LangProvider, useLang } from "@/lib/i18n";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Reveal } from "@/components/site/primitives";
import { media } from "@/lib/media";
import { menuSections, menuIntro, allergensList, menuNotes } from "@/lib/menu-data";

const SITE = "https://www.anticoportalevaldambra.com";

const title = "Menu | Antico Portale, ristorante gourmet in Valdambra (Arezzo)";
const description =
  "Il menu stagionale di Antico Portale: antipasti, pasta fresca, secondi alla brace e dolci. Cucina toscana contemporanea in Valdambra, tra Valdarno, Arezzo, Firenze e Siena.";

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "article" },
      { property: "og:url", content: `${SITE}/menu` },
      { property: "og:locale", content: "it_IT" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: `${SITE}/menu` }],

    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Menu",
          name: "Menu Antico Portale",
          inLanguage: ["it-IT", "en"],
          hasMenuSection: menuSections.map((s) => ({
            "@type": "MenuSection",
            name: s.it,
            hasMenuItem: s.items.map((i) => ({
              "@type": "MenuItem",
              name: i.it,
              description: i.descIt,
              ...(i.price ? { offers: { "@type": "Offer", price: i.price, priceCurrency: "EUR" } } : {}),
            })),
          })),
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: `${SITE}/` },
            { "@type": "ListItem", position: 2, name: "Menu", item: `${SITE}/menu` },
          ],
        }),
      },
    ],

  }),
  component: MenuPage,
});

function MenuPage() {
  return (
    <LangProvider>
      <Header />
      <main>
        <MenuContent />
      </main>
      <Footer />
    </LangProvider>
  );
}

function MenuContent() {
  const { t, lang } = useLang();
  const it = lang === "it";

  return (
    <>
      <section className="relative">
        <img
          src={media.BREAD_TABLE}
          alt="Pane e lievitati della casa serviti ad Antico Portale"
          className="h-[46svh] w-full object-cover md:h-[62svh]"
        />
        <span aria-hidden className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/40 to-ink/45" />
        <div className="absolute inset-x-0 bottom-0">
          <div className="mx-auto max-w-[1500px] px-5 pb-12 md:px-10 md:pb-16">
            <p className="eyebrow text-copper">{t.menuPage.eyebrow}</p>
            <h1 className="display-lg mt-5 max-w-[16ch] text-ivory">{t.menuPage.title}</h1>
          </div>
        </div>
      </section>

      <section className="bg-background py-20 md:py-28">
        <div className="mx-auto max-w-[1500px] px-5 md:px-10">
          <div className="grid gap-10 md:grid-cols-12">
            <Reveal className="md:col-span-6">
              <p className="lede text-muted-foreground">{it ? menuIntro.it : menuIntro.en}</p>
              <p className="body-copy mt-6 font-display text-[1.15rem]">
                {it ? menuIntro.claimIt : menuIntro.claimEn}
              </p>
            </Reveal>
            <Reveal delay={120} className="md:col-span-4 md:col-start-9">
              <p className="eyebrow text-muted-foreground">{t.menuPage.index}</p>
              <ul className="mt-5 space-y-2">
                {menuSections.map((s) => (
                  <li key={s.id}>
                    <a
                      href={`#${s.id}`}
                      className="border-b border-transparent pb-0.5 text-[0.95rem] tracking-wide transition-colors hover:border-forest-deep"
                    >
                      {it ? s.it : s.en}
                    </a>
                  </li>
                ))}
              </ul>
              <p className="mt-8 text-[0.85rem] text-muted-foreground">{t.menuPage.lede}</p>
            </Reveal>
          </div>

          <div className="mt-20 space-y-20 md:mt-28 md:space-y-28">
            {menuSections.map((s) => (
              <section key={s.id} id={s.id} className="scroll-mt-28">
                <div className="grid gap-8 md:grid-cols-12">
                  <Reveal className="md:col-span-4">
                    <h2 className="display-md sticky top-28 max-w-[12ch]">{it ? s.it : s.en}</h2>
                  </Reveal>
                  <div className="md:col-span-7 md:col-start-6">
                    <ul className="divide-y divide-border border-t border-border">
                      {s.items.map((item, i) => (
                        <Reveal as="li" key={item.it} delay={Math.min(i, 4) * 60} className="py-6">
                          <div className="flex items-baseline gap-4">
                            <h3 className="font-display text-[1.15rem] font-normal leading-snug md:text-[1.3rem]">
                              {it ? item.it : item.en}
                            </h3>
                            <span aria-hidden className="mx-1 h-px flex-1 bg-border" />
                            {item.price && (
                              <span className="shrink-0 text-[0.95rem] tracking-wide text-copper">
                                € {item.price}
                              </span>
                            )}
                          </div>
                          {(it ? item.descIt : item.descEn) && (
                            <p className="mt-2 max-w-[52ch] text-[0.95rem] font-light leading-relaxed text-muted-foreground">
                              {it ? item.descIt : item.descEn}
                            </p>
                          )}
                          {item.allergens?.length ? (
                            <p className="mt-2 text-[0.72rem] tracking-[0.14em] text-muted-foreground/70">
                              {item.allergens.join(" · ")}
                            </p>
                          ) : null}
                        </Reveal>
                      ))}
                    </ul>
                  </div>
                </div>
              </section>
            ))}
          </div>

          <div className="mt-24 grid gap-10 border-t border-border pt-12 md:grid-cols-12">
            <Reveal className="md:col-span-4">
              <h2 className="display-md">{t.menuPage.allergensTitle}</h2>
              <p className="mt-4 max-w-[40ch] text-[0.9rem] text-muted-foreground">
                {t.menuPage.allergensNote}
              </p>
            </Reveal>
            <Reveal delay={100} className="md:col-span-7 md:col-start-6">
              <ul className="grid grid-cols-2 gap-x-8 gap-y-2 sm:grid-cols-3">
                {allergensList.map((a) => (
                  <li key={a.n} className="text-[0.88rem] text-muted-foreground">
                    <span className="text-copper">{a.n}.</span> {it ? a.it : a.en}
                  </li>
                ))}
              </ul>
              <p className="mt-8 text-[0.85rem] tracking-wide">
                {it ? menuNotes.coverIt : menuNotes.coverEn}
              </p>
              <p className="mt-3 max-w-[70ch] text-[0.78rem] font-light leading-relaxed text-muted-foreground">
                {it ? menuNotes.frozenIt : menuNotes.frozenEn}
              </p>
            </Reveal>
          </div>

          <div className="mt-16 flex flex-wrap gap-4">
            <a
              href="/#contatti"
              className="border border-forest-deep bg-forest-deep px-7 py-3.5 text-[0.78rem] tracking-[0.14em] text-ivory transition-colors duration-500 hover:bg-transparent hover:text-forest-deep"
            >
              {t.menuPage.book}
            </a>
            <Link
              to="/"
              className="border border-forest-deep/40 px-7 py-3.5 text-[0.78rem] tracking-[0.14em] transition-colors duration-500 hover:border-forest-deep"
            >
              {t.menuPage.back}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

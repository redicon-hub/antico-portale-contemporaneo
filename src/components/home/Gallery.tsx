import { Link } from "@tanstack/react-router";
import { useLang } from "@/lib/i18n";
import { media } from "@/lib/media";
import { Reveal, PlateFrame } from "@/components/site/primitives";
import { Button } from "@/components/ui/button";

export function MenuGallery() {
  const { t } = useLang();
  return (
    <section id="menu" className="bg-background py-24 md:py-36">
      <div className="mx-auto max-w-[1500px] px-5 md:px-10">
        <div className="grid gap-10 md:grid-cols-12">
          <Reveal className="md:col-span-6">
            <p className="eyebrow text-copper">{t.menu.eyebrow}</p>
            <h2 className="display-lg mt-6 max-w-[14ch]">{t.menu.title}</h2>
          </Reveal>
          <Reveal delay={120} className="md:col-span-5 md:col-start-8 md:self-end">
            <p className="lede text-muted-foreground">{t.menu.text}</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/menu-ristorante-gourmet-arezzo"
                className="border border-forest-deep bg-forest-deep px-7 py-3.5 text-[0.78rem] tracking-[0.14em] text-ivory transition-colors duration-500 hover:bg-transparent hover:text-forest-deep"
              >
                {t.menu.cta1}
              </Link>
              <a
                href="#contatti"
                className="border border-forest-deep/40 px-7 py-3.5 text-[0.78rem] tracking-[0.14em] transition-colors duration-500 hover:border-forest-deep"
              >
                {t.menu.cta2}
              </a>
            </div>
          </Reveal>
        </div>

        {/* Griglia editoriale: altezze uniformi, titoli in sovraimpressione */}
        <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-6">
          {[
            { src: media.DESSERT, alt: "Dessert contemporaneo di Antico Portale", title: t.menu.captions.dessert },
            {
              src: media.DISH_DETAIL_02,
              alt: "Piatto gourmet servito nel ristorante toscano del Valdarno",
              title: t.menu.captions.gourmet,
            },
            {
              src: media.DUCK_BREAST,
              alt: "Petto d'anatra con cavolo, cucina toscana contemporanea",
              title: t.menu.captions.duck,
            },
            { src: media.DISH_STEAK, alt: "Carne alla brace", title: t.menu.captions.steak, position: "50% 60%" },
            { src: media.BREAD_TABLE, alt: "Pane e lievitati della casa in tavola", title: t.menu.captions.bread },
          ].map((im, i) => (
            <Reveal
              key={im.alt}
              delay={(i % 3) * 90}
              className={i < 3 ? "lg:col-span-2" : "lg:col-span-3"}
            >
              <PlateFrame
                src={im.src}
                alt={im.alt}
                title={im.title}
                position={im.position ?? "center"}
                ratio={i < 3 ? "aspect-[4/5]" : "aspect-[3/2]"}
              />
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-14 flex justify-center">
          <Link
            to="/menu-ristorante-gourmet-arezzo"
            className="group inline-flex items-center gap-4 border border-forest-deep/30 px-9 py-4 text-[0.8rem] tracking-[0.14em] transition-colors duration-500 hover:border-forest-deep"
          >
            {t.menu.cta1}
            <span aria-hidden className="h-px w-8 bg-forest-deep transition-all duration-500 group-hover:w-12" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

export function FishFriday() {
  const { t } = useLang();
  return (
    <section className="bg-forest-deep text-ivory">
      <div className="mx-auto max-w-[1500px] px-5 py-24 md:px-10 md:py-36">
        <div className="grid gap-14 md:grid-cols-12 md:gap-10">
          <div className="md:col-span-4">
            <div className="md:sticky md:top-28">
              <Reveal>
                <p className="eyebrow text-copper">{t.fishFriday.eyebrow}</p>
              </Reveal>
              <Reveal delay={80}>
                <h2 className="display-lg mt-6 max-w-[14ch] text-ivory">{t.fishFriday.title}</h2>
              </Reveal>
              <Reveal delay={160}>
                <p className="lede mt-8 max-w-[42ch] text-ivory/70">{t.fishFriday.text}</p>
              </Reveal>
              <Reveal delay={220}>
                <p className="mt-5 max-w-[42ch] text-[0.95rem] font-light leading-relaxed text-ivory/55">
                  {t.fishFriday.text2}
                </p>
              </Reveal>
              <Reveal delay={280}>
                <Link
                  to="/menu-ristorante-gourmet-arezzo"
                  className="mt-10 inline-flex items-center gap-4 border border-ivory/40 px-7 py-3.5 text-[0.78rem] tracking-[0.14em] text-ivory transition-colors duration-500 hover:border-ivory hover:bg-ivory hover:text-forest-deep"
                >
                  {t.fishFriday.cta}
                  <span aria-hidden className="h-px w-8 bg-current transition-all duration-500" />
                </Link>
              </Reveal>
            </div>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 md:col-span-7 md:col-start-6">
            <Reveal>
              <PlateFrame
                src={media.DISH_FISH}
                alt="Tentacolo di polpo, piatto del menu di pesce del venerdì"
                title={t.fishFriday.captions.octopus}
                ratio="aspect-[3/4]"
              />
            </Reveal>
            <Reveal delay={140} className="sm:mt-16">
              <PlateFrame
                src={media.DISH_SPAGHETTI_MARE}
                alt="Spaghetto di mare con frutti di mare, cucina contemporanea"
                title={t.fishFriday.captions.spaghetti}
                ratio="aspect-[3/4]"
                position="50% 60%"
              />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Aperitivo() {
  const { t } = useLang();
  return (
    <section id="esperienze" className="bg-earth/10 py-24 md:py-36">
      <div className="mx-auto max-w-[1500px] px-5 md:px-10">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-stretch lg:gap-10">
          <Reveal className="grid min-h-[600px] grid-cols-5 gap-3 sm:gap-5 lg:col-span-8 lg:min-h-[720px]">
            <div className="group relative col-span-3 overflow-hidden">
              <img
                src={media.APERITIVO_TABLE}
                alt="Aperitivo sulla terrazza di Antico Portale in provincia di Arezzo"
                loading="lazy"
                decoding="async"
                width={1200}
                height={1600}
                className="h-full w-full object-cover object-center transition-transform duration-[1600ms] ease-out group-hover:scale-[1.025]"
              />
            </div>
            <div className="col-span-2 grid grid-rows-2 gap-3 sm:gap-5">
              <div className="group overflow-hidden">
                <img
                  src={media.APERITIVO_CLOSE}
                  alt="Cocktail e tagliere dell'aperitivo di Antico Portale"
                  loading="lazy"
                  decoding="async"
                  width={1200}
                  height={1600}
                  className="h-full w-full object-cover object-center transition-transform duration-[1600ms] ease-out group-hover:scale-[1.025]"
                />
              </div>
              <div className="group overflow-hidden">
                <img
                  src={media.APERITIVO_BOARD}
                  alt="Tagliere del Portale e cocktail sulla terrazza"
                  loading="lazy"
                  decoding="async"
                  width={1200}
                  height={1600}
                  className="h-full w-full object-cover object-center transition-transform duration-[1600ms] ease-out group-hover:scale-[1.025]"
                />
              </div>
            </div>
          </Reveal>

          <Reveal delay={120} className="flex flex-col justify-center border-y border-forest-deep/20 py-10 lg:col-span-4 lg:px-4 lg:py-14">
            <p className="eyebrow text-copper">{t.aperitivo.eyebrow}</p>
            <h2 className="display-lg mt-6 max-w-[11ch]">{t.aperitivo.title}</h2>
            <p className="lede mt-6 max-w-[36ch] text-muted-foreground">{t.aperitivo.text}</p>

            <div className="mt-9 border-l-2 border-copper pl-5">
              <p className="font-display text-3xl font-light text-forest-deep md:text-4xl">{t.aperitivo.price}</p>
              <p className="mt-3 text-sm font-light leading-relaxed text-muted-foreground">
                {t.aperitivoPage.board} · {t.aperitivoPage.bread} · {t.aperitivoPage.drinks}
              </p>
            </div>

            <Button
              asChild
              size="lg"
              className="mt-10 h-auto w-full rounded-none px-7 py-5 text-[0.78rem] tracking-[0.14em] shadow-none sm:w-fit"
            >
              <Link to="/aperitivo-valdarno-provincia-arezzo" className="group">
                {t.aperitivo.cta}
                <span aria-hidden className="h-px w-8 bg-current transition-all duration-500 group-hover:w-12" />
              </Link>
            </Button>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function Place() {
  const { t } = useLang();
  return (
    <section id="il-luogo" className="bg-background pb-24 md:pb-36">
      <Reveal>
        {/* COURTYARD */}
        <img
          src={media.COURTYARD}
          alt="Il cortile esterno del casale che ospita Antico Portale"
          loading="lazy"
          decoding="async"
          width={2000}
          height={1000}
          className="h-[52svh] w-full object-cover md:h-[78svh]"
        />
      </Reveal>

      <div className="mx-auto max-w-[1500px] px-5 pt-16 md:px-10 md:pt-24">
        <div className="grid gap-10 md:grid-cols-12">
          <Reveal className="md:col-span-6">
            <p className="eyebrow text-copper">{t.place.eyebrow}</p>
            <h2 className="display-lg mt-6 max-w-[14ch]">{t.place.title}</h2>
          </Reveal>
          <Reveal delay={120} className="md:col-span-5 md:col-start-8 md:self-end">
            <p className="lede text-muted-foreground">{t.place.text}</p>
            <a
              href="#contatti"
              className="mt-8 inline-block border-b border-forest-deep pb-1 text-[0.8rem] tracking-[0.12em] transition-opacity hover:opacity-65"
            >
              {t.place.cta}
            </a>
          </Reveal>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { src: media.ANCIENT_PORTAL, alt: "Il portale d'ingresso del casale", title: t.place.captions.portal },
            { src: media.DINING_ROOM, alt: "La sala interna con il tavolo lungo", title: t.place.captions.inside },
            { src: media.WOODS_EXTERIOR, alt: "Il giardino e il verde intorno al casale", title: t.place.captions.garden },
            {
              src: media.OUTDOOR_SPACE,
              alt: "Lo spazio esterno del ristorante nel Valdarno",
              title: t.place.captions.outside,
            },
            {
              src: media.EXTERIOR_DAY,
              alt: "Esterno del ristorante Antico Portale ad Ambra, Bucine",
              title: t.place.captions.exterior,
            },
            { src: media.COURTYARD, alt: "Il cortile del casale", title: t.place.captions.patio },
          ].map((im, i) => (
            <Reveal key={im.alt} delay={(i % 3) * 90}>
              <PlateFrame src={im.src} alt={im.alt} title={im.title} ratio="aspect-[4/5]" />
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}

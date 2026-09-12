import { Link } from "@tanstack/react-router";
import { useLang } from "@/lib/i18n";
import { media } from "@/lib/media";
import { Reveal, PlateFrame } from "@/components/site/primitives";

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
    <section id="esperienze" className="bg-ink py-5 md:py-10">
      <Reveal className="mx-auto max-w-[1600px] px-5 md:px-10">
        <Link
          to="/aperitivo-valdarno-provincia-arezzo"
          className="group relative block min-h-[72svh] overflow-hidden"
          aria-label={t.aperitivo.cta}
        >
          <img
            src={media.APERITIVO_TABLE}
            alt="Aperitivo sulla terrazza di Antico Portale in provincia di Arezzo"
            loading="lazy"
            decoding="async"
            width={1200}
            height={1600}
            className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-[1600ms] ease-out group-hover:scale-[1.025]"
          />
          <span aria-hidden className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/20 to-ink/15" />
          <div className="relative flex min-h-[72svh] flex-col justify-end px-6 py-10 text-ivory md:px-14 md:py-14">
            <p className="eyebrow text-copper">{t.aperitivo.eyebrow}</p>
            <div className="mt-5 flex flex-col gap-7 md:flex-row md:items-end md:justify-between">
              <div>
                <h2 className="display-lg max-w-[13ch] text-ivory">{t.aperitivo.title}</h2>
                <p className="lede mt-5 max-w-[46ch] text-ivory/80">{t.aperitivo.text}</p>
              </div>
              <div className="shrink-0 md:text-right">
                <p className="font-display text-2xl font-light text-ivory">{t.aperitivo.price}</p>
                <span className="mt-4 inline-flex items-center gap-4 border-b border-ivory/60 pb-2 text-[0.78rem] tracking-[0.14em]">
                  {t.aperitivo.cta}
                  <span aria-hidden className="h-px w-8 bg-current transition-all duration-500 group-hover:w-12" />
                </span>
              </div>
            </div>
          </div>
        </Link>
      </Reveal>
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

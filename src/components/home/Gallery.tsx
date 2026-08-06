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
                to="/menu"
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
            { src: media.DISH_STEAK, alt: "Carne alla brace", title: t.menu.captions.steak, position: "50% 55%" },
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
            to="/menu"
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

export function Aperitivo() {
  const { t } = useLang();
  return (
    <section id="esperienze" className="bg-earth/10 py-24 md:py-36">
      <div className="mx-auto max-w-[1500px] px-5 md:px-10">
        <div className="grid items-end gap-10 md:grid-cols-12">
          <Reveal className="md:col-span-7">
            <img
              src={media.COCKTAIL_MAIN}
              alt="Cocktail d'autore servito in terrazza ad Antico Portale, Valdambra"
              loading="lazy"
              decoding="async"
              width={1400}
              height={1050}
              className="aspect-[4/3] w-full object-cover"
            />
          </Reveal>
          <Reveal delay={120} className="md:col-span-4 md:col-start-9">
            <p className="eyebrow text-copper">{t.aperitivo.eyebrow}</p>
            <h2 className="display-md mt-6 max-w-[16ch]">{t.aperitivo.title}</h2>
            <p className="body-copy mt-6 text-muted-foreground">{t.aperitivo.text}</p>
          </Reveal>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          {[
            { src: media.TERRACE_01, alt: "Terrazza al tramonto" },
            { src: media.DRINK_DETAIL, alt: "Dettaglio di un drink" },
            { src: media.TERRACE_02, alt: "Tavoli in terrazza d'estate" },
            { src: media.TABLE_EXPERIENCE, alt: "Aperitivo servito all'aperto" },
          ].map((im, i) => (
            <Reveal key={im.alt} delay={i * 80}>
              <img
                src={im.src}
                alt={im.alt}
                loading="lazy"
                decoding="async"
                width={800}
                height={1000}
                className="aspect-[4/5] w-full object-cover transition-transform duration-[1200ms] ease-out hover:scale-[1.02]"
              />
            </Reveal>
          ))}
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

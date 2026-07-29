import { useLang } from "@/lib/i18n";
import { media } from "@/lib/media";
import { Caption, Reveal, ShootPlaceholder, PlateFrame } from "@/components/site/primitives";

export function Manifesto() {
  const { t } = useLang();
  return (
    <section id="il-ristorante" className="bg-background py-24 md:py-36">
      <div className="mx-auto grid max-w-[1500px] items-center gap-12 px-5 md:grid-cols-12 md:gap-16 md:px-10">
        <Reveal className="md:col-span-5">
          {/* HOT_BREAD */}
          <img
            src={media.HOT_BREAD}
            alt="Pane toscano appena servito, tenuto tra le mani in sala"
            loading="lazy"
            decoding="async"
            width={1200}
            height={1500}
            className="aspect-[4/5] w-full object-cover object-center"
          />
          <Caption>{t.manifesto.caption}</Caption>
        </Reveal>

        <div className="md:col-span-6 md:col-start-7">
          <Reveal>
            <p className="eyebrow text-copper">{t.manifesto.eyebrow}</p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="display-lg mt-6 max-w-[18ch]">{t.manifesto.title}</h2>
          </Reveal>
          <Reveal delay={160}>
            <p className="lede mt-8 max-w-[46ch] text-muted-foreground">{t.manifesto.text}</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function FourWomen() {
  const { t } = useLang();
  const fields = ["PORTRAIT_01", "PORTRAIT_02", "PORTRAIT_03", "PORTRAIT_04"];

  return (
    <section id="le-protagoniste" className="bg-forest-deep py-24 text-ivory md:py-36">
      <div className="mx-auto max-w-[1500px] px-5 md:px-10">
        <div className="grid gap-10 md:grid-cols-12">
          <Reveal className="md:col-span-5">
            <p className="eyebrow text-ivory/55">{t.women.eyebrow}</p>
            <h2 className="display-lg mt-6 max-w-[14ch]">{t.women.title}</h2>
          </Reveal>
          <Reveal delay={120} className="md:col-span-6 md:col-start-7">
            <p className="lede text-ivory/80">{t.women.text}</p>
            <p className="body-copy mt-6 max-w-[52ch] text-ivory/60">{t.women.note}</p>
          </Reveal>
        </div>

        <Reveal delay={80} className="mt-16">
          {/* TEAM_GROUP */}
          <ShootPlaceholder
            field="TEAM_GROUP"
            label={t.women.placeholderGroup}
            ratio="aspect-[16/9] md:aspect-[21/9]"
            className="border-ivory/20 bg-ivory/[0.04] text-ivory"
          />
        </Reveal>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {fields.map((f, i) => (
            <Reveal key={f} delay={i * 90}>
              <div className="group">
                <ShootPlaceholder
                  field={f}
                  label={t.women.placeholderPortrait}
                  ratio="aspect-[3/4]"
                  className="border-ivory/20 bg-ivory/[0.04] transition-colors duration-700 group-hover:bg-ivory/[0.08]"
                />
                <div className="mt-4 border-t border-ivory/20 pt-4">
                  <h3 className="font-display text-xl font-light">
                    Nome — <span className="text-ivory/55">{t.women.role}</span>
                  </h3>
                  <p className="mt-2 text-sm font-light leading-relaxed text-ivory/55">
                    {t.women.bioPlaceholder}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120} className="mt-12">
          <a
            href="#le-protagoniste"
            className="inline-block border border-ivory/60 px-7 py-3.5 text-[0.78rem] tracking-[0.14em] transition-colors duration-500 hover:bg-ivory hover:text-forest-deep"
          >
            {t.women.cta}
          </a>
        </Reveal>
      </div>
    </section>
  );
}

export function Kitchen() {
  const { t } = useLang();
  return (
    <section id="la-cucina" className="bg-forest-deep py-24 text-ivory md:py-36">
      <div className="mx-auto max-w-[1500px] px-5 md:px-10">
        <div className="grid gap-12 md:grid-cols-12 md:gap-14">
          {/* Colonna sinistra: manifesto + indice numerato */}
          <div className="md:col-span-4">
            <div className="md:sticky md:top-28">
              <Reveal>
                <p className="eyebrow text-copper">{t.kitchen.eyebrow}</p>
                <h2 className="display-md mt-6 max-w-[16ch]">{t.kitchen.title}</h2>
                <p className="body-copy mt-7 max-w-[42ch] text-ivory/70">{t.kitchen.text}</p>
              </Reveal>

              <div className="mt-10 border-t border-ivory/20">
                {t.kitchen.pillars.map((p, i) => (
                  <Reveal key={p.t} delay={i * 70}>
                    <div className="flex gap-5 border-b border-ivory/20 py-5">
                      <span className="eyebrow pt-1 text-ivory/40">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div>
                        <h3 className="font-display text-xl font-light">{p.t}</h3>
                        <p className="mt-1.5 max-w-[34ch] text-sm font-light leading-relaxed text-ivory/60">
                          {p.d}
                        </p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>

          {/* Colonna destra: trittico ad altezze uniformi */}
          <div className="md:col-span-8">
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <Reveal>
                <PlateFrame
                  src={media.HANDMADE_PASTA}
                  alt="Piatto di pasta fresca con ragù toscano, cucina contemporanea nel Valdarno"
                  title={t.kitchen.captionMain}
                  ratio="aspect-[4/5]"
                />
              </Reveal>
              <Reveal delay={90}>
                <PlateFrame
                  src={media.DISH_DETAIL_01}
                  alt="Dettaglio di un piatto dai colori intensi, ristorante gourmet in Valdarno"
                  title={t.kitchen.captionSide}
                  ratio="aspect-[4/5]"
                />
              </Reveal>
              <Reveal delay={150} className="sm:col-span-2">
                <PlateFrame
                  src={media.DISH_DETAIL_02}
                  alt="Composizione gourmet servita ad Antico Portale"
                  title={t.kitchen.captionWide}
                  ratio="aspect-[16/9]"
                />
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


export function Bao() {
  const { t } = useLang();
  return (
    <section className="bg-ink py-24 text-ivory md:py-36">
      <div className="mx-auto max-w-[1500px] px-5 md:px-10">
        <div className="grid gap-12 md:grid-cols-12 md:gap-14">
          {/* Colonna sinistra: manifesto della contaminazione */}
          <div className="md:col-span-4">
            <div className="md:sticky md:top-28">
              <Reveal>
                <p className="eyebrow text-copper">{t.bao.eyebrow}</p>
                <h2 className="display-md mt-6 max-w-[18ch]">{t.bao.title}</h2>
                <p className="body-copy mt-7 max-w-[42ch] text-ivory/70">{t.bao.text}</p>
              </Reveal>
              <Reveal delay={120}>
                <p className="mt-10 border-t border-ivory/20 pt-6 max-w-[36ch] font-display text-lg font-light leading-snug text-ivory/80">
                  {t.bao.note}
                </p>
              </Reveal>
            </div>
          </div>

          {/* Colonna destra: dittico ad altezze uniformi */}
          <div className="md:col-span-8">
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <Reveal>
                <PlateFrame
                  src={media.TUSCAN_BAO}
                  alt="Bao reinterpretato in chiave toscana, Antico Portale"
                  title={t.bao.caption1}
                  ratio="aspect-[4/5]"
                />
              </Reveal>
              <Reveal delay={90}>
                <PlateFrame
                  src={media.TUSCAN_BAO_ALT}
                  alt="Dettaglio del bao toscano servito ad Antico Portale"
                  title={t.bao.caption2}
                  ratio="aspect-[4/5]"
                />
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


export function ChefRagu() {
  const { t } = useLang();
  return (
    <section className="bg-wine py-24 text-ivory md:py-36">
      <div className="mx-auto grid max-w-[1500px] items-center gap-12 px-5 md:grid-cols-12 md:px-10">
        <div className="md:col-span-6">
          <Reveal>
            <p className="eyebrow text-ivory/60">{t.chef.eyebrow}</p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="display-lg mt-6 max-w-[12ch]">{t.chef.title}</h2>
          </Reveal>
          <Reveal delay={160}>
            <p className="lede mt-8 max-w-[44ch] text-ivory/80">{t.chef.text}</p>
          </Reveal>
          <Reveal delay={220}>
            <a
              href="#le-protagoniste"
              className="mt-10 inline-block border border-ivory/70 px-7 py-3.5 text-[0.78rem] tracking-[0.14em] transition-colors duration-500 hover:bg-ivory hover:text-wine"
            >
              {t.chef.cta}
            </a>
          </Reveal>
        </div>
        <Reveal delay={120} className="md:col-span-5 md:col-start-8">
          {/* CHEF_RAGU */}
          <ShootPlaceholder
            field="CHEF_RAGU"
            label={t.chef.placeholder}
            ratio="aspect-[4/5]"
            className="border-ivory/25 bg-ivory/[0.05] text-ivory"
          />
        </Reveal>
      </div>
    </section>
  );
}

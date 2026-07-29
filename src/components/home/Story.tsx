import { useLang } from "@/lib/i18n";
import { media } from "@/lib/media";
import { Caption, Reveal, ShootPlaceholder } from "@/components/site/primitives";

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
    <section id="la-cucina" className="bg-background py-24 md:py-36">
      <div className="mx-auto max-w-[1500px] px-5 md:px-10">
        <div className="grid gap-10 md:grid-cols-12">
          <Reveal className="md:col-span-6">
            <p className="eyebrow text-copper">{t.kitchen.eyebrow}</p>
            <h2 className="display-lg mt-6 max-w-[16ch]">{t.kitchen.title}</h2>
          </Reveal>
          <Reveal delay={120} className="md:col-span-5 md:col-start-8 md:self-end">
            <p className="lede text-muted-foreground">{t.kitchen.text}</p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-12 md:gap-10">
          <Reveal className="md:col-span-7">
            {/* HANDMADE_PASTA */}
            <img
              src={media.HANDMADE_PASTA}
              alt="Piatto di pasta fresca con ragù toscano, cucina contemporanea nel Valdarno"
              loading="lazy"
              decoding="async"
              width={1400}
              height={1050}
              className="aspect-[4/3] w-full object-cover"
            />
            <Caption>{t.kitchen.captionMain}</Caption>
          </Reveal>

          <Reveal delay={120} className="md:col-span-4 md:col-start-9 md:pt-24">
            {/* DISH_DETAIL_01 */}
            <img
              src={media.DISH_DETAIL_01}
              alt="Dettaglio di un piatto dai colori intensi, ristorante gourmet in Valdarno"
              loading="lazy"
              decoding="async"
              width={1000}
              height={1250}
              className="aspect-[4/5] w-full object-cover"
            />
            <Caption>{t.kitchen.captionSide}</Caption>
          </Reveal>
        </div>

        <div className="mt-20 grid gap-px border-t border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {t.kitchen.pillars.map((p, i) => (
            <Reveal key={p.t} delay={i * 80} className="bg-background p-8">
              <h3 className="font-display text-2xl font-light">{p.t}</h3>
              <p className="mt-3 text-sm font-light leading-relaxed text-muted-foreground">{p.d}</p>
            </Reveal>
          ))}
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
        <div className="grid items-center gap-12 md:grid-cols-12">
          <Reveal className="md:col-span-6">
            {/* TUSCAN_BAO */}
            <img
              src={media.TUSCAN_BAO}
              alt="Bao reinterpretato in chiave toscana, Antico Portale"
              loading="lazy"
              decoding="async"
              width={1200}
              height={900}
              className="aspect-[4/3] w-full object-cover"
            />
          </Reveal>
          <div className="md:col-span-5 md:col-start-8">
            <Reveal>
              <p className="eyebrow text-copper">{t.bao.eyebrow}</p>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="display-md mt-6 max-w-[20ch]">{t.bao.title}</h2>
            </Reveal>
            <Reveal delay={160}>
              <p className="body-copy mt-7 max-w-[46ch] text-ivory/70">{t.bao.text}</p>
            </Reveal>
            <Reveal delay={220} className="mt-10">
              {/* TUSCAN_BAO_ALT */}
              <img
                src={media.TUSCAN_BAO_ALT}
                alt="Dettaglio ravvicinato del bao toscano servito ad Antico Portale"
                loading="lazy"
                decoding="async"
                width={900}
                height={600}
                className="aspect-[3/2] w-full object-cover"
              />
            </Reveal>
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

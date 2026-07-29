import { useLang } from "@/lib/i18n";
import { Reveal } from "@/components/site/primitives";

export function International() {
  const { t } = useLang();
  return (
    <section className="bg-forest py-24 text-ivory md:py-32">
      <div className="mx-auto grid max-w-[1500px] gap-10 px-5 md:grid-cols-12 md:px-10">
        <Reveal className="md:col-span-6">
          <p className="eyebrow text-ivory/55">{t.intl.eyebrow}</p>
          <h2 className="display-md mt-6 max-w-[16ch]">{t.intl.title}</h2>
          <p className="mt-4 font-display text-lg font-light italic text-ivory/60">
            {t.intl.subtitle}
          </p>
        </Reveal>
        <Reveal delay={120} className="md:col-span-5 md:col-start-8">
          <p className="body-copy text-ivory/80">{t.intl.text}</p>
          <ul className="mt-8 divide-y divide-ivory/15 border-y border-ivory/15">
            {t.intl.links.map((l) => (
              <li key={l} className="flex items-center justify-between gap-4 py-3.5 text-sm font-light">
                <span>{l}</span>
                <span className="eyebrow text-ivory/40">{t.intl.soon}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

export function Reviews() {
  const { t } = useLang();
  return (
    <section className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-[1500px] px-5 md:px-10">
        <div className="grid gap-10 md:grid-cols-12">
          <Reveal className="md:col-span-5">
            <p className="eyebrow text-copper">{t.reviews.eyebrow}</p>
            <h2 className="display-lg mt-6 max-w-[12ch]">{t.reviews.title}</h2>
          </Reveal>
          <Reveal delay={120} className="md:col-span-5 md:col-start-8 md:self-end">
            <p className="body-copy text-muted-foreground">{t.reviews.text}</p>
            <a
              href="#contatti"
              className="mt-6 inline-block border-b border-forest-deep pb-1 text-[0.8rem] tracking-[0.12em] transition-opacity hover:opacity-65"
            >
              {t.reviews.cta}
            </a>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-px border-t border-border bg-border md:grid-cols-3">
          {[0, 1, 2].map((i) => (
            <Reveal key={i} delay={i * 90} className="flex flex-col justify-between bg-background p-8">
              <p className="font-display text-xl font-light leading-snug text-muted-foreground">
                “{t.reviews.placeholder}”
              </p>
              <p className="eyebrow mt-10 text-muted-foreground/70">
                {t.reviews.source} — Google
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Booking() {
  const { t } = useLang();
  const rows = [
    { label: t.booking.hours, value: t.booking.toFill },
    { label: t.booking.address, value: t.booking.toFill },
    { label: t.booking.phone, value: t.booking.toFill },
    { label: t.booking.email, value: t.booking.toFill },
    { label: t.booking.directions, value: t.booking.toFill },
  ];

  return (
    <section id="contatti" className="bg-ink py-24 text-ivory md:py-36">
      <div className="mx-auto grid max-w-[1500px] gap-12 px-5 md:grid-cols-12 md:px-10">
        <div className="md:col-span-6">
          <Reveal>
            <p className="eyebrow text-copper">{t.booking.eyebrow}</p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="display-lg mt-6 max-w-[12ch]">{t.booking.title}</h2>
          </Reveal>
          <Reveal delay={140}>
            <p className="lede mt-8 max-w-[42ch] text-ivory/75">{t.booking.text}</p>
          </Reveal>
          <Reveal delay={200}>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#contatti"
                className="border border-ivory bg-ivory px-8 py-4 text-[0.78rem] tracking-[0.14em] text-ink transition-colors duration-500 hover:bg-transparent hover:text-ivory"
              >
                {t.book}
              </a>
              <a
                href="#contatti"
                className="border border-ivory/50 px-8 py-4 text-[0.78rem] tracking-[0.14em] transition-colors duration-500 hover:border-ivory"
              >
                {t.booking.wa}
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal delay={120} className="md:col-span-5 md:col-start-8">
          <dl className="divide-y divide-ivory/15 border-y border-ivory/15">
            {rows.map((r) => (
              <div key={r.label} className="flex items-baseline justify-between gap-6 py-4">
                <dt className="eyebrow text-ivory/50">{r.label}</dt>
                <dd className="text-sm font-light text-ivory/70">{r.value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}

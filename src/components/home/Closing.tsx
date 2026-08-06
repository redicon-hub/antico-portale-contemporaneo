import { Clock, MapPin, MessageCircle, Phone } from "lucide-react";
import { useLang } from "@/lib/i18n";
import { contact } from "@/lib/contact";
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
    <section id="recensioni" className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-[1500px] px-5 md:px-10">
        <div className="grid gap-10 md:grid-cols-12">
          <Reveal className="md:col-span-5">
            <p className="eyebrow text-copper">{t.reviews.eyebrow}</p>
            <h2 className="display-lg mt-6 max-w-[12ch]">{t.reviews.title}</h2>
          </Reveal>
          <Reveal delay={120} className="md:col-span-5 md:col-start-8 md:self-end">
            <p className="body-copy text-muted-foreground">{t.reviews.text}</p>
            <div className="mt-7 flex flex-wrap gap-4">
              <a
                href={contact.google.reviews}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-forest-deep px-6 py-3 text-[0.78rem] tracking-[0.12em] transition-colors duration-500 hover:bg-forest-deep hover:text-ivory"
              >
                {t.reviews.cta}
              </a>
              <a
                href={contact.google.profile}
                target="_blank"
                rel="noopener noreferrer"
                className="border-b border-forest-deep pb-1 text-[0.78rem] tracking-[0.12em] transition-opacity hover:opacity-65"
              >
                {t.reviews.write}
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal delay={160} className="mt-14 border border-border">
          <div className="grid md:grid-cols-3">
            <div className="border-b border-border p-8 md:border-b-0 md:border-r">
              <p className="eyebrow text-muted-foreground/70">{t.reviews.badge}</p>
              <p className="mt-4 font-display text-3xl font-light">Google</p>
              <p className="mt-2 text-[0.8rem] tracking-[0.12em] text-copper">★★★★★</p>
            </div>
            <div className="border-b border-border p-8 md:border-b-0 md:border-r">
              <p className="eyebrow text-muted-foreground/70">{t.reviews.profile}</p>
              <p className="mt-4 font-display text-xl font-light leading-snug">
                {contact.name}
                <br />
                <span className="text-muted-foreground">{contact.addressLine}</span>
              </p>
            </div>
            <div className="flex flex-col justify-between p-8">
              <p className="font-display text-xl font-light leading-snug text-muted-foreground">
                {t.reviews.placeholder}
              </p>
              <a
                href={contact.google.reviews}
                target="_blank"
                rel="noopener noreferrer"
                className="eyebrow mt-10 border-b border-forest-deep pb-1 self-start transition-opacity hover:opacity-65"
              >
                {t.reviews.source} — Google
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function Booking() {
  const { t } = useLang();

  const channels = [
    {
      icon: Phone,
      label: t.booking.phone,
      value: contact.phone,
      href: contact.phoneHref,
    },
    {
      icon: MessageCircle,
      label: t.booking.wa,
      value: contact.whatsapp,
      href: contact.whatsappHref,
    },
    {
      icon: MapPin,
      label: t.booking.address,
      value: contact.addressLine,
      href: contact.google.directions,
    },
  ];

  return (
    <section id="contatti" className="bg-ink py-24 text-ivory md:py-36">
      <div className="mx-auto grid max-w-[1500px] gap-14 px-5 md:grid-cols-12 md:px-10">
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
            <ul className="mt-12 space-y-3">
              {channels.map((c) => (
                <li key={c.label}>
                  <a
                    href={c.href}
                    target={c.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="group flex items-center gap-5 border border-ivory/15 px-6 py-5 transition-colors duration-500 hover:border-ivory/50 hover:bg-ivory/5"
                  >
                    <c.icon
                      size={26}
                      strokeWidth={1.2}
                      className="shrink-0 text-copper"
                      aria-hidden
                    />
                    <span className="min-w-0">
                      <span className="block text-[0.7rem] uppercase tracking-[0.16em] text-ivory/45">
                        {c.label}
                      </span>
                      <span className="mt-1.5 block text-lg font-light leading-snug md:text-xl">
                        {c.value}
                      </span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal delay={120} className="md:col-span-5 md:col-start-8">
          <div className="border border-ivory/15 px-6 py-8 md:px-9 md:py-10">
            <div className="flex items-center gap-4">
              <Clock size={24} strokeWidth={1.2} className="text-copper" aria-hidden />
              <h3 className="text-xl font-light tracking-wide md:text-2xl">
                {t.booking.hoursTitle}
              </h3>
            </div>

            <dl className="mt-8 divide-y divide-ivory/12">
              {contact.hours.map((h) => (
                <div
                  key={h.key}
                  className="flex items-baseline justify-between gap-6 py-4"
                >
                  <dt className="text-base font-light text-ivory/70 md:text-lg">
                    {t.booking.days[h.key]}
                  </dt>
                  <dd
                    className={
                      h.open
                        ? "text-base tabular-nums md:text-lg"
                        : "text-base tracking-[0.08em] text-ivory/40 md:text-lg"
                    }
                  >
                    {h.open ?? t.booking.closed}
                  </dd>
                </div>
              ))}
            </dl>

            <a
              href={contact.google.directions}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-3 border-b border-ivory/30 pb-1 text-sm tracking-[0.12em] transition-opacity hover:opacity-70"
            >
              <MapPin size={18} strokeWidth={1.2} aria-hidden />
              {t.booking.directionsCta}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}


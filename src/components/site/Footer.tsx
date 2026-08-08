import { useLang } from "@/lib/i18n";
import { contact } from "@/lib/contact";
import { Wordmark } from "./Header";

export function Footer() {
  const { t, lang, setLang } = useLang();

  return (
    <footer className="bg-forest-deep text-ivory">
      <div className="mx-auto max-w-[1500px] px-5 py-16 md:px-10 md:py-24">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <Wordmark />
            <p className="mt-8 max-w-sm font-display text-2xl font-light leading-tight">
              {t.footer.claim}
            </p>
          </div>

          <div className="md:col-span-2">

            <h2 className="eyebrow text-ivory/55">{t.footer.nav}</h2>
            <ul className="mt-5 space-y-2.5 text-sm font-light">
              {Object.entries(t.nav).map(([k, v]) => (
                <li key={k}>
                  <a href="#top" className="transition-opacity hover:opacity-65">
                    {v}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <h2 className="eyebrow text-ivory/55">{t.footer.info}</h2>
            <ul className="mt-5 space-y-4 text-sm font-light text-ivory/80">
              <li>
                <span className="block text-[0.7rem] uppercase tracking-[0.14em] text-ivory/45">
                  {t.booking.address}
                </span>
                <span className="mt-1 block">{contact.street}, {contact.locality}</span>
                <span className="block">{contact.postalCode} {contact.city} ({contact.province})</span>
              </li>
              <li>
                <span className="block text-[0.7rem] uppercase tracking-[0.14em] text-ivory/45">
                  {t.booking.phone}
                </span>
                <a
                  href={contact.phoneHref}
                  className="mt-1 block whitespace-nowrap transition-opacity hover:opacity-65"
                >
                  {contact.phone}
                </a>
              </li>
              <li>
                <span className="block text-[0.7rem] uppercase tracking-[0.14em] text-ivory/45">
                  WhatsApp
                </span>
                <a
                  href={contact.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 block whitespace-nowrap transition-opacity hover:opacity-65"
                >
                  {contact.whatsapp}
                </a>
              </li>
              <li>
                <span className="block text-[0.7rem] uppercase tracking-[0.14em] text-ivory/45">
                  {t.booking.hours}
                </span>
                <span className="mt-1 block">{t.booking.hoursShort}</span>
              </li>
            </ul>
          </div>


          <div className="md:col-span-2">
            <h2 className="eyebrow text-ivory/55">{t.footer.follow}</h2>
            <ul className="mt-5 space-y-2.5 text-sm font-light">
              <li>
                <a
                  href={contact.google.profile}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-opacity hover:opacity-65"
                >
                  Google
                </a>
              </li>
              <li>
                <a
                  href={contact.google.directions}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-opacity hover:opacity-65"
                >
                  {t.booking.directionsCta}
                </a>
              </li>
              <li className="text-ivory/45">Instagram — {t.intl.soon}</li>
            </ul>
            <a
              href="#contatti"
              className="mt-6 inline-block border border-ivory/60 px-5 py-2.5 text-[0.75rem] tracking-[0.14em] transition-colors hover:bg-ivory hover:text-forest-deep"
            >
              {t.book}
            </a>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-ivory/15 pt-6 text-[0.75rem] font-light text-ivory/60 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            {t.footer.legal.map((l) => (
              <a key={l.href} href={l.href} className="transition-opacity hover:opacity-70">
                {l.label}
              </a>
            ))}
            <span>{t.footer.company}</span>
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={() => setLang("it")}
              className={lang === "it" ? "text-ivory" : "transition-opacity hover:opacity-80"}
            >
              Italiano
            </button>
            <span className="opacity-40">/</span>
            <button
              onClick={() => setLang("en")}
              className={lang === "en" ? "text-ivory" : "transition-opacity hover:opacity-80"}
            >
              English
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

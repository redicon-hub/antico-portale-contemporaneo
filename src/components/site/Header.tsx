import { useEffect, useState } from "react";
import { useLang } from "@/lib/i18n";
import { media } from "@/lib/media";

const sections = [
  { key: "restaurant", href: "#il-ristorante" },
  { key: "kitchen", href: "#la-cucina" },
  { key: "women", href: "#le-protagoniste" },
  { key: "menu", href: "#menu" },
  { key: "experiences", href: "#esperienze" },
  { key: "place", href: "#il-luogo" },
  { key: "contact", href: "#contatti" },
] as const;

/** Segno grafico ricostruito, ispirato al portale. Sostituibile con logo SVG definitivo. */
export function Wordmark({ compact = false }: { compact?: boolean }) {
  return (
    <span className="flex items-center gap-3 leading-none">
      <svg
        width="22"
        height="30"
        viewBox="0 0 22 30"
        fill="none"
        aria-hidden
        className="shrink-0 opacity-90"
      >
        <path
          d="M1 29V11.5C1 5.7 5.5 1 11 1s10 4.7 10 10.5V29"
          stroke="currentColor"
          strokeWidth="1.1"
        />
        <path d="M6 29V12.2C6 8.5 8.2 5.8 11 5.8s5 2.7 5 6.4V29" stroke="currentColor" strokeWidth="0.7" />
      </svg>
      {!compact && (
        <span className="font-display text-[0.95rem] font-normal uppercase leading-tight tracking-[0.28em]">
          Antico
          <br />
          Portale
        </span>
      )}
    </span>
  );
}

export function Header() {
  const { t, lang, setLang } = useLang();
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-[background-color,color,border-color,padding] duration-700 ${
          solid
            ? "border-b border-border bg-background/95 py-3 text-foreground backdrop-blur-md"
            : "border-b border-transparent py-6 text-ivory"
        }`}
      >
        <div className="mx-auto flex max-w-[1500px] items-center justify-between gap-6 px-5 md:px-10">
          <a href="#top" aria-label="Antico Portale — home" className="shrink-0">
            <Wordmark />
          </a>

          <nav aria-label="Principale" className="hidden items-center gap-7 lg:flex">
            {sections.map((s) => (
              <a
                key={s.key}
                href={s.href}
                className="relative text-[0.8rem] font-normal tracking-wide transition-opacity duration-300 after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-current after:transition-[width] after:duration-500 hover:after:w-full"
              >
                {t.nav[s.key]}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setLang(lang === "it" ? "en" : "it")}
              className="eyebrow border-b border-current pb-0.5 transition-opacity hover:opacity-70"
              aria-label={lang === "it" ? "Switch to English" : "Passa all'italiano"}
            >
              {t.langLabel}
            </button>
            <a
              href="#contatti"
              className={`hidden border px-5 py-2.5 text-[0.78rem] tracking-[0.12em] transition-colors duration-500 sm:inline-block ${
                solid
                  ? "border-forest-deep bg-forest-deep text-ivory hover:bg-transparent hover:text-forest-deep"
                  : "border-ivory/70 text-ivory hover:bg-ivory hover:text-ink"
              }`}
            >
              {t.book}
            </a>
            <button
              onClick={() => setOpen(true)}
              aria-label="Menu"
              className="flex h-9 w-9 items-center justify-center lg:hidden"
            >
              <span className="relative block h-3 w-6">
                <span className="absolute inset-x-0 top-0 h-px bg-current" />
                <span className="absolute inset-x-0 bottom-0 h-px bg-current" />
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Menu fullscreen mobile */}
      <div
        className={`fixed inset-0 z-[60] bg-forest-deep text-ivory transition-opacity duration-500 lg:hidden ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <div className="flex h-full flex-col">
          <div className="flex items-center justify-between px-5 py-6">
            <Wordmark />
            <button onClick={() => setOpen(false)} aria-label="Chiudi" className="h-9 w-9 text-2xl font-light">
              ×
            </button>
          </div>
          <nav aria-label="Mobile" className="flex-1 overflow-y-auto px-5">
            {sections.map((s, i) => (
              <a
                key={s.key}
                href={s.href}
                onClick={() => setOpen(false)}
                className="block border-b border-ivory/15 py-4 font-display text-2xl font-light"
                style={{ transitionDelay: `${i * 30}ms` }}
              >
                {t.nav[s.key]}
              </a>
            ))}
            <div className="mt-6 grid grid-cols-2 gap-3 pb-6">
              <img
                src={media.HOT_BREAD}
                alt=""
                aria-hidden
                loading="lazy"
                className="h-36 w-full object-cover"
              />
              <img
                src={media.COURTYARD}
                alt=""
                aria-hidden
                loading="lazy"
                className="h-36 w-full object-cover"
              />
            </div>
          </nav>
          <div className="px-5 pb-8">
            <a
              href="#contatti"
              onClick={() => setOpen(false)}
              className="block border border-ivory py-4 text-center text-[0.8rem] tracking-[0.14em]"
            >
              {t.book}
            </a>
          </div>
        </div>
      </div>

      {/* CTA mobile fissa, discreta */}
      <a
        href="#contatti"
        className="fixed bottom-4 left-1/2 z-40 -translate-x-1/2 border border-forest-deep/25 bg-background/95 px-6 py-3 text-[0.75rem] tracking-[0.14em] text-forest-deep shadow-sm backdrop-blur sm:hidden"
      >
        {t.book}
      </a>
    </>
  );
}

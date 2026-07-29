import { useLang } from "@/lib/i18n";
import { media } from "@/lib/media";

export function Hero() {
  const { t } = useLang();

  return (
    <section id="top" className="relative min-h-[92svh] w-full overflow-hidden bg-ink">
      {/* HERO_MAIN — campo CMS sostituibile (futuro: ritratto delle quattro donne al portale, o breve sequenza video) */}
      <picture>
        <source media="(max-width: 767px)" srcSet={media.HERO_MAIN} />
        <img
          src={media.HERO_MAIN}
          alt="L'ingresso di Antico Portale al tramonto, ristorante di cucina toscana contemporanea nel Valdarno"
          width={1365}
          height={2048}
          fetchPriority="high"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover object-[62%_center] md:object-[38%_center]"
        />
      </picture>

      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, color-mix(in oklab, var(--ink) 46%, transparent) 0%, color-mix(in oklab, var(--ink) 12%, transparent) 38%, color-mix(in oklab, var(--ink) 58%, transparent) 100%)",
        }}
      />

      <div className="relative mx-auto flex min-h-[92svh] max-w-[1500px] flex-col justify-end px-5 pb-20 pt-32 text-ivory md:px-10 md:pb-24">
        <p className="eyebrow text-ivory/75">{t.hero.place}</p>
        <h1 className="display-xl mt-5 max-w-[16ch]">
          {t.hero.title1}
          <br />
          <span className="text-ivory/85">{t.hero.title2}</span>
        </h1>
        <p className="lede mt-7 max-w-[52ch] text-ivory/85">{t.hero.text}</p>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#la-cucina"
            className="border border-ivory bg-ivory px-7 py-3.5 text-[0.78rem] tracking-[0.14em] text-ink transition-colors duration-500 hover:bg-transparent hover:text-ivory"
          >
            {t.hero.cta1}
          </a>
          <a
            href="#contatti"
            className="border border-ivory/60 px-7 py-3.5 text-[0.78rem] tracking-[0.14em] text-ivory transition-colors duration-500 hover:border-ivory hover:bg-ivory/10"
          >
            {t.book}
          </a>
        </div>
      </div>
    </section>
  );
}

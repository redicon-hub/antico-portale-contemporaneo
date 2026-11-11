import { Link } from "@tanstack/react-router";
import { Reveal } from "@/components/site/primitives";
import { useLang } from "@/lib/i18n";
import { natale, NATALE_PATH } from "@/lib/natale-menu";
import poster from "@/assets/natale01.jpeg.asset.json";
import menuImg from "@/assets/natale02.jpeg.asset.json";

export function SpecialMenusCta() {
  const { lang } = useLang();
  const c = natale[lang];
  return (
    <section id="menu-speciali" className="bg-forest-deep text-ivory">
      <div className="mx-auto grid max-w-[1500px] items-center gap-10 px-5 py-20 md:grid-cols-12 md:px-10 md:py-28">
        <Reveal className="md:col-span-5">
          <p className="eyebrow text-copper">{c.ctaEyebrow}</p>
          <h2 className="display-lg mt-6 max-w-[12ch] text-ivory">{c.ctaTitle}</h2>
          <p className="body-copy mt-6 max-w-[40ch] text-ivory/75">{c.ctaText}</p>
          <p className="mt-6 font-display text-2xl font-light text-copper">{c.when}</p>
          <Link
            to={NATALE_PATH}
            className="mt-10 inline-block border border-copper bg-copper px-8 py-4 text-[0.8rem] tracking-[0.14em] text-ink transition-colors duration-500 hover:bg-transparent hover:text-copper"
          >
            {c.ctaButton} →
          </Link>
        </Reveal>
        <Reveal delay={120} className="grid grid-cols-2 gap-4 md:col-span-7">
          <img src={poster.url} alt="Pranzo di Natale 2026 ad Antico Portale, ristorante in provincia di Arezzo" loading="lazy" className="aspect-[4/5] w-full object-cover" />
          <img src={menuImg.url} alt="Menu di Natale di Antico Portale" loading="lazy" className="aspect-[4/5] w-full object-cover md:translate-y-10" />
        </Reveal>
      </div>
    </section>
  );
}

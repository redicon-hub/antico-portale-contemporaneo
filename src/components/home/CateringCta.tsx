import { Link } from "@tanstack/react-router";
import { Reveal } from "@/components/site/primitives";
import { useLang } from "@/lib/i18n";
import { cateringCopy, cateringMedia } from "@/lib/catering-content";

export function CateringCta() {
  const { lang } = useLang();
  const c = cateringCopy[lang];
  return (
    <section id="catering" className="bg-ink text-ivory">
      <div className="mx-auto grid max-w-[1500px] md:grid-cols-12">
        <div className="relative min-h-[420px] md:col-span-7 md:min-h-[640px]">
          <img
            src={cateringMedia.HALL}
            alt="Catering per matrimonio in provincia di Arezzo, tavolata sotto le volte"
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
        <Reveal className="flex flex-col justify-center gap-7 px-5 py-16 md:col-span-5 md:px-14 md:py-24">
          <p className="eyebrow text-copper">{c.ctaEyebrow}</p>
          <h2 className="display-lg max-w-[12ch] text-ivory">{c.ctaTitle}</h2>
          <p className="body-copy max-w-[40ch] text-ivory/75">{c.ctaText}</p>
          <div className="grid grid-cols-2 gap-3">
            <img src={cateringMedia.TOWER} alt="" aria-hidden loading="lazy" className="aspect-[4/5] w-full object-cover" />
            <img src={cateringMedia.MILLEFOGLIE} alt="" aria-hidden loading="lazy" className="aspect-[4/5] w-full object-cover" />
          </div>
          <Link
            to="/catering-matrimoni-eventi-arezzo-valdarno"
            className="self-start border border-copper bg-copper px-8 py-4 text-[0.8rem] tracking-[0.14em] text-ink transition-colors duration-500 hover:bg-transparent hover:text-copper"
          >
            {c.ctaButton} →
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

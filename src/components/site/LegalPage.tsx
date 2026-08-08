import { Link } from "@tanstack/react-router";
import { useLang } from "@/lib/i18n";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import type { LegalDoc } from "@/lib/legal-content";

export function LegalPage({ docs }: { docs: Record<"it" | "en", LegalDoc> }) {
  const { lang } = useLang();
  const doc = docs[lang];

  return (
    <>
      <Header />
      <main className="bg-ivory text-ink">
        <div className="mx-auto max-w-[820px] px-5 pb-24 pt-36 md:px-10 md:pb-32 md:pt-48">
          <Link
            to="/"
            className="eyebrow text-ink/50 transition-opacity hover:opacity-70"
          >
            {lang === "it" ? "Torna alla home" : "Back to home"}
          </Link>
          <h1 className="mt-6 font-display text-4xl font-light leading-[1.05] md:text-6xl">
            {doc.title}
          </h1>
          <p className="mt-3 text-[0.75rem] uppercase tracking-[0.14em] text-ink/45">
            {doc.updated}
          </p>
          <p className="mt-8 max-w-2xl font-light leading-relaxed text-ink/75">{doc.intro}</p>

          <div className="mt-14 space-y-12">
            {doc.sections.map((s) => (
              <section key={s.heading}>
                <h2 className="font-display text-2xl font-light leading-tight">{s.heading}</h2>
                <div className="mt-4 space-y-3 text-sm font-light leading-relaxed text-ink/75">
                  {s.body.map((p) => (
                    <p key={p}>{p}</p>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

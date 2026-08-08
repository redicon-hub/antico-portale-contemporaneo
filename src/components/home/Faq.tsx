import { useState } from "react";
import { Plus } from "lucide-react";
import { useLang } from "@/lib/i18n";
import { faqCopy } from "@/lib/faq-content";
import { Reveal } from "@/components/site/primitives";

export function Faq() {
  const { lang } = useLang();
  const c = faqCopy[lang];
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-[1500px] px-5 md:px-10">
        <div className="grid gap-10 md:grid-cols-12">
          <Reveal className="md:col-span-4">
            <p className="eyebrow text-copper">{c.eyebrow}</p>
            <h2 className="display-md mt-6 max-w-[16ch]">{c.title}</h2>
            <p className="mt-5 max-w-sm text-sm font-light leading-relaxed text-muted-foreground">
              {c.intro}
            </p>
          </Reveal>

          <Reveal delay={120} className="md:col-span-7 md:col-start-6">
            <ul className="border-t border-foreground/12">
              {c.items.map((item, i) => {
                const isOpen = open === i;
                return (
                  <li key={item.q} className="border-b border-foreground/12">
                    <h3>
                      <button
                        type="button"
                        onClick={() => setOpen(isOpen ? null : i)}
                        aria-expanded={isOpen}
                        className="flex w-full items-start justify-between gap-6 py-5 text-left"
                      >
                        <span className="font-display text-lg font-light leading-snug md:text-xl">
                          {item.q}
                        </span>
                        <Plus
                          className={`mt-1 h-4 w-4 shrink-0 text-copper transition-transform duration-500 ${
                            isOpen ? "rotate-45" : ""
                          }`}
                        />
                      </button>
                    </h3>
                    <div
                      className={`grid transition-all duration-500 ${
                        isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <p className="max-w-[62ch] pb-6 text-sm font-light leading-relaxed text-muted-foreground">
                          {item.a}
                        </p>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

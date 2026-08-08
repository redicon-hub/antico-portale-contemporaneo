import { useEffect, useState } from "react";
import { useLang } from "@/lib/i18n";
import { cookieCopy } from "@/lib/cookie-copy";
import { useCookieConsent } from "@/lib/cookie-consent";

function Toggle({
  checked,
  disabled,
  onChange,
  label,
}: {
  checked: boolean;
  disabled?: boolean;
  onChange?: (v: boolean) => void;
  label: string;
}) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      aria-label={label}
      disabled={disabled}
      onClick={() => onChange?.(!checked)}
      className={`relative h-6 w-11 shrink-0 rounded-full border transition-colors ${
        checked ? "border-ivory/70 bg-ivory/80" : "border-ivory/35 bg-transparent"
      } ${disabled ? "opacity-50" : "hover:border-ivory"}`}
    >
      <span
        className={`absolute top-1/2 h-4 w-4 -translate-y-1/2 rounded-full transition-all ${
          checked ? "left-6 bg-forest-deep" : "left-1 bg-ivory/60"
        }`}
      />
    </button>
  );
}

export function CookieConsent() {
  const { lang } = useLang();
  const c = cookieCopy[lang];
  const { consent, hydrated, save } = useCookieConsent();

  const [open, setOpen] = useState(false);
  const [panel, setPanel] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const [marketing, setMarketing] = useState(false);

  useEffect(() => {
    if (!hydrated) return;
    if (!consent) setOpen(true);
    else {
      setAnalytics(consent.analytics);
      setMarketing(consent.marketing);
    }
  }, [hydrated, consent]);

  useEffect(() => {
    const reopen = () => {
      const current = consent;
      setAnalytics(current?.analytics ?? false);
      setMarketing(current?.marketing ?? false);
      setPanel(true);
      setOpen(true);
    };
    window.addEventListener("ap-cookie-open", reopen);
    return () => window.removeEventListener("ap-cookie-open", reopen);
  }, [consent]);

  if (!hydrated || !open) return null;

  const commit = (a: boolean, m: boolean) => {
    save({ analytics: a, marketing: m });
    setOpen(false);
    setPanel(false);
  };

  const state: Record<string, boolean> = { necessary: true, analytics, marketing };
  const setState: Record<string, (v: boolean) => void> = {
    necessary: () => {},
    analytics: setAnalytics,
    marketing: setMarketing,
  };

  return (
    <div
      role="dialog"
      aria-modal="false"
      aria-label={c.prefsTitle}
      className="fixed inset-x-0 bottom-0 z-[80] px-4 pb-4 sm:px-6 sm:pb-6"
    >
      <div className="mx-auto max-w-3xl border border-ivory/15 bg-forest-deep/95 p-6 text-ivory shadow-2xl backdrop-blur-md sm:p-8">
        {!panel ? (
          <>
            <h2 className="font-display text-2xl font-light leading-tight">{c.title}</h2>
            <p className="mt-3 max-w-2xl text-sm font-light leading-relaxed text-ivory/75">
              {c.text}{" "}
              <a href={c.policyHref} className="underline underline-offset-4 hover:opacity-70">
                {c.policy}
              </a>
              .
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <button
                onClick={() => commit(true, true)}
                className="bg-ivory px-6 py-3 text-[0.75rem] tracking-[0.14em] text-forest-deep transition-opacity hover:opacity-85"
              >
                {c.acceptAll}
              </button>
              <button
                onClick={() => commit(false, false)}
                className="border border-ivory/50 px-6 py-3 text-[0.75rem] tracking-[0.14em] transition-colors hover:bg-ivory/10"
              >
                {c.rejectAll}
              </button>
              <button
                onClick={() => setPanel(true)}
                className="px-2 py-3 text-[0.75rem] tracking-[0.14em] text-ivory/70 underline underline-offset-4 transition-opacity hover:text-ivory"
              >
                {c.customize}
              </button>
            </div>
          </>
        ) : (
          <>
            <h2 className="font-display text-2xl font-light leading-tight">{c.prefsTitle}</h2>
            <p className="mt-3 text-sm font-light leading-relaxed text-ivory/75">{c.prefsText}</p>
            <ul className="mt-6 divide-y divide-ivory/12 border-y border-ivory/12">
              {c.categories.map((cat) => (
                <li key={cat.key} className="flex items-start gap-5 py-4">
                  <div className="flex-1">
                    <p className="text-sm tracking-[0.04em]">{cat.name}</p>
                    <p className="mt-1 text-[0.8rem] font-light leading-relaxed text-ivory/60">
                      {cat.desc}
                    </p>
                  </div>
                  {cat.key === "necessary" ? (
                    <span className="mt-1 shrink-0 text-[0.7rem] uppercase tracking-[0.14em] text-ivory/45">
                      {c.always}
                    </span>
                  ) : (
                    <div className="mt-1">
                      <Toggle
                        checked={state[cat.key]}
                        onChange={setState[cat.key]}
                        label={cat.name}
                      />
                    </div>
                  )}
                </li>
              ))}
            </ul>
            <div className="mt-6 flex flex-wrap gap-3">
              <button
                onClick={() => commit(analytics, marketing)}
                className="bg-ivory px-6 py-3 text-[0.75rem] tracking-[0.14em] text-forest-deep transition-opacity hover:opacity-85"
              >
                {c.save}
              </button>
              <button
                onClick={() => commit(true, true)}
                className="border border-ivory/50 px-6 py-3 text-[0.75rem] tracking-[0.14em] transition-colors hover:bg-ivory/10"
              >
                {c.acceptAll}
              </button>
              <button
                onClick={() => setPanel(false)}
                className="px-2 py-3 text-[0.75rem] tracking-[0.14em] text-ivory/70 underline underline-offset-4 transition-opacity hover:text-ivory"
              >
                {c.back}
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

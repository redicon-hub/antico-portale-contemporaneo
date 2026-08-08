import { useCallback, useEffect, useState } from "react";

export type CookieCategory = "necessary" | "analytics" | "marketing";

export type CookiePreferences = {
  necessary: true;
  analytics: boolean;
  marketing: boolean;
};

export type StoredConsent = CookiePreferences & {
  date: string;
  version: number;
};

export const CONSENT_VERSION = 1;
const STORAGE_KEY = "ap-cookie-consent";
const EVENT = "ap-cookie-consent-change";

export const defaultPreferences: CookiePreferences = {
  necessary: true,
  analytics: false,
  marketing: false,
};

export function readConsent(): StoredConsent | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as StoredConsent;
    if (parsed.version !== CONSENT_VERSION) return null;
    return { ...parsed, necessary: true };
  } catch {
    return null;
  }
}

export function writeConsent(prefs: Omit<CookiePreferences, "necessary">) {
  if (typeof window === "undefined") return;
  const stored: StoredConsent = {
    necessary: true,
    analytics: prefs.analytics,
    marketing: prefs.marketing,
    date: new Date().toISOString(),
    version: CONSENT_VERSION,
  };
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(stored));
  window.dispatchEvent(new CustomEvent(EVENT, { detail: stored }));
}

/** Riapre il pannello preferenze da qualunque punto del sito. */
export function openCookiePreferences() {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new CustomEvent("ap-cookie-open"));
}

export function useCookieConsent() {
  const [consent, setConsent] = useState<StoredConsent | null>(null);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setConsent(readConsent());
    setHydrated(true);
    const onChange = () => setConsent(readConsent());
    window.addEventListener(EVENT, onChange);
    return () => window.removeEventListener(EVENT, onChange);
  }, []);

  const save = useCallback((prefs: Omit<CookiePreferences, "necessary">) => {
    writeConsent(prefs);
    setConsent(readConsent());
  }, []);

  return { consent, hydrated, save };
}

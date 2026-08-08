import type { Lang } from "@/lib/i18n";

export const cookieCopy: Record<
  Lang,
  {
    title: string;
    text: string;
    acceptAll: string;
    rejectAll: string;
    customize: string;
    save: string;
    back: string;
    prefsTitle: string;
    prefsText: string;
    always: string;
    policy: string;
    policyHref: string;
    manage: string;
    categories: { key: "necessary" | "analytics" | "marketing"; name: string; desc: string }[];
  }
> = {
  it: {
    title: "Rispettiamo la tua privacy",
    text: "Utilizziamo cookie tecnici necessari al funzionamento del sito e, previo consenso, cookie di misurazione e marketing. Puoi accettare, rifiutare o scegliere le categorie.",
    acceptAll: "Accetta tutti",
    rejectAll: "Rifiuta",
    customize: "Personalizza",
    save: "Salva preferenze",
    back: "Indietro",
    prefsTitle: "Preferenze cookie",
    prefsText: "Scegli quali categorie di cookie autorizzare. Puoi modificare la scelta in qualsiasi momento dal footer.",
    always: "Sempre attivi",
    policy: "Cookie policy",
    policyHref: "/cookie-policy",
    manage: "Preferenze cookie",
    categories: [
      {
        key: "necessary",
        name: "Necessari",
        desc: "Indispensabili per la navigazione, la sicurezza e la memorizzazione delle tue preferenze.",
      },
      {
        key: "analytics",
        name: "Statistiche",
        desc: "Ci aiutano a capire come viene usato il sito, in forma aggregata e anonima.",
      },
      {
        key: "marketing",
        name: "Marketing",
        desc: "Utilizzati per mostrare contenuti e annunci pertinenti su altre piattaforme.",
      },
    ],
  },
  en: {
    title: "We respect your privacy",
    text: "We use technical cookies required for the site to work and, with your consent, measurement and marketing cookies. You can accept, reject or choose categories.",
    acceptAll: "Accept all",
    rejectAll: "Reject",
    customize: "Customise",
    save: "Save preferences",
    back: "Back",
    prefsTitle: "Cookie preferences",
    prefsText: "Choose which cookie categories to allow. You can change your choice at any time from the footer.",
    always: "Always on",
    policy: "Cookie policy",
    policyHref: "/cookie-policy",
    manage: "Cookie preferences",
    categories: [
      {
        key: "necessary",
        name: "Necessary",
        desc: "Essential for browsing, security and storing your preferences.",
      },
      {
        key: "analytics",
        name: "Analytics",
        desc: "Help us understand how the site is used, in aggregate and anonymous form.",
      },
      {
        key: "marketing",
        name: "Marketing",
        desc: "Used to show relevant content and ads on other platforms.",
      },
    ],
  },
};

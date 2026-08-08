import { contact } from "./contact";

export type LegalSection = { heading: string; body: string[] };
export type LegalDoc = {
  title: string;
  intro: string;
  updated: string;
  sections: LegalSection[];
};

const owner = `${contact.name} — ${contact.addressLine}`;
const updated = "Agosto 2026";

export const privacyDoc: Record<"it" | "en", LegalDoc> = {
  it: {
    title: "Privacy policy",
    updated: `Ultimo aggiornamento: ${updated}`,
    intro:
      "Questa informativa descrive come trattiamo i dati personali delle persone che visitano questo sito o ci contattano per una prenotazione, ai sensi del Regolamento (UE) 2016/679 (GDPR).",
    sections: [
      {
        heading: "Titolare del trattamento",
        body: [
          owner,
          `Telefono: ${contact.phone} — WhatsApp: ${contact.whatsapp}`,
          "Per qualsiasi richiesta relativa ai dati personali è possibile contattarci ai recapiti indicati.",
        ],
      },
      {
        heading: "Dati trattati",
        body: [
          "Dati di navigazione: indirizzo IP, tipo di browser e dispositivo, pagine visitate. Sono raccolti in forma tecnica dai sistemi che erogano il sito e servono a garantirne il funzionamento e la sicurezza.",
          "Dati di contatto e prenotazione: nome, numero di telefono, eventuali preferenze o intolleranze che ci comunicate per telefono, WhatsApp o di persona.",
        ],
      },
      {
        heading: "Finalità e basi giuridiche",
        body: [
          "Gestione delle prenotazioni e risposta alle richieste: esecuzione di misure precontrattuali e contrattuali (art. 6.1.b GDPR).",
          "Funzionamento tecnico e sicurezza del sito: legittimo interesse del titolare (art. 6.1.f GDPR).",
          "Eventuali cookie o strumenti non necessari: consenso dell'interessato (art. 6.1.a GDPR).",
        ],
      },
      {
        heading: "Conservazione",
        body: [
          "I dati di prenotazione sono conservati per il tempo necessario a gestire il servizio e ad adempiere agli obblighi fiscali e di legge. I log tecnici sono conservati per periodi limitati dai fornitori di hosting.",
        ],
      },
      {
        heading: "Destinatari",
        body: [
          "I dati possono essere trattati da fornitori tecnici che agiscono come responsabili del trattamento (hosting e distribuzione del sito, servizi di messaggistica utilizzati per le prenotazioni). Non vendiamo né cediamo dati personali a terzi per finalità commerciali.",
        ],
      },
      {
        heading: "Trasferimenti extra UE",
        body: [
          "Alcuni fornitori tecnici possono trattare dati al di fuori dello Spazio Economico Europeo. In tal caso il trasferimento avviene sulla base delle Clausole Contrattuali Standard approvate dalla Commissione europea o di altre garanzie adeguate.",
        ],
      },
      {
        heading: "Diritti dell'interessato",
        body: [
          "Potete chiedere in ogni momento accesso, rettifica, cancellazione, limitazione, portabilità dei dati e opporvi al trattamento, scrivendo o telefonando ai recapiti del titolare.",
          "Avete inoltre diritto di presentare reclamo al Garante per la protezione dei dati personali (www.garanteprivacy.it).",
        ],
      },
    ],
  },
  en: {
    title: "Privacy policy",
    updated: `Last updated: August 2026`,
    intro:
      "This notice explains how we handle personal data of people visiting this website or contacting us for a reservation, under Regulation (EU) 2016/679 (GDPR).",
    sections: [
      {
        heading: "Data controller",
        body: [
          owner,
          `Phone: ${contact.phone} — WhatsApp: ${contact.whatsapp}`,
          "You can reach us at these contacts for any request concerning your personal data.",
        ],
      },
      {
        heading: "Data we process",
        body: [
          "Browsing data: IP address, browser and device type, pages visited. Collected technically by the systems serving the website to keep it working and secure.",
          "Contact and reservation data: name, phone number and any preferences or allergies you share with us by phone, WhatsApp or in person.",
        ],
      },
      {
        heading: "Purposes and legal bases",
        body: [
          "Managing reservations and answering requests: pre-contractual and contractual measures (Art. 6.1.b GDPR).",
          "Technical operation and website security: legitimate interest of the controller (Art. 6.1.f GDPR).",
          "Any non-essential cookies or tools: your consent (Art. 6.1.a GDPR).",
        ],
      },
      {
        heading: "Retention",
        body: [
          "Reservation data is kept as long as needed to provide the service and comply with tax and legal obligations. Technical logs are kept for limited periods by our hosting providers.",
        ],
      },
      {
        heading: "Recipients",
        body: [
          "Data may be processed by technical providers acting as data processors (website hosting and delivery, messaging services used for reservations). We never sell or share personal data for marketing purposes.",
        ],
      },
      {
        heading: "Transfers outside the EU",
        body: [
          "Some technical providers may process data outside the European Economic Area. Such transfers rely on the Standard Contractual Clauses approved by the European Commission or other adequate safeguards.",
        ],
      },
      {
        heading: "Your rights",
        body: [
          "You may request access, rectification, erasure, restriction, data portability and object to processing at any time by writing or calling the controller.",
          "You also have the right to lodge a complaint with the Italian Data Protection Authority (www.garanteprivacy.it).",
        ],
      },
    ],
  },
};

export const cookieDoc: Record<"it" | "en", LegalDoc> = {
  it: {
    title: "Cookie policy",
    updated: `Ultimo aggiornamento: ${updated}`,
    intro:
      "Questa pagina spiega quali cookie e tecnologie simili vengono utilizzati su questo sito e come gestirli.",
    sections: [
      {
        heading: "Cosa sono i cookie",
        body: [
          "I cookie sono piccoli file di testo che i siti salvano sul dispositivo di chi naviga. Possono essere tecnici (necessari al funzionamento) oppure di profilazione e statistica (che richiedono consenso).",
        ],
      },
      {
        heading: "Cookie utilizzati su questo sito",
        body: [
          "Cookie tecnici e di sessione: strettamente necessari all'erogazione del sito, alla sicurezza e al ricordo di preferenze come la lingua selezionata. Non richiedono consenso.",
          "Cookie di profilazione e pubblicitari: non ne utilizziamo.",
          "Statistiche: al momento non sono attivi strumenti di analisi con cookie. Qualora venissero introdotti, l'installazione avverrà solo dopo il vostro consenso e questa pagina sarà aggiornata.",
        ],
      },
      {
        heading: "Servizi di terze parti",
        body: [
          "Il sito contiene collegamenti a servizi esterni (Google Maps, scheda Google Business, WhatsApp). Cliccando su questi link il servizio di destinazione può impostare propri cookie secondo le rispettive informative, che vi invitiamo a consultare.",
        ],
      },
      {
        heading: "Come gestire i cookie",
        body: [
          "È possibile bloccare o eliminare i cookie dalle impostazioni del proprio browser (Chrome, Safari, Firefox, Edge). La disattivazione dei cookie tecnici può compromettere alcune funzionalità del sito.",
        ],
      },
      {
        heading: "Contatti",
        body: [
          `Per informazioni sull'uso dei cookie: ${owner} — ${contact.phone}.`,
        ],
      },
    ],
  },
  en: {
    title: "Cookie policy",
    updated: "Last updated: August 2026",
    intro:
      "This page explains which cookies and similar technologies are used on this website and how to manage them.",
    sections: [
      {
        heading: "What cookies are",
        body: [
          "Cookies are small text files that websites store on your device. They can be technical (necessary to operate the site) or profiling and analytics cookies (which require consent).",
        ],
      },
      {
        heading: "Cookies used on this site",
        body: [
          "Technical and session cookies: strictly necessary to deliver the website, keep it secure and remember preferences such as the selected language. No consent required.",
          "Profiling and advertising cookies: we do not use any.",
          "Analytics: no cookie-based analytics tools are currently active. Should any be introduced, they will only be installed after your consent and this page will be updated.",
        ],
      },
      {
        heading: "Third-party services",
        body: [
          "The site links to external services (Google Maps, Google Business profile, WhatsApp). Following those links may allow the destination service to set its own cookies under its own policy, which we invite you to read.",
        ],
      },
      {
        heading: "Managing cookies",
        body: [
          "You can block or delete cookies in your browser settings (Chrome, Safari, Firefox, Edge). Disabling technical cookies may break some features of the site.",
        ],
      },
      {
        heading: "Contact",
        body: [`For information about cookies: ${owner} — ${contact.phone}.`],
      },
    ],
  },
};

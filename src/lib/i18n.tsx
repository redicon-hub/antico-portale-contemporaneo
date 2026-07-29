import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Lang = "it" | "en";

/**
 * Testi del sito. Sono scritti a mano in entrambe le lingue (nessuna
 * traduzione automatica) e sono pensati per essere mappati 1:1 su campi CMS.
 */
export const copy = {
  it: {
    langLabel: "EN",
    nav: {
      restaurant: "Il Ristorante",
      kitchen: "La Cucina",
      women: "Le Protagoniste",
      menu: "Menu",
      experiences: "Esperienze",
      place: "Dove siamo",
      contact: "Contatti",
    },
    book: "Prenota un tavolo",
    hero: {
      place: "Valdambra, Toscana — tra Arezzo, Firenze e Siena",
      title1: "La Toscana che non ti aspetti.",
      title2: "Nel cuore del Valdarno.",
      text: "Antico Portale è una cucina toscana contemporanea fatta di studio, memoria, carattere e libertà. Un ristorante immerso nel paesaggio del Valdarno, guidato da quattro donne e da un'idea precisa di ospitalità.",
      cta1: "Scopri la nostra cucina",
      scroll: "Scorri",
    },
    manifesto: {
      eyebrow: "Manifesto",
      title: "Non basta cucinare in Toscana per raccontarla.",
      text: "Bisogna conoscerne i prodotti, comprenderne i gesti, rispettarne la memoria e avere il coraggio di portarla nel presente. Antico Portale nasce da anni di lavoro nella ristorazione toscana e dal desiderio di costruire una cucina personale, riconoscibile e viva.",
      caption: "Pane servito caldo, ogni sera.",
    },
    women: {
      eyebrow: "Le protagoniste",
      title: "Quattro donne. Una cucina con carattere.",
      text: "Antico Portale ha quattro voci, quattro temperamenti e una sola direzione. In cucina, in sala e dietro ogni dettaglio dell'esperienza ci sono donne che hanno imparato questo mestiere lavorando, osservando e scegliendo ogni giorno di alzare il livello.",
      note: "Una formazione costruita nella ristorazione toscana di alto livello, anche in contesti come Il Borro. La Toscana non è soltanto il luogo in cui vivono: è una cultura gastronomica che hanno scelto, studiato, servito e reso propria.",
      role: "Ruolo",
      bioPlaceholder: "Breve biografia professionale. Contenuto da completare.",
      cta: "Conosci le protagoniste",
      placeholderGroup: "Ritratto di gruppo — nuovo shooting",
      placeholderPortrait: "Ritratto individuale — nuovo shooting",
    },
    kitchen: {
      eyebrow: "La cucina",
      title: "Cucina toscana contemporanea nel Valdarno",
      text: "La cucina di Antico Portale parte dalla Toscana senza restarne prigioniera. Le ricette, le materie prime e i sapori del territorio vengono studiati, alleggeriti, ricomposti e talvolta messi in dialogo con tecniche e suggestioni inaspettate.",
      pillars: [
        { t: "Radici", d: "La memoria gastronomica toscana come punto di partenza." },
        { t: "Tecnica", d: "Precisione, studio e rispetto degli ingredienti." },
        {
          t: "Libertà",
          d: "La possibilità di sorprendere senza perdere il legame con il territorio.",
        },
        {
          t: "Stagione",
          d: "Una cucina che cambia seguendo disponibilità, maturazione e ispirazione.",
        },
      ],
      captionMain: "Pasta fresca e ragù toscano, cotture lunghe.",
      captionSide: "Colore, acidità, temperatura.",
      captionWide: "Fritto, crema di zucca, senape: la Toscana in un'altra grammatica.",
    },
    bao: {
      eyebrow: "Contaminazione",
      title: "La Toscana può cambiare forma senza perdere la propria voce.",
      text: "Ci sono piatti che partono da una tecnica lontana e ritrovano il proprio carattere attraverso ingredienti, sapori e memorie toscane. Il bao di Antico Portale nasce da questo incontro: non una provocazione, ma un modo diverso di raccontare il territorio.",
    },
    chef: {
      eyebrow: "La chef",
      title: "Il ragù non guarda il passaporto.",
      text: "Guarda il tempo, la tecnica, gli ingredienti e il rispetto. Per cucinarlo davvero bene non basta ereditarne la ricetta: bisogna comprenderla, provarla, sbagliarla e rifarla. Per anni.",
      cta: "Conosci la nostra storia",
      placeholder: "Ritratto della chef con pasta fresca — nuovo shooting",
    },
    menu: {
      eyebrow: "Piatti e menu",
      title: "Il menu cambia. L'identità resta.",
      text: "Seguiamo la stagione, la disponibilità delle materie prime e ciò che ogni ingrediente può esprimere nel momento migliore. Per questo alcuni piatti cambiano, altri ritornano e altri ancora diventano parte della nostra storia.",
      cta1: "Esplora il menu",
      cta2: "Consulta la carta dei vini",
      captions: {
        dessert: "Dessert",
        fish: "Pesce",
        gourmet: "Corte breve, materia prima lunga",
        steak: "Carne alla brace",
        bread: "Lievitati della casa",
        pasta: "Pasta fresca, fatta a mano",
      },
    },
    aperitivo: {
      eyebrow: "Aperitivo e terrazza",
      title: "Il tempo di un aperitivo, prima che inizi la cena.",
      text: "Un cocktail, la terrazza, la luce che cambia e il ritmo lento del Valdambra. L'esperienza di Antico Portale comincia spesso prima di sedersi a tavola.",
    },
    place: {
      eyebrow: "Il luogo",
      title: "Un antico portale. Un casale. Il bosco.",
      text: "Il ristorante prende il nome dal suo ingresso: un portale che introduce in un casale toscano circondato dal verde e dal silenzio del Valdambra. Dentro, la pietra e la memoria del luogo incontrano una sala essenziale, calda e contemporanea.",
      cta: "Scopri il luogo",
      captions: {
        patio: "Il cortile, alla fine del servizio serale",
        garden: "Il verde intorno al casale",
        outside: "Lo spazio esterno d'estate",
        inside: "Il tavolo lungo, per tavolate ed esperienze private",
        portal: "Il portale, l'ingresso che dà il nome al ristorante",
        exterior: "Il casale, nella luce del giorno",
      },
    },
    intl: {
      eyebrow: "Travelling in Tuscany",
      title: "Una Toscana da scoprire, anche a tavola",
      subtitle: "A contemporary Tuscan dining destination in the Valdarno",
      text: "Antico Portale è una tappa per chi desidera conoscere una Toscana meno affollata e più autentica, tra borghi, colline, vigne, boschi e strade panoramiche. Un'esperienza gastronomica da inserire in un viaggio tra Arezzo, Firenze, Siena e il Chianti.",
      links: [
        "Cosa visitare nel Valdarno",
        "I borghi del Valdambra",
        "Itinerari gastronomici",
        "Tra Arezzo, Firenze e Siena",
      ],
      soon: "In arrivo",
    },
    reviews: {
      eyebrow: "Reputazione",
      title: "Quello che resta agli ospiti",
      text: "Le recensioni vengono lette direttamente dalle piattaforme sulle quali gli ospiti scrivono. Nessun estratto è redazionale.",
      placeholder: "Estratto recensione — collegamento dinamico a Google Reviews",
      cta: "Leggi tutte le recensioni",
      source: "Fonte",
    },
    booking: {
      eyebrow: "Prenotazioni",
      title: "Il vostro tavolo, oltre il portale",
      text: "Per una cena speciale, una tappa durante il viaggio o il desiderio di tornare a una cucina che lascia il segno.",
      hours: "Giorni e orari",
      address: "Indirizzo",
      contacts: "Contatti",
      toFill: "Da completare",
      wa: "WhatsApp",
      phone: "Telefono",
      email: "Email",
      directions: "Come raggiungerci",
    },
    footer: {
      claim: "Cucina toscana contemporanea, nel cuore del Valdarno.",
      nav: "Navigazione",
      info: "Informazioni",
      follow: "Social",
      legal: ["Privacy policy", "Cookie policy", "Preferenze cookie"],
      company: "Dati societari — da completare",
    },
  },
  en: {
    langLabel: "IT",
    nav: {
      restaurant: "The Restaurant",
      kitchen: "The Kitchen",
      women: "The Four Women",
      menu: "Menu",
      experiences: "Experiences",
      place: "Find us",
      contact: "Contact",
    },
    book: "Book a table",
    hero: {
      place: "Valdambra, Tuscany — between Arezzo, Florence and Siena",
      title1: "The Tuscany you don't expect.",
      title2: "In the heart of the Valdarno.",
      text: "Antico Portale is contemporary Tuscan cooking built on study, memory, character and freedom. A restaurant set in the Valdarno landscape, run by four women with a precise idea of hospitality.",
      cta1: "Discover our cooking",
      scroll: "Scroll",
    },
    manifesto: {
      eyebrow: "Manifesto",
      title: "Cooking in Tuscany is not the same as understanding it.",
      text: "You have to know its produce, read its gestures, respect its memory — and have the nerve to bring it into the present. Antico Portale grew out of years of work in high-level Tuscan restaurants and the wish to build a kitchen that is personal, recognisable and alive.",
      caption: "Bread served warm, every evening.",
    },
    women: {
      eyebrow: "The four women",
      title: "Four women. One kitchen with a temper.",
      text: "Antico Portale has four voices, four temperaments and a single direction. In the kitchen, in the dining room and behind every detail of the experience there are women who learned this craft by working, watching and choosing to raise the bar every single day.",
      note: "A training built inside high-level Tuscan hospitality, including houses such as Il Borro. Tuscany is not only where they live: it is a culinary culture they chose, studied, served and made their own.",
      role: "Role",
      bioPlaceholder: "Short professional biography. Content to be completed.",
      cta: "Meet the four women",
      placeholderGroup: "Group portrait — new photo shoot",
      placeholderPortrait: "Individual portrait — new photo shoot",
    },
    kitchen: {
      eyebrow: "The kitchen",
      title: "Contemporary Tuscan cuisine in the Valdarno",
      text: "The cooking at Antico Portale starts in Tuscany without being held prisoner by it. Local recipes, produce and flavours are studied, lightened, recomposed and sometimes put in conversation with unexpected techniques.",
      pillars: [
        { t: "Roots", d: "Tuscan culinary memory as a starting point." },
        { t: "Technique", d: "Precision, study and respect for the ingredient." },
        { t: "Freedom", d: "Room to surprise without losing the link to the land." },
        { t: "Season", d: "A kitchen that shifts with availability, ripeness and instinct." },
      ],
      captionMain: "Fresh pasta and Tuscan ragù, long cooking.",
      captionSide: "Colour, acidity, temperature.",
      captionWide: "Fried, pumpkin cream, mustard: Tuscany in another grammar.",
    },
    bao: {
      eyebrow: "Crossing over",
      title: "Tuscany can change shape without losing its voice.",
      text: "Some dishes begin with a distant technique and find their character again through Tuscan ingredients, flavours and memory. The bao at Antico Portale comes from that meeting: not a provocation, but another way of telling this land.",
    },
    chef: {
      eyebrow: "The chef",
      title: "Ragù doesn't check your passport.",
      text: "It looks at time, technique, ingredients and respect. To cook it properly, inheriting the recipe is not enough: you have to understand it, try it, get it wrong and do it again. For years.",
      cta: "Read our story",
      placeholder: "Chef portrait with fresh pasta — new photo shoot",
    },
    menu: {
      eyebrow: "Dishes and menu",
      title: "The menu changes. The identity stays.",
      text: "We follow the season, what the producers can give us and what each ingredient can express at its best moment. Some dishes change, some come back, and some become part of our story.",
      cta1: "Explore the menu",
      cta2: "See the wine list",
      captions: {
        dessert: "Dessert",
        fish: "Fish",
        gourmet: "Short plating, long sourcing",
        steak: "Grilled meat",
        bread: "House breads",
        pasta: "Fresh pasta, made by hand",
      },
    },
    aperitivo: {
      eyebrow: "Aperitivo and terrace",
      title: "The time of one aperitivo, before dinner begins.",
      text: "A cocktail, the terrace, the light shifting and the slow rhythm of the Valdambra. The Antico Portale experience often starts before you sit down.",
    },
    place: {
      eyebrow: "The place",
      title: "An ancient portal. A farmhouse. The woods.",
      text: "The restaurant takes its name from its entrance: a portal opening onto a Tuscan farmhouse surrounded by the green and the silence of the Valdambra. Inside, stone and memory meet a dining room that is spare, warm and contemporary.",
      cta: "Discover the place",
      captions: {
        patio: "The courtyard, at the end of evening service",
        garden: "The green around the farmhouse",
        outside: "The outdoor space in summer",
        inside: "The long table, for large parties and private dining",
        portal: "The portal, the entrance that names the restaurant",
        exterior: "The farmhouse, in daylight",
      },
    },
    intl: {
      eyebrow: "Travelling in Tuscany",
      title: "A Tuscany to discover, at the table too",
      subtitle: "A contemporary Tuscan dining destination in the Valdarno",
      text: "Antico Portale is a stop for travellers looking for a quieter, more authentic Tuscany of villages, hills, vineyards, woods and scenic roads. A dining experience to fold into a journey between Arezzo, Florence, Siena and Chianti.",
      links: [
        "What to see in the Valdarno",
        "Villages of the Valdambra",
        "Food itineraries",
        "Between Arezzo, Florence and Siena",
      ],
      soon: "Coming soon",
    },
    reviews: {
      eyebrow: "Reputation",
      title: "What stays with our guests",
      text: "Reviews are read directly from the platforms where guests write them. No excerpt is written in-house.",
      placeholder: "Review excerpt — dynamic Google Reviews connection",
      cta: "Read all reviews",
      source: "Source",
    },
    booking: {
      eyebrow: "Reservations",
      title: "Your table, beyond the portal",
      text: "For a special dinner, a stop along the journey, or the wish to return to a kitchen that leaves a mark.",
      hours: "Days and hours",
      address: "Address",
      contacts: "Contact",
      toFill: "To be completed",
      wa: "WhatsApp",
      phone: "Phone",
      email: "Email",
      directions: "How to reach us",
    },
    footer: {
      claim: "Contemporary Tuscan cuisine, in the heart of the Valdarno.",
      nav: "Navigation",
      info: "Information",
      follow: "Social",
      legal: ["Privacy policy", "Cookie policy", "Cookie preferences"],
      company: "Company details — to be completed",
    },
  },
} as const;

export type Copy = (typeof copy)["it"];

const LangContext = createContext<{ lang: Lang; setLang: (l: Lang) => void; t: Copy }>({
  lang: "it",
  setLang: () => {},
  t: copy.it,
});

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("it");

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <LangContext.Provider value={{ lang, setLang, t: copy[lang] as Copy }}>
      {children}
    </LangContext.Provider>
  );
}

export const useLang = () => useContext(LangContext);

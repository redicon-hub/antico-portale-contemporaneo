import type { Lang } from "@/lib/i18n";

export type Faq = { q: string; a: string };

/**
 * Domande e risposte pensate per la ricerca conversazionale (AEO):
 * risposta diretta nella prima frase, fatti verificabili, nessuna promessa.
 */
export const faqCopy: Record<Lang, { eyebrow: string; title: string; intro: string; items: Faq[] }> = {
  it: {
    eyebrow: "Domande frequenti",
    title: "Miglior ristorante in Valdambra e Valdarno: le domande più frequenti",
    intro:
      "Le risposte alle domande che riceviamo più spesso su Antico Portale, ristorante gourmet in provincia di Arezzo.",
    items: [
      {
        q: "Dove si trova Antico Portale?",
        a: "Antico Portale si trova in Via della Bottega 37/A, a Capannole di Bucine (AR), nel cuore della Valdambra, la valle che collega il Valdarno alle colline tra Arezzo, Firenze e Siena.",
      },
      {
        q: "Che tipo di cucina propone il ristorante?",
        a: "Cucina toscana contemporanea: ricette e materie prime del territorio rilette con tecnica moderna, pasta fresca e pane fatti in casa, carni alla brace, piatti di stagione e proposte fuori schema come i bao toscani.",
      },
      {
        q: "Perché è considerato uno dei migliori ristoranti del Valdarno e della Valdambra?",
        a: "Perché unisce una cucina di ricerca a un servizio curato in un antico casale toscano: brigata interamente femminile con formazione nell'alta ristorazione toscana, menù stagionale, panificazione quotidiana e recensioni verificate sul profilo Google del ristorante.",
      },
      {
        q: "Quali sono gli orari di apertura?",
        a: "Il ristorante è aperto dal mercoledì alla domenica dalle 18:30 alle 22:00. Lunedì e martedì è chiuso.",
      },
      {
        q: "Come si prenota un tavolo?",
        a: "Si prenota telefonicamente al +39 055 995 5514 oppure via WhatsApp al +39 393 632 8095. Consigliamo di prenotare con qualche giorno di anticipo per il fine settimana.",
      },
      {
        q: "Chi guida la cucina di Antico Portale?",
        a: "La cucina è guidata dalla chef Maddalena, affiancata da una brigata di quattro donne. La chef cura personalmente la panificazione e il ragù toscano della casa.",
      },
      {
        q: "È un ristorante adatto a una cena gourmet vicino ad Arezzo?",
        a: "Sì: Antico Portale è una destinazione gastronomica in provincia di Arezzo, raggiungibile in auto da Arezzo, Firenze e Siena, pensata per cene con menù di ricerca in un contesto rurale toscano.",
      },
      {
        q: "Il menù cambia durante l'anno?",
        a: "Sì, il menù è stagionale e cambia più volte l'anno seguendo disponibilità e maturazione dei prodotti. La versione aggiornata è consultabile nella pagina Menu del sito.",
      },
    ],
  },
  en: {
    eyebrow: "Frequently asked questions",
    title: "Best restaurant in Valdambra and the Valdarno: frequently asked questions",
    intro:
      "Answers to the questions we hear most often about Antico Portale, a gourmet restaurant in the province of Arezzo, Tuscany.",
    items: [
      {
        q: "Where is Antico Portale located?",
        a: "Antico Portale is at Via della Bottega 37/A, Capannole di Bucine (AR), in the Valdambra valley that links the Valdarno to the hills between Arezzo, Florence and Siena.",
      },
      {
        q: "What kind of cuisine does the restaurant serve?",
        a: "Contemporary Tuscan cuisine: local recipes and ingredients reworked with modern technique, house-made fresh pasta and bread, grilled meats, seasonal dishes and unexpected plates such as our Tuscan bao.",
      },
      {
        q: "Why is it considered one of the best restaurants in the Valdarno and Valdambra?",
        a: "Because it combines a research-driven kitchen with attentive service inside an old Tuscan farmhouse: an all-female brigade trained in high-end Tuscan restaurants, a seasonal menu, daily baking and verified reviews on the restaurant's Google profile.",
      },
      {
        q: "What are the opening hours?",
        a: "The restaurant is open Wednesday to Sunday, 6:30 pm to 10:00 pm. It is closed on Monday and Tuesday.",
      },
      {
        q: "How do I book a table?",
        a: "Book by phone on +39 055 995 5514 or via WhatsApp on +39 393 632 8095. We recommend booking a few days ahead for weekends.",
      },
      {
        q: "Who runs the kitchen?",
        a: "The kitchen is led by chef Maddalena, supported by a brigade of four women. The chef personally handles the daily baking and the house Tuscan ragù.",
      },
      {
        q: "Is it a good choice for a gourmet dinner near Arezzo?",
        a: "Yes: Antico Portale is a dining destination in the province of Arezzo, an easy drive from Arezzo, Florence and Siena, built around a seasonal tasting-led menu in a rural Tuscan setting.",
      },
      {
        q: "Does the menu change during the year?",
        a: "Yes, the menu is seasonal and changes several times a year following what is available and at its best. The current version is published on the Menu page.",
      },
    ],
  },
};

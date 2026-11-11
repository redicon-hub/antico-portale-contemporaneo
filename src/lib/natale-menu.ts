/** Menu di Natale 2026 — trascritto dalle locandine ufficiali. */
export const NATALE_PATH = "/menu-natale-eventi-ristoranti-arezzo-provincia" as const;
export const NATALE_PDF = "/downloads/menu-natale-2026-antico-portale.pdf";

export interface Course { label: string; title?: string; items: string[] }
export interface ChristmasMenu { name: string; courses: Course[] }

export const natale = {
  date: "2026-12-25",
  time: "12:30",
  price: 50,
  kidsPrice: 25,
  it: {
    eyebrow: "Menu speciali ed eventi",
    h1: "Pranzo di Natale 2026 tra i ristoranti di Arezzo e provincia",
    lede: "Il 25 dicembre, dalle 12:30, apriamo le porte del Portale per un pranzo di Natale toscano: cappelletti in brodo di cappone, pici al tartufo, anatra in porchetta. Anche in versione vegetariana.",
    when: "25 dicembre 2026 · dalle ore 12:30",
    included: "Inclusi: il nostro pane fatto in casa, acqua, vino e caffè.",
    price: "50 € a persona",
    kids: "Bambini sotto i 12 anni: 25 €",
    download: "Scarica il menu (PDF)",
    book: "Prenota su WhatsApp",
    call: "Chiama",
    eventsTitle: "Menu speciali tutto l'anno",
    eventsText: "Natale, Capodanno, San Valentino, Pasqua e serate a tema: ad ogni ricorrenza la brigata del Portale firma un menu dedicato. Qui trovi sempre il prossimo evento e il menu da scaricare.",
    ctaEyebrow: "Menu speciali ed eventi",
    ctaTitle: "Il Natale al Portale",
    ctaText: "Pranzo di Natale il 25 dicembre dalle 12:30. Menu tradizionale o vegetariano, 50 € a persona, bevande incluse.",
    ctaButton: "Scopri il menu di Natale",
    back: "Torna alla home",
    menus: [
      {
        name: "Menu di Natale",
        courses: [
          { label: "Benvenuto", items: ["Bollicina con polpettina di cavolo nero e crema di patate"] },
          { label: "Antipasto", title: "Tagliere del Portale conviviale", items: ["Crudo, soppressata, finocchiona, sformato di carciofi, pappa al pomodoro, ribollita, insalata russa, pecorino con marmellata di cipolle, crostini neri con salvia fritta"] },
          { label: "Assaggio di due primi", items: ["Cappelletti fatti a mano in brodo di cappone", "Pici al ragù bianco di Cinta e tartufo"] },
          { label: "Secondo con contorno", title: "Anatra in porchetta", items: ["con patate al forno e verza marinata"] },
          { label: "Dolce", items: ["Mousse al cioccolato con panettone tostato"] },
        ],
      },
      {
        name: "Menu vegetariano",
        courses: [
          { label: "Benvenuto", items: ["Bollicina di benvenuto con polpettina di cavolo nero e crema vellutata di patate"] },
          { label: "Antipasto conviviale vegetariano", items: ["Pappa al pomodoro, ribollita, sformato di carciofi, pecorino toscano con marmellata di cipolle, crostino con crema di patate e oliva taggiasca, crostino con hummus di ceci e rosmarino, frittatina di carota"] },
          { label: "Primi", items: ["Vellutata di zucca e patate con pane tostato", "Pici cacio e pepe"] },
          { label: "Secondo", items: ["Parmigiana bianca di carciofi"] },
          { label: "Dolce", items: ["Mousse al cioccolato con panettone tostato"] },
        ],
      },
    ] as ChristmasMenu[],
  },
  en: {
    eyebrow: "Special menus & events",
    h1: "Christmas Lunch 2026 in Arezzo and its province",
    lede: "On 25 December, from 12:30, we open the Portale for a Tuscan Christmas lunch: cappelletti in capon broth, pici with truffle, duck porchetta. Also available as a vegetarian menu.",
    when: "25 December 2026 · from 12:30",
    included: "Included: our homemade bread, water, wine and coffee.",
    price: "€50 per person",
    kids: "Children under 12: €25",
    download: "Download the menu (PDF)",
    book: "Book on WhatsApp",
    call: "Call",
    eventsTitle: "Special menus all year round",
    eventsText: "Christmas, New Year's Eve, Valentine's Day, Easter and themed evenings: for every occasion our team creates a dedicated menu. Here you will always find the next event and its downloadable menu.",
    ctaEyebrow: "Special menus & events",
    ctaTitle: "Christmas at the Portale",
    ctaText: "Christmas lunch on 25 December from 12:30. Traditional or vegetarian menu, €50 per person, drinks included.",
    ctaButton: "Discover the Christmas menu",
    back: "Back to home",
    menus: [
      {
        name: "Christmas menu",
        courses: [
          { label: "Welcome", items: ["Sparkling wine with black cabbage meatball and potato cream"] },
          { label: "Starter", title: "Convivial Portale board", items: ["Tuscan ham, soppressata, finocchiona, artichoke flan, pappa al pomodoro, ribollita, Russian salad, pecorino with onion jam, chicken liver crostini with fried sage"] },
          { label: "Tasting of two first courses", items: ["Handmade cappelletti in capon broth", "Pici with white Cinta Senese ragù and truffle"] },
          { label: "Main course with side", title: "Duck porchetta", items: ["with roast potatoes and marinated savoy cabbage"] },
          { label: "Dessert", items: ["Chocolate mousse with toasted panettone"] },
        ],
      },
      {
        name: "Vegetarian menu",
        courses: [
          { label: "Welcome", items: ["Welcome sparkling wine with black cabbage croquette and velvety potato cream"] },
          { label: "Convivial vegetarian starter", items: ["Pappa al pomodoro, ribollita, artichoke flan, Tuscan pecorino with onion jam, crostino with potato cream and Taggiasca olive, crostino with chickpea hummus and rosemary, carrot frittatina"] },
          { label: "First courses", items: ["Pumpkin and potato velouté with toasted bread", "Pici cacio e pepe"] },
          { label: "Main course", items: ["White artichoke parmigiana"] },
          { label: "Dessert", items: ["Chocolate mousse with toasted panettone"] },
        ],
      },
    ] as ChristmasMenu[],
  },
};

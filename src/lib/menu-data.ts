/**
 * Menu di agosto 2026 — trascritto dal PDF ufficiale.
 * Struttura pensata per essere mappata 1:1 su un futuro CMS.
 */

export interface MenuItem {
  it: string;
  en: string;
  descIt?: string;
  descEn?: string;
  price?: string;
  allergens?: number[];
  note?: boolean;
}

export interface MenuSection {
  id: string;
  it: string;
  en: string;
  items: MenuItem[];
}

export const menuIntro = {
  it: "Benvenuti in un luogo ricco di storia, oggi guidato da una gestione tutta al femminile che celebra la Toscana attraverso una cucina curata e contemporanea. Dal pane fatto in casa alle preparazioni più tecniche, ogni piatto nasce da una ricerca attenta delle materie prime e dal rispetto della tradizione. A completare l'esperienza, una cantina selezionata, i nostri cocktail e, per chi ama la convivialità, le pizze artigianali realizzate con farine macinate a pietra e cotte nel forno a legna.",
  en: "Welcome to a place rich in history, now led by an all-female team celebrating Tuscany through refined, contemporary cuisine. From our homemade bread to our most technical preparations, each dish reflects a careful selection of ingredients and a deep respect for tradition. To complete the experience, a thoughtfully curated wine list, our signature cocktails and, for those who appreciate convivial dining, artisanal pizzas made with stone-ground flours and baked in a traditional wood-fired oven.",
  claimIt: "Passione, qualità e accoglienza, nel cuore della Toscana.",
  claimEn: "Passion, quality and hospitality, in the heart of Tuscany.",
};

export const menuSections: MenuSection[] = [
  {
    id: "aperitivi",
    it: "Proposte dedicate per aperitivi",
    en: "Aperitif selections",
    items: [
      {
        it: "Polpettine di melanzane",
        en: "Eggplant croquettes",
        descIt: "con maionese fatta in casa",
        descEn: "with homemade mayonnaise",
        price: "5",
        allergens: [1, 3, 7],
      },
      {
        it: "Hummus di ceci",
        en: "Chickpea hummus",
        descIt: "con chips di pane alla paprika",
        descEn: "served with paprika bread chips",
        price: "6",
        allergens: [1],
      },
      {
        it: "Crostone ai peperoni",
        en: "Toasted bread with bell pepper cream",
        descIt: "e acciughe del Cantabrico",
        descEn: "and Cantabrian anchovies",
        price: "6",
        allergens: [1, 4],
      },
      {
        it: "Mini bruschetta",
        en: "Bruschetta",
        descIt: "con bufala e olive taggiasche",
        descEn: "with buffalo mozzarella and Taggiasca olives",
        price: "8",
        allergens: [1, 7],
      },
      {
        it: "Crostino nero e salvia fritta",
        en: "Tuscan chicken liver pâté crostino",
        descIt: "la ricetta della tradizione toscana",
        descEn: "with fried sage",
        price: "6",
        allergens: [1, 4, 9, 12],
      },
      {
        it: "Mini tartare di Chianina",
        en: "Chianina beef tartare",
        descIt: "con fior di capperi e perle di balsamico",
        descEn: "with caper flowers and balsamic pearls",
        price: "8",
        allergens: [12],
      },
    ],
  },
  {
    id: "antipasti",
    it: "Antipasti",
    en: "Starters",
    items: [
      {
        it: "Tagliere «Antico Portale» (per 2 persone)",
        en: "«Antico Portale» board (for 2)",
        descIt:
          "Selezione di salumi toscani con prosciutto crudo DOP, coppa, soppressata e salsiccia stagionata, pecorino toscano, crostino nero e panzanella al pomodoro",
        descEn:
          "Selection of Tuscan cured meats with PDO ham, coppa, soppressata and aged sausage, Tuscan pecorino, black crostini and traditional bread salad",
        price: "22",
        allergens: [1, 4, 7, 9, 12],
      },
      {
        it: "Tagliere vegetariano",
        en: "Vegetarian board",
        descIt:
          "Crostini della tradizione, pecorino toscano, panzanella e sformatino di verdure con fonduta di pecorino",
        descEn:
          "Traditional Tuscan crostini, Tuscan pecorino, bread salad and vegetable flan with pecorino fondue",
        price: "18",
        allergens: [1, 3, 7, 9],
      },
      {
        it: "Uovo croccante",
        en: "Crispy egg",
        descIt: "su fonduta di pecorino, erba cipollina, tartufo nero e perle di pomodoro",
        descEn: "on pecorino fondue, chives, black truffle and tomato pearls",
        price: "16",
        allergens: [1, 3, 7],
      },
      {
        it: "Carpaccio di carne salada",
        en: "Carne salada carpaccio",
        descIt: "con vinaigrette, rucola e scaglie di grana",
        descEn: "with vinaigrette, rocket and shaved Grana",
        price: "17",
        allergens: [7],
      },
      {
        it: "Bao toscano",
        en: "Tuscan bao bun",
        descIt: "panino al vapore con maiale sfilacciato, crema di pecorino e cipolla caramellata",
        descEn: "steamed bun with pulled pork, pecorino cream and caramelised onion",
        price: "13",
        allergens: [1, 7],
      },
      {
        it: "Tartare di fassona",
        en: "Fassona beef tartare",
        descIt: "con maionese al tartufo, cialda di riso e capperi fritti",
        descEn: "with truffle mayonnaise, crispy rice wafer and fried capers",
        price: "18",
        allergens: [3, 7],
      },
    ],
  },
  {
    id: "primi",
    it: "Primi",
    en: "First courses",
    items: [
      {
        it: "Risotto",
        en: "Risotto",
        descIt: "con crema di datterini gialli, crema di pecorino e crumble di taralli",
        descEn: "with yellow datterino cream, pecorino cream and taralli crumble",
        price: "16",
        allergens: [1, 7],
      },
      {
        it: "Pici al ragù bianco di Cinta Senese",
        en: "Pici with white Cinta Senese pork ragù",
        price: "16",
        allergens: [1, 9, 12],
      },
      {
        it: "Tortelli ripieni di anatra",
        en: "Duck-filled tortelli",
        descIt: "con il suo fondo",
        descEn: "with its own jus",
        price: "18",
        allergens: [1, 3, 7, 9],
      },
      {
        it: "Tortello gigante",
        en: "Giant tortello",
        descIt: "ripieno di ricotta e tartufo su fonduta di pecorino",
        descEn: "filled with ricotta and truffle, on pecorino fondue",
        price: "18",
        allergens: [1, 3, 7],
      },
      {
        it: "Fusilloni ai tre pomodori",
        en: "Fusilloni with three tomatoes",
        descIt: "con olio al basilico fresco",
        descEn: "with fresh basil oil",
        price: "14",
        allergens: [1],
      },
      {
        it: "Spaghettone allo zafferano",
        en: "Saffron spaghettone",
        descIt: "con crumble di pancetta e scaglie di pecorino al fieno",
        descEn: "with crispy pancetta and hay-aged pecorino shavings",
        price: "16",
        allergens: [1, 7],
      },
    ],
  },
  {
    id: "secondi",
    it: "Secondi",
    en: "Main courses",
    items: [
      {
        it: "Tagliata di controfiletto",
        en: "Sliced sirloin steak",
        descIt: "bietoline fresche, olio EVO e sale Maldon",
        descEn: "fresh swiss chard, extra virgin olive oil and Maldon sea salt",
        price: "23",
      },
      {
        it: "Petto d'anatra",
        en: "Duck breast",
        descIt: "con fondo ristretto, cavolo stufato in agrodolce e mela",
        descEn: "with reduced jus, sweet and sour braised cabbage and apple",
        price: "22",
        allergens: [9],
      },
      {
        it: "Rollé di sovracoscia di pollo",
        en: "Rolled chicken thigh",
        descIt: "con peperoni arrosto in doppia consistenza",
        descEn: "with roasted peppers in two textures",
        price: "17",
      },
      {
        it: "Hamburger di Chianina",
        en: "Chianina beef burger",
        descIt: "con il suo panino, pomodoro, insalata, cetriolini, pecorino e pancetta croccante",
        descEn: "in a bun with tomato, lettuce, pickles, pecorino e pancetta croccante",
        price: "14",
        allergens: [1, 7],
      },
      {
        it: "Coniglio croccante",
        en: "Crispy rabbit",
        descIt: "con senape e crema di carote",
        descEn: "with mustard and carrot cream",
        price: "19",
        allergens: [1, 3, 7, 10],
      },
      {
        it: "Bistecca alla Fiorentina",
        en: "Florentine T-bone steak",
        descIt: "alla brace, min. 1 kg",
        descEn: "grilled over charcoal, min. 1 kg",
        price: "5,5 / 100g",
      },
    ],
  },
  {
    id: "contorni",
    it: "Contorni",
    en: "Side dishes",
    items: [
      { it: "Patate al forno con la buccia", en: "Roasted skin-on potatoes", price: "6" },
      {
        it: "Fritto croccante di verdure di stagione",
        en: "Crispy fried seasonal vegetables",
        price: "8",
        allergens: [1],
      },
      { it: "Verdure miste grigliate", en: "Grilled seasonal vegetables", price: "7" },
      { it: "Selezione di insalatine fresche di stagione", en: "Mixed seasonal salad", price: "6" },
      { it: "Patatine rustiche fritte*", en: "Rustic fries*", price: "6" },
    ],
  },
  {
    id: "dolci",
    it: "Dolci",
    en: "Dessert",
    items: [
      { it: "Crema catalana", en: "Crème brûlée", price: "6", allergens: [3, 7] },
      {
        it: "Tiramisù al nostro limoncello",
        en: "Tiramisù with our homemade limoncello",
        price: "8",
        allergens: [3, 7, 12],
      },
      {
        it: "Tortino al cioccolato caldo*",
        en: "Warm chocolate lava cake*",
        descIt: "con gelato alla vaniglia",
        descEn: "with vanilla ice cream",
        price: "8",
        allergens: [3, 7],
      },
      {
        it: "Semifreddo al cioccolato bianco",
        en: "White chocolate parfait",
        descIt: "con caramello salato e pere",
        descEn: "with salted caramel and pears",
        price: "8",
        allergens: [3, 7],
      },
      {
        it: "Waffle",
        en: "Waffle",
        descIt: "con crema al mascarpone e frutti di bosco",
        descEn: "with mascarpone cream and mixed berries",
        price: "8",
        allergens: [1, 3, 7],
      },
      { it: "Sorbetto del giorno*", en: "Daily sorbet*", price: "6" },
    ],
  },
];

export const allergensList: { n: number; it: string; en: string }[] = [
  { n: 1, it: "Glutine", en: "Gluten" },
  { n: 2, it: "Crostacei", en: "Crustaceans" },
  { n: 3, it: "Uova", en: "Eggs" },
  { n: 4, it: "Pesce", en: "Fish" },
  { n: 5, it: "Arachidi", en: "Peanuts" },
  { n: 6, it: "Soia", en: "Soy" },
  { n: 7, it: "Latte", en: "Milk" },
  { n: 8, it: "Frutta a guscio", en: "Nuts" },
  { n: 9, it: "Sedano", en: "Celery" },
  { n: 10, it: "Senape", en: "Mustard" },
  { n: 11, it: "Sesamo", en: "Sesame" },
  { n: 12, it: "Solfiti", en: "Sulphites" },
  { n: 13, it: "Lupini", en: "Lupin" },
  { n: 14, it: "Molluschi", en: "Molluscs" },
];

export const menuNotes = {
  coverIt: "Coperto € 3",
  coverEn: "Cover charge € 3",
  frozenIt:
    "* Alcuni prodotti potrebbero essere surgelati all'origine o preparati in loco e successivamente abbattuti per garantire qualità e sicurezza alimentare.",
  frozenEn:
    "* Some products may be frozen at origin or prepared on site and subsequently blast-chilled to ensure quality and food safety.",
};

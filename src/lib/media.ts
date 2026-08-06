import heroPortale from "@/assets/hero-portale.jpg.asset.json";
import patio from "@/assets/patio.png.asset.json";
import esternoSpazio from "@/assets/esterno-spazio.jpg.asset.json";
import giardino from "@/assets/giardino.jpg.asset.json";
import locationEsterna from "@/assets/location-esterna.jpg.asset.json";
import salaInterna from "@/assets/sala-interna.jpeg.asset.json";
import piattoPrincipale from "@/assets/piatto-principale.jpg.asset.json";
import dessert from "@/assets/dessert.png.asset.json";
import risotto from "@/assets/risotto.jpg.asset.json";
import bao1 from "@/assets/bao-1.png.asset.json";
import bao2 from "@/assets/bao-2.jpg.asset.json";
import piattoGourmet from "@/assets/piatto-gourmet.jpg.asset.json";
import pesce from "@/assets/pesce.jpg.asset.json";
import bistecca from "@/assets/bistecca.jpg.asset.json";
import paneMani from "@/assets/pane-mani.jpg.asset.json";
import pane from "@/assets/pane.jpg.asset.json";
import cocktailHero from "@/assets/cocktail-hero.jpg.asset.json";
import terrazza1 from "@/assets/terrazza-1.jpg.asset.json";
import terrazza2 from "@/assets/terrazza-2.jpg.asset.json";
import drink from "@/assets/drink.png.asset.json";
import aperitivoTerrazza from "@/assets/aperitivo-terrazza.jpg.asset.json";
import brigataTeam from "@/assets/brigata-team.jpg.asset.json";
import michaela from "@/assets/michaela.jpg.asset.json";
import simona from "@/assets/simona.jpg.asset.json";
import ionela from "@/assets/ionela.jpg.asset.json";

/**
 * Mappa immagini → campi CMS.
 * Ogni chiave corrisponde a un campo sostituibile dal pannello di gestione.
 * I campi con `url: null` attendono il nuovo shooting fotografico.
 */
export const media = {
  HERO_MAIN: heroPortale.url,
  ANCIENT_PORTAL: heroPortale.url,
  HOT_BREAD: paneMani.url,
  BREAD_TABLE: pane.url,
  HANDMADE_PASTA: piattoPrincipale.url,
  TUSCAN_BAO: bao1.url,
  TUSCAN_BAO_ALT: bao2.url,
  DISH_DETAIL_01: risotto.url,
  DISH_DETAIL_02: piattoGourmet.url,
  DISH_FISH: pesce.url,
  DISH_STEAK: bistecca.url,
  DESSERT: dessert.url,
  COCKTAIL_MAIN: cocktailHero.url,
  TERRACE_01: terrazza1.url,
  TERRACE_02: terrazza2.url,
  DRINK_DETAIL: drink.url,
  TABLE_EXPERIENCE: aperitivoTerrazza.url,
  COURTYARD: patio.url,
  WOODS_EXTERIOR: giardino.url,
  OUTDOOR_SPACE: esternoSpazio.url,
  EXTERIOR_DAY: locationEsterna.url,
  DINING_ROOM: salaInterna.url,
} as const;

/** Campi predisposti per il nuovo shooting — attualmente segnaposto editoriali. */
export const pendingShoot = [
  "HERO_TEAM",
  "TEAM_GROUP",
  "PORTRAIT_01",
  "PORTRAIT_02",
  "PORTRAIT_03",
  "PORTRAIT_04",
  "CHEF_RAGU",
  "CHEF_PORTRAIT",
  "KITCHEN_TEAM",
  "WELCOME_GUEST",
  "SERVICE_DETAIL",
] as const;

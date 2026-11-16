import type { Drink, LocalizedText, WineCategory } from './types';

export const wineCategoryLabels: Record<WineCategory, LocalizedText> = {
  glass: {
    it: 'Vino della Casa',
    en: 'House Wine',
  },
  sparkling: {
    it: 'Spumanti',
    en: 'Sparkling Wines',
  },
  white: {
    it: 'Vini Bianchi',
    en: 'White Wines',
  },
  red: {
    it: 'Vini Rossi',
    en: 'Red Wines',
  },
  rose: {
    it: 'Vini Rosati',
    en: 'Rosé Wines',
  },
  dessert: {
    it: 'Vini da Dessert',
    en: 'Dessert Wines',
  },
  beer: {
    it: 'Birre alla Spina & in Bottiglia',
    en: 'Draft & Bottled Beers',
  },
  soft: {
    it: 'Bibite & Acqua Minerale',
    en: 'Soft Drinks & Water',
  },
  coffee: {
    it: 'Caffetteria & Amari',
    en: 'Coffee & Digestifs',
  },
  aperitivo: {
    it: 'Aperitivi & Spritz',
    en: 'Aperitifs & Spritz',
  },
};

export const drinksData: Drink[] = [
  // ── VINI BIANCHI (PDF Pag. 9) ──
  {
    id: 'wht-1',
    category: 'white',
    name: 'Falanghina',
    price: '€20,00',
  },
  {
    id: 'wht-2',
    category: 'white',
    name: 'Greco di Tufo',
    price: '€20,00',
  },
  {
    id: 'wht-3',
    category: 'white',
    name: 'Vermentino',
    price: '€22,00',
  },
  {
    id: 'wht-4',
    category: 'white',
    name: 'Chardonnay',
    price: '€20,00',
  },
  {
    id: 'wht-5',
    category: 'white',
    name: 'Sauvignon',
    price: '€20,00',
  },
  {
    id: 'wht-6',
    category: 'white',
    name: 'Pinot Nero',
    price: '€22,00',
  },
  {
    id: 'wht-7',
    category: 'white',
    name: 'Rosato',
    price: '€20,00',
  },
  {
    id: 'wht-8',
    category: 'white',
    name: "Fiano d'Avellino - San Nicola",
    price: '€20,00',
  },
  {
    id: 'wht-9',
    category: 'white',
    name: 'Sannino Greco - Janare',
    price: '€20,00',
  },

  // ── VINI ROSSI (PDF Pag. 9) ──
  {
    id: 'red-1',
    category: 'red',
    name: 'Chianti Riserva DOCG',
    region: 'Toscana',
    price: '€21,00',
  },
  {
    id: 'red-2',
    category: 'red',
    name: 'Valpolicella DOC',
    region: 'Veneto',
    price: '€22,00',
  },
  {
    id: 'red-3',
    category: 'red',
    name: "Barbera d'Alba DOC",
    region: 'Piemonte',
    price: '€20,00',
  },
  {
    id: 'red-4',
    category: 'red',
    name: "Barbera d'Asti DOCG",
    region: 'Asti',
    price: '€20,00',
  },
  {
    id: 'red-5',
    category: 'red',
    name: 'Primitivo DOP',
    region: 'Puglia',
    price: '€20,00',
  },
  {
    id: 'red-6',
    category: 'red',
    name: 'Irpinia Aglianico DOC',
    region: 'Avellino',
    price: '€20,00',
  },
  {
    id: 'red-barolo',
    category: 'red',
    name: 'Barolo',
    price: '€35,00',
  },
  {
    id: 'red-7',
    category: 'red',
    name: "Nero d'Avola",
    price: '€23,00',
  },
  {
    id: 'red-8',
    category: 'red',
    name: "Dolcetto d'Alba",
    price: '€20,00',
  },
  {
    id: 'red-9',
    category: 'red',
    name: 'Bonarda Frizzante - Le Cascine',
    price: '€20,00',
  },
  {
    id: 'red-amarone',
    category: 'red',
    name: 'Amarone di Valpolicella',
    price: '€40,00',
  },

  // ── SPUMANTI (PDF Pag. 9) ──
  {
    id: 'spk-1',
    category: 'sparkling',
    name: 'Valdobbiadene - Bortolomiol',
    price: '€25,00',
    image: '/images/wine/wine-cellar-tre-fratelli.jpg',
  },
  {
    id: 'spk-2',
    category: 'sparkling',
    name: 'Spumante Rosé - Vigneti Puglia',
    price: '€18,00',
  },

  // ── BEVANDE (PDF Pag. 10, exact order) ──
  {
    id: 'sft-1',
    category: 'soft',
    name: 'Bibita in vetro - Coca-Cola / Coca-Cola Zero / Fanta / Sprite',
    price: '€3,50',
  },
  {
    id: 'sft-2',
    category: 'soft',
    name: 'Bibita lattina 33 cl - Coca-Cola / Coca-Cola Zero / Fanta / Sprite',
    price: '€2,50',
  },
  {
    id: 'cff-1',
    category: 'coffee',
    name: 'Caffè',
    price: '€1,50',
  },
  {
    id: 'sft-3',
    category: 'soft',
    name: 'Acqua 75 cl',
    price: '€4,00',
  },
  {
    id: 'gls-1',
    category: 'glass',
    name: 'Vino della Casa Rosso / Bianco 1/4 litro',
    price: '€3,00',
  },
  {
    id: 'gls-2',
    category: 'glass',
    name: 'Vino della Casa Rosso / Bianco - 1/2 litro',
    price: '€6,00',
  },
  {
    id: 'gls-3',
    category: 'glass',
    name: 'Vino della Casa Rosso / Bianco - 1 litro',
    price: '€12,00',
  },
  {
    id: 'ber-1',
    category: 'beer',
    name: 'Birra alla Spina Piccola',
    price: '€3,00',
  },
  {
    id: 'ber-2',
    category: 'beer',
    name: 'Birra alla Spina Media',
    price: '€5,00',
  },
  {
    id: 'ber-3',
    category: 'beer',
    name: 'Birra alla Spina Rossa 20 cl',
    price: '€4,00',
  },
  {
    id: 'ber-4',
    category: 'beer',
    name: 'Birra alla Spina Rossa 40 cl',
    price: '€7,00',
  },
  {
    id: 'ber-5',
    category: 'beer',
    name: 'Moretti bottiglia 66 cl',
    price: '€4,00',
  },
  {
    id: 'ber-6',
    category: 'beer',
    name: 'Weissbier',
    price: '€6,00',
  },
  {
    id: 'ber-7',
    category: 'beer',
    name: 'Ichnusa non filtrata',
    price: '€6,00',
  },
  {
    id: 'cff-2',
    category: 'coffee',
    name: 'Amari',
    price: '€4,00',
  },
  {
    id: 'sft-4',
    category: 'soft',
    name: 'Acqua 50 cl',
    price: '€2,00',
  },
  {
    id: 'ber-8',
    category: 'beer',
    name: 'Birra Menabrea Strong Biella 33 cl, alc. 8%',
    price: '€6,00',
  },
  {
    id: 'ber-9',
    category: 'beer',
    name: 'Birra Doppio Malto Rossa, alc. 7,5% vol.',
    price: '€6,00',
  },
  {
    id: 'ber-10',
    category: 'beer',
    name: 'Franziskaner Weissbier',
    price: '€7,00',
  },
  {
    id: 'ape-1',
    category: 'aperitivo',
    name: 'Aperol Spritz',
    price: '€6,00',
  },
  {
    id: 'ape-2',
    category: 'aperitivo',
    name: 'Aperol Campari',
    price: '€6,00',
  },
];

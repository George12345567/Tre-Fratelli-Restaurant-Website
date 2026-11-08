import type { Drink, LocalizedText, WineCategory } from './types';

export const wineCategoryLabels: Record<WineCategory, LocalizedText> = {
  glass: {
    it: 'Vino della Casa',
    en: 'House Wine',
    ar: 'نبيذ الدار',
  },
  sparkling: {
    it: 'Spumanti',
    en: 'Sparkling Wines',
    ar: 'النبيذ الفوار',
  },
  white: {
    it: 'Vini Bianchi',
    en: 'White Wines',
    ar: 'النبيذ الأبيض',
  },
  red: {
    it: 'Vini Rossi',
    en: 'Red Wines',
    ar: 'النبيذ الأحمر',
  },
  rose: {
    it: 'Vini Rosati',
    en: 'Rosé Wines',
    ar: 'النبيذ الوردي',
  },
  dessert: {
    it: 'Vini da Dessert',
    en: 'Dessert Wines',
    ar: 'نبيذ الحلوى',
  },
  beer: {
    it: 'Birre alla Spina & in Bottiglia',
    en: 'Draft & Bottled Beers',
    ar: 'البيرة على الصنبور وفي زجاجات',
  },
  soft: {
    it: 'Bibite & Acqua Minerale',
    en: 'Soft Drinks & Water',
    ar: 'المشروبات الغازية والمياه',
  },
  coffee: {
    it: 'Caffetteria & Amari',
    en: 'Coffee & Digestifs',
    ar: 'القهوة والمشروبات الهضمية',
  },
};

export const drinksData: Drink[] = [
  // ── SPUMANTI (PDF Pag. 9) ──
  {
    id: 'spk-1',
    category: 'sparkling',
    name: 'Valdobbiadene - Bortolomiol',
    region: 'Veneto D.O.C.G.',
    price: '€25,00',
    image: '/images/wine/wine-cellar-tre-fratelli.jpg',
  },
  {
    id: 'spk-2',
    category: 'sparkling',
    name: 'Spumante Rosé - Vigneti Puglia',
    region: 'Puglia',
    price: '€18,00',
  },

  // ── VINI BIANCHI (PDF Pag. 9) ──
  {
    id: 'wht-1',
    category: 'white',
    name: 'Falanghina',
    region: 'Campania',
    price: '€20,00',
  },
  {
    id: 'wht-2',
    category: 'white',
    name: 'Greco di Tufo',
    region: 'Campania',
    price: '€20,00',
  },
  {
    id: 'wht-3',
    category: 'white',
    name: 'Vermentino di San Santo',
    region: 'Sardegna',
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
    region: 'Campania',
    price: '€20,00',
  },
  {
    id: 'wht-9',
    category: 'white',
    name: 'Sannino Greco - Janare',
    region: 'Campania',
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
    name: 'Irpinia Aglianico DOC Barolo',
    region: 'Avellino',
    price: '€35,00',
  },
  {
    id: 'red-7',
    category: 'red',
    name: "Nero d'Avola",
    region: 'Sicilia',
    price: '€23,00',
  },
  {
    id: 'red-8',
    category: 'red',
    name: "Dolcetto d'Alba",
    region: 'Piemonte',
    price: '€20,00',
  },
  {
    id: 'red-9',
    category: 'red',
    name: 'Bonarda Frizzante - Le Cascine',
    price: '€20,00',
  },
  {
    id: 'red-10',
    category: 'red',
    name: 'Taurasi D.O.C.G. - Urciolo',
    region: 'Campania',
    price: '€45,00',
  },
  {
    id: 'red-11',
    category: 'red',
    name: 'Magliuolo - Casavecchia',
    price: '€18,00',
  },
  {
    id: 'red-12',
    category: 'red',
    name: 'Lacryma Christi - Nocerino',
    region: 'Campania',
    price: '€18,00',
  },
  {
    id: 'red-13',
    category: 'red',
    name: 'Pompeiano Frizzante - Agustea',
    region: 'Campania',
    price: '€18,00',
  },

  // ── BEVANDE: Bibite & Acqua (PDF Pag. 10) ──
  {
    id: 'sft-1',
    category: 'soft',
    name: 'Bibita in vetro (Coca Cola / Coca Zero / Fanta / Sprite)',
    price: '€3,50',
  },
  {
    id: 'sft-2',
    category: 'soft',
    name: 'Bibita lattina 33 cl (Coca Cola / Coca Zero / Fanta / Sprite)',
    price: '€2,50',
  },
  {
    id: 'sft-3',
    category: 'soft',
    name: 'Acqua minerale 75 cl',
    price: '€4,00',
  },
  {
    id: 'sft-4',
    category: 'soft',
    name: 'Acqua minerale 50 cl',
    price: '€2,00',
  },

  // ── BEVANDE: Vino della Casa (PDF Pag. 10) ──
  {
    id: 'gls-1',
    category: 'glass',
    name: 'Vino della Casa Rosso / Bianco (1/4 litro)',
    price: '€3,00',
  },
  {
    id: 'gls-2',
    category: 'glass',
    name: 'Vino della Casa Rosso / Bianco (1/2 litro)',
    price: '€6,00',
  },
  {
    id: 'gls-3',
    category: 'glass',
    name: 'Vino della Casa Rosso / Bianco (1 litro)',
    price: '€12,00',
  },

  // ── BEVANDE: Birre alla Spina & in Bottiglia (PDF Pag. 10) ──
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
    name: 'Birra alla Spina Rossa (20 cl)',
    price: '€4,00',
  },
  {
    id: 'ber-4',
    category: 'beer',
    name: 'Birra alla Spina Rossa (40 cl)',
    price: '€7,00',
  },
  {
    id: 'ber-5',
    category: 'beer',
    name: 'Moretti bottiglia (66 cl)',
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
    id: 'ber-8',
    category: 'beer',
    name: 'Birra Menabrea Strong Biella (33 cl, alc. 8%)',
    price: '€6,00',
  },
  {
    id: 'ber-9',
    category: 'beer',
    name: 'Birra Doppio Malto Rossa (alc. 7,5% vol.)',
    price: '€6,00',
  },
  {
    id: 'ber-10',
    category: 'beer',
    name: 'Franziskaner Weissbier',
    price: '€7,00',
  },

  // ── BEVANDE: Caffetteria & Amari (PDF Pag. 10) ──
  {
    id: 'cff-1',
    category: 'coffee',
    name: 'Caffè',
    price: '€1,50',
  },
  {
    id: 'cff-2',
    category: 'coffee',
    name: 'Amari',
    price: '€4,00',
  },
];

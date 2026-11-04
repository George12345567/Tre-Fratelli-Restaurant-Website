import type { Dish } from '../types';

export const dessertDishes: Dish[] = [
  {
    id: 'des-1',
    category: 'Desserts',
    name: {
      it: 'Tiramisù Tradizionale Tre Fratelli',
      en: 'Tre Fratelli Housemade Tiramisù',
      ar: 'تيراميسو تري فراتيلي التراثي الفاخر',
    },
    description: {
      it: 'Savoiardi sardi bagnati nell’espresso tostato a legna, morbida crema al mascarpone, zabaione al Marsala e cacao amaro.',
      en: 'Sardinian ladyfingers soaked in wood-roasted espresso, velvety mascarpone cream, hint of Marsala, and bitter cocoa.',
      ar: 'بسكويت سافوياردي مشرب بإسبريسو الحطب، كريمة ماسكاربوني المخملية، رشة مارسالا، وبودرة الكاكاو المرة.',
    },
    price: '€10,00',
    tags: ['signature', 'dessert', 'vegetarian'],
    allergens: ['1 - Glutine', '3 - Uova', '7 - Latte'],
    image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'des-2',
    category: 'Desserts',
    name: {
      it: 'Panna Cotta alla Vaniglia Bourbon con Frutti di Bosco',
      en: 'Bourbon Vanilla Panna Cotta with Wild Berries',
      ar: 'بان كوتا فانيليا البوربون مع التوت البري الدافئ',
    },
    description: {
      it: 'Crema cotta vellutata con bacche di vaniglia del Madagascar e coulis caldo di lamponi e mirtilli selvatici.',
      en: 'Silky cream infused with Madagascar bourbon vanilla bean, served with warm wild raspberry and blueberry coulis.',
      ar: 'كريمة مطهوة ناعمة كالحرير بنكهة حبوب فانيليا مدغشقر، مع صلصة التوت والكرز البري الدافئة.',
    },
    price: '€9,00',
    tags: ['dessert', 'vegetarian'],
    allergens: ['7 - Latte'],
    image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'des-3',
    category: 'Desserts',
    name: {
      it: 'Cannolo Siciliano Scomposto con Pistacchio di Bronte',
      en: 'Deconstructed Sicilian Cannolo with Bronte Pistachio',
      ar: 'كانولو صقلي مفتت مع فستق برونتي الفاخر',
    },
    description: {
      it: 'Cialda croccante al cacao e cannella, ricotta di pecora zuccherata, gocce di cioccolato di Modica e granella di pistacchio.',
      en: 'Crispy cinnamon-cocoa wafer shards, sweetened sheep milk ricotta, Modica chocolate drops, and Bronte pistachio crumbs.',
      ar: 'رقائق كانولو مقرمشة بالقرفة والكاكاو، ريكوتا الأغنام الطازجة، شوكولاتة موديكا، وفستق برونتي الصقلي الأخضر.',
    },
    price: '€11,00',
    tags: ['dessert', 'vegetarian'],
    allergens: ['1 - Glutine', '7 - Latte', '8 - Frutta a guscio'],
    image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&q=80&w=800',
  },
];

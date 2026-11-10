import type { LocalizedText } from './types';

export const kitchenStory = {
  eyebrow: {
    it: 'Dentro la nostra cucina',
    en: 'Inside our kitchen',
  },
  title: {
    it: 'Le cose buone cominciano molto prima del piatto.',
    en: 'Good food starts long before it reaches the table.',
  },
  intro: {
    it: 'Scegliere bene, dare tempo agli impasti, seguire il fuoco. In cucina ci piacciono le cose fatte con cura, quelle che poi ritrovi al primo assaggio.',
    en: 'Choosing good ingredients, giving dough time to rest, tending the fire. These are the small things we care about in the kitchen, and hope you taste at the table.',
  },
  signature: {
    it: 'Tre Fratelli · A tavola, insieme.',
    en: 'Tre Fratelli · Come share a table.',
  },
} satisfies Record<string, LocalizedText>;

export const kitchenStorySteps: {
  id: string;
  title: LocalizedText;
  description: LocalizedText;
}[] = [
  {
    id: 'ingredients',
    title: {
      it: 'Si parte dagli ingredienti.',
      en: 'It starts with the ingredients.',
    },
    description: {
      it: 'Un buon taglio di carne non ha bisogno di molto. Lo scegliamo con attenzione e lo prepariamo lasciando spazio al suo sapore.',
      en: 'A good cut of meat needs little fuss. We choose it carefully and prepare it so its own flavour comes through.',
    },
  },
  {
    id: 'time',
    title: {
      it: 'Il tempo è un ingrediente, anche lui.',
      en: 'Time is an ingredient, too.',
    },
    description: {
      it: 'La pasta, gli impasti, l’attesa prima di infornare. Ci sono passaggi che non si possono affrettare: è lì che prendono forma consistenza e carattere.',
      en: 'Making pasta, working the dough, letting it rest before the oven. Some things are better left unhurried. That is where texture and character take shape.',
    },
  },
  {
    id: 'fire',
    title: {
      it: 'Poi, la parola passa al fuoco.',
      en: 'Then we leave it to the fire.',
    },
    description: {
      it: 'La brace per la carne, il forno a legna per la pizza. Restiamo lì, a seguire la cottura, finché profumo e doratura ci dicono che è il momento di servire.',
      en: 'Embers for the meat, a wood-fired oven for the pizza. We stay close and watch the cooking, until the aroma and golden edges tell us it is ready to serve.',
    },
  },
];

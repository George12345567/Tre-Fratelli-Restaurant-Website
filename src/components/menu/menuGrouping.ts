import type { Dish, DishCategory, LocalizedText } from '@/data/types';

export interface MenuSubSection {
  id: string;
  title: LocalizedText;
  subtitle: LocalizedText;
  badge?: LocalizedText;
  dishes: Dish[];
}

export function groupDishesBySubSections(
  category: DishCategory,
  dishes: Dish[]
): MenuSubSection[] {
  switch (category) {
    case 'Antipasti': {
      const terra = dishes.filter((d) => d.id.startsWith('anti-terra'));
      const mare = dishes.filter((d) => !d.id.startsWith('anti-terra'));
      const sections: MenuSubSection[] = [];

      if (terra.length > 0) {
        sections.push({
          id: 'anti-terra',
          title: {
            it: 'Antipasti di Terra & Tradizione',
            en: 'Antipasti di Terra (Land & Tradition)',
          },
          subtitle: {
            it: 'Salumi artigianali, burrata pugliese, carpaccio di manzo e bruschette calde.',
            en: 'Artisan cold cuts, creamy burrata, beef carpaccio, and warm bruschette.',
          },
          dishes: terra,
        });
      }

      if (mare.length > 0) {
        sections.push({
          id: 'anti-mare',
          title: {
            it: 'Antipasti di Mare & Tradizione Marina',
            en: 'Seafood Starters & Coastal Tradition',
          },
          subtitle: {
            it: 'Zuppa di pesce ricca, impepata di cozze, polpo con patate e bruschette di mare.',
            en: 'Rich seafood soup, peppered mussels, tender octopus with potatoes, and seafood crostini.',
          },
          dishes: mare,
        });
      }

      return sections;
    }

    case 'Raw Seafood': {
      return [
        {
          id: 'raw-crudite',
          title: {
            it: 'Crudité di Mare, Ostriche & Tartare Fresche',
            en: 'Raw Bar, Fresh Oysters & Seafood Tartare',
          },
          subtitle: {
            it: 'Pescato crudo freschissimo servito su ghiaccio: ostriche, gamberi rossi di Mazara e carpacci marinati.',
            en: 'Pristine raw seafood on ice: shucked oysters, Mazara red prawns, and citrus-cured carpaccios.',
          },
          dishes,
        },
      ];
    }

    case 'Primi Piatti': {
      const crosta = dishes.filter(
        (d) =>
          d.id.includes('crosta') ||
          d.id.includes('paella')
      );
      const mare = dishes.filter(
        (d) =>
          d.id.startsWith('primi-mare') &&
          !d.id.includes('crosta') &&
          !d.id.includes('paella')
      );
      const terra = dishes.filter((d) => d.id.startsWith('primi-terra'));

      const sections: MenuSubSection[] = [];

      if (crosta.length > 0) {
        sections.push({
          id: 'primi-crosta',
          title: {
            it: 'Specialità al Forno, in Crosta di Pane & Paella',
            en: 'Baked in Crust Specialties & Seafood Paella',
          },
          subtitle: {
            it: 'Piatti monumentali cotti nel forno a legna sotto una cupola dorata di pane e paella tradizionale.',
            en: 'Showstopping pans baked inside a dome of wood-fired dough and traditional saffron paella.',
          },
          badge: {
            it: 'Specialità della Casa',
            en: 'House Specialty',
          },
          dishes: crosta,
        });
      }

      if (mare.length > 0) {
        sections.push({
          id: 'primi-mare',
          title: {
            it: 'Primi Piatti di Mare & Risotti dei Fratelli',
            en: 'Coastal Seafood Pasta & Rich Risotti',
          },
          subtitle: {
            it: 'Spaghetti allo scoglio, paccheri all’astice, spaghetti ricci e bottarga, e risotti mantecati.',
            en: 'Lobster paccheri, seafood spaghetti, sea urchin & bottarga, and Carnaroli risotti.',
          },
          dishes: mare,
        });
      }

      if (terra.length > 0) {
        sections.push({
          id: 'primi-terra',
          title: {
            it: 'Primi Piatti di Terra & Pasta all’Uovo',
            en: 'Handmade Land Pasta & Tuscan Risotti',
          },
          subtitle: {
            it: 'Carbonara con guanciale croccante, cacio e pepe con fico, pappardelle ai porcini e gnocchi.',
            en: 'Authentic Roman carbonara, porcini pappardelle, cacio e pepe with fig, and gnocchi.',
          },
          dishes: terra,
        });
      }

      return sections;
    }

    case 'Secondi Piatti': {
      const barche = dishes.filter((d) => d.id.startsWith('barca'));
      const terra = dishes.filter((d) => d.id.startsWith('sec-terra'));
      const pesce = dishes.filter(
        (d) => d.id.startsWith('sec-pesce') && !d.id.startsWith('barca')
      );

      const sections: MenuSubSection[] = [];

      if (barche.length > 0) {
        sections.push({
          id: 'sec-barche',
          title: {
            it: '🚢 Le Grandi Barche di 3 Fratelli',
            en: '🚢 The Grand Tre Fratelli Seafood Ships',
          },
          subtitle: {
            it: 'I trionfali vascelli carichi di astici, grigliate di crostacei, ostriche e fritti misti per grandi tavolate.',
            en: 'Monumental carved boat centerpieces loaded with whole lobsters, grilled catch, oysters, and fritto misto.',
          },
          badge: {
            it: 'Icone del Ristorante',
            en: 'Restaurant Icons',
          },
          dishes: barche,
        });
      }

      if (terra.length > 0) {
        sections.push({
          id: 'sec-terra',
          title: {
            it: 'Carni Pregiate & Brace Viva di Quercia',
            en: 'Prime Butcher Cuts & Oak Charcoal Grill',
          },
          subtitle: {
            it: 'Fiorentina da 1kg, orecchia d’elefante gigante con burrata e pistacchio, tagliate e filetti.',
            en: '1 kg Florentine T-bone, giant elephant-ear schnitzel, sirloin tagliate, and tenderloin medallions.',
          },
          dishes: terra,
        });
      }

      if (pesce.length > 0) {
        sections.push({
          id: 'sec-pesce',
          title: {
            it: 'Pescato Fresco del Giorno & Fritture Dorate',
            en: 'Fresh Catch of the Day & Golden Crispy Fritto',
          },
          subtitle: {
            it: 'Grigliate miste di mare, astice alla catalana, branzino sotto sale e fritto misto di pesce.',
            en: 'Grilled mixed seafood catch, lobster alla catalana, salt-crusted sea bass, and fritto misto.',
          },
          dishes: pesce,
        });
      }

      return sections;
    }

    case 'Pizza & Calzoni': {
      const formule = dishes.filter(
        (d) => d.id === 'piz-metro' || d.id === 'piz-giro'
      );
      const consiglio = dishes.filter(
        (d) =>
          d.id.startsWith('piz-gourmet') ||
          d.id === 'piz-burratina' ||
          d.id === 'piz-mortadella-pistacchio' ||
          d.id === 'piz-fiori-zucca' ||
          d.id === 'piz-bufalina'
      );
      const mare = dishes.filter(
        (d) =>
          d.id.startsWith('piz-mare') ||
          d.id === 'piz-frutti-mare' ||
          d.id === 'piz-polipina' ||
          d.id === 'piz-mare-monti' ||
          d.id === 'piz-calamari' ||
          d.id === 'piz-salmone' ||
          d.id === 'piz-asparagi-gamberi' ||
          d.id === 'piz-tonno-cipolla'
      );
      const focCalz = dishes.filter(
        (d) => d.id.startsWith('foc-') || d.id.startsWith('calz-')
      );
      const classiche = dishes.filter(
        (d) =>
          !formule.includes(d) &&
          !consiglio.includes(d) &&
          !mare.includes(d) &&
          !focCalz.includes(d)
      );

      const sections: MenuSubSection[] = [];

      if (formule.length > 0) {
        sections.push({
          id: 'piz-formule',
          title: {
            it: 'Formule per Gruppi & Condivisione',
            en: 'Group Feasts & Sharing Formulas',
          },
          subtitle: {
            it: 'Pizza al Metro (40 x 100 cm Margherita + bibita grande) e Formula Giro Pizza illimitata con birra media.',
            en: 'One-Meter Pizza (40 x 100 cm + large drink) and All-You-Can-Eat Giro Pizza with draft beer.',
          },
          badge: {
            it: 'Ideale per Gruppi',
            en: 'Best for Groups',
          },
          dishes: formule,
        });
      }

      if (consiglio.length > 0) {
        sections.push({
          id: 'piz-consiglio',
          title: {
            it: 'Il Consiglio del Pizzaiolo (Le Pizze d’Autore)',
            en: 'Pizzaiolo’s Masterpieces (Signature Creations)',
          },
          subtitle: {
            it: 'Pizze speciali con burrata fresca pugliese, mortadella di Bologna, pistacchio e fiori di zucca.',
            en: 'Gourmet creations with whole fresh burrata, Bologna mortadella, roasted pistachios, and squash blossoms.',
          },
          badge: {
            it: 'Gourmet',
            en: 'Gourmet',
          },
          dishes: consiglio,
        });
      }

      if (mare.length > 0) {
        sections.push({
          id: 'piz-mare',
          title: {
            it: 'Le Pizze di Mare & Crostacei',
            en: 'Seafood & Shellfish Pizzas',
          },
          subtitle: {
            it: 'Frutti di mare freschi, calamari fritti, polipina con scamorza affumicata e salmone con panna.',
            en: 'Fresh shellfish, crispy calamari rings, tender octopus with scamorza, and smoked salmon.',
          },
          dishes: mare,
        });
      }

      if (classiche.length > 0) {
        sections.push({
          id: 'piz-classiche',
          title: {
            it: 'Le Nostre Pizze Tradizionali al Forno a Legna',
            en: 'Traditional Neapolitan Wood-Fired Pizzas',
          },
          subtitle: {
            it: 'Impasto a lievitazione naturale 48 ore, pomodoro San Marzano e cottura a 450°C. Impasto integrale +1,00€.',
            en: '48-hour cold-matured dough baked at 450°C over beechwood embers. Whole wheat dough option +€1.00.',
          },
          dishes: classiche,
        });
      }

      if (focCalz.length > 0) {
        sections.push({
          id: 'piz-calzoni',
          title: {
            it: 'Focacce al Rosmarino & Calzoni Farciti',
            en: 'Rosemary Focacce & Stuffed Calzoni',
          },
          subtitle: {
            it: 'Focacce croccanti condite a crudo e calzoni ripieni sigillati e dorati nel forno a legna.',
            en: 'Crispy herb-topped focacce and folded calzoni pockets bursting with Italian fillings.',
          },
          dishes: focCalz,
        });
      }

      return sections;
    }

    case 'Contorni & Salads': {
      const insalatone = dishes.filter((d) => d.id.startsWith('ins-'));
      const contorni = dishes.filter((d) => d.id.startsWith('con-'));
      const sections: MenuSubSection[] = [];

      if (insalatone.length > 0) {
        sections.push({
          id: 'con-insalatone',
          title: {
            it: 'Le Grandi Insalatone (Piatto Unico)',
            en: 'Grand Meal Salads (Piatto Unico)',
          },
          subtitle: {
            it: 'Insalatona D’Amore con gamberetti e mango, frutti di mare, pollo teriyaki e manzo con bufala.',
            en: 'Rich meal salads with prawns & mango, fresh seafood, teriyaki chicken, and beef with buffalo mozzarella.',
          },
          dishes: insalatone,
        });
      }

      if (contorni.length > 0) {
        sections.push({
          id: 'con-contorni',
          title: {
            it: 'I Contorni Caldi & Sfiziosi della Tradizione',
            en: 'Hot & Crispy Traditional Side Dishes',
          },
          subtitle: {
            it: 'Patate al forno al rosmarino, verdure grigliate alla brace, friarielli napoletani e patate fry’n dip.',
            en: 'Rosemary roasted potatoes, grilled garden vegetables, Neapolitan friarielli, and fry’n dip scoops.',
          },
          dishes: contorni,
        });
      }

      return sections;
    }

    case 'Desserts': {
      const semifreddi = dishes.filter(
        (d) =>
          d.id.startsWith('des-croccante') ||
          d.id.startsWith('des-cremoso') ||
          d.id.startsWith('des-semifreddo') ||
          d.id.startsWith('des-cocco') ||
          d.id.startsWith('des-zuccotto') ||
          d.id.startsWith('des-caramello') ||
          d.id.startsWith('des-crema-catalana')
      );
      const tartufi = dishes.filter(
        (d) =>
          d.id.startsWith('des-tartufo') ||
          d.id.startsWith('des-flute') ||
          d.id.startsWith('des-mandarino') ||
          d.id.startsWith('des-sorbetto')
      );
      const coppe = dishes.filter((d) => d.id.startsWith('des-coppa'));
      const torte = dishes.filter(
        (d) =>
          d.id.startsWith('des-torta') ||
          d.id.startsWith('des-profiterole') ||
          d.id.startsWith('des-millefoglie') ||
          d.id.startsWith('des-meringa')
      );
      const bimbi = dishes.filter(
        (d) =>
          d.id === 'des-rabbit' ||
          d.id === 'des-pirata' ||
          d.id === 'des-principessa'
      );

      const sections: MenuSubSection[] = [];

      if (semifreddi.length > 0) {
        sections.push({
          id: 'des-semifreddi',
          title: {
            it: 'Semifreddi & Monoporzioni d’Autore',
            en: 'Signature Semifreddi & Single Portions',
          },
          subtitle: {
            it: 'Croccanti all’amarena e cioccolato, cremoso ai frutti rossi, zuccotto e semifreddo al Vecchio Amaro del Capo.',
            en: 'Amarena and chocolate crunches, red berries cream, zuccotto dome, and Vecchio Amaro del Capo semifreddo.',
          },
          badge: {
            it: 'Bindi Maestri del Dessert',
            en: 'Bindi Dessert Masters',
          },
          dishes: semifreddi,
        });
      }

      if (tartufi.length > 0) {
        sections.push({
          id: 'des-tartufi',
          title: {
            it: 'Tartufi Gelato, Flûte & Sorbetti',
            en: 'Tartufi Gelato, Flûtes & Frozen Sorbets',
          },
          subtitle: {
            it: 'Tartufo classico, al pistacchio e bianco, flûte al limoncello italiano e mandarino ripieno.',
            en: 'Classic chocolate, pistachio, and white tartufi, Italian limoncello flûte, and frozen stuffed mandarin.',
          },
          dishes: tartufi,
        });
      }

      if (coppe.length > 0) {
        sections.push({
          id: 'des-coppe',
          title: {
            it: 'Le Coppe Gelato d’Autore',
            en: 'Gourmet Gelato Cups',
          },
          subtitle: {
            it: 'Coppa ai pistacchi di Sicilia, Coppa Dubai Chocolate style con kataifi, mascarpone e lamponi.',
            en: 'Sicilian pistachio cup, Dubai Chocolate style with kataifi, mascarpone with raspberries, and amarena.',
          },
          dishes: coppe,
        });
      }

      if (torte.length > 0) {
        sections.push({
          id: 'des-torte',
          title: {
            it: 'Le Grandi Torte & Tranci di Pasticceria',
            en: 'Traditional Cakes & Fine Pastry',
          },
          subtitle: {
            it: 'Torta della Nonna con pinoli, cioccolato e pere italiane, torta Dubai chocolate, millefoglie e profiteroles.',
            en: 'Torta della Nonna with pine nuts, dark chocolate & Italian pears, Dubai cake, millefeuille, and profiteroles.',
          },
          dishes: torte,
        });
      }

      if (bimbi.length > 0) {
        sections.push({
          id: 'des-bimbi',
          title: {
            it: 'I Gelati per Bambini',
            en: 'Kids Ice Cream Characters',
          },
          subtitle: {
            it: 'Rabbit al fiordilatte, Pirata al cioccolato e Principessa alla fragola.',
            en: 'Rabbit fiordilatte, Pirate chocolate, and Princess strawberry.',
          },
          dishes: bimbi,
        });
      }

      return sections;
    }

    default:
      return [
        {
          id: 'all',
          title: { it: 'I Nostri Piatti', en: 'Our Dishes' },
          subtitle: { it: '', en: '' },
          dishes,
        },
      ];
  }
}

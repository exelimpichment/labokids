import partyHero from '@/public/partyHero.jpg';
import { FaSoap } from 'react-icons/fa';
import { GiBalloons, GiFoam } from 'react-icons/gi';
import { SlChemistry } from 'react-icons/sl';

import school from '@/public/projectSvg/school.svg';
import dimond from '@/public/projectSvg/dimond.svg';
import home from '@/public/projectSvg/home.svg';

export const partyHeroContent = {
  image: partyHero,
  kidFontText: 'Birthday with LaboKids',
  header: 'A bright future for all',
  paragraph:
    'Orchestration of the delightful and fun-filled birthday parties for the little ones, full of joy, games, and memorable moments.',
  buttonsPosition: 'lg:justify-start',
  textPosition: 'lg:text-left',
  flexPosition: 'items-start',
};

export const pricePartyHeaderContent = {
  kidFontText: 'BEST PRICE FOR PARENTS',
  header: 'Pricing',
  paragraph:
    'Discover unbeatable prices for unforgettable parties - our commitment to ' +
    'affordability ensures you get the best value for your celebrations.',
};

export const partyAccordionHeaderData = {
  kidFontText: 'HAPPINESS FOR KIDS',
  header: 'Birthday topics',
  paragraph:
    'Experience the magic of science and amaze your little ones with thrilling experiments! Book a birthday party they’ll never forget.',
};

export const partyPricingData = [
  {
    id: 1,
    header: 'At our kindergarten', // Paket Labo
    paragraph:
      'Bring the birthday excitement to our kindergarten for a memorable celebration!',
    price: 650,
    advantages: [
      'Our Catered Cuisine',
      'Hassle-Free Experience',
      '2 hours of Fun',
    ],
    icon: school,
  },
  {
    id: 2,
    header: 'Party-at-Your-Place', // paket domowy
    paragraph:
      'Bring the birthday magic to your doorstep with our at-home party experience!',
    price: 550,
    advantages: ['Convenience', 'Personalized Experience', '1.5 hours of Fun'],
    icon: home,
  },
  {
    id: 3,
    header: 'Tailored Experience',
    paragraph:
      'Customizable celebration, negotiate and arrange the ideal birthday.',
    price: 'on request',
    advantages: ['Personalized Party', 'Large Group', 'Far From Poznan'],
    icon: dimond,
  },
];

export const accordionPartyData = [
  {
    key: 0,
    value: 'item-1',
    borderColor: 'before:border-laboBlue',
    fontColor: 'text-laboBlue',
    backgroundColor: 'bg-laboBlue',
    heading: 'Balonowe Party',
    icon: GiBalloons,
    description:
      'Czy wiesz, że balon powstał praktycznie przez przypadek, ' +
      'jako efekt uboczny eksperymentów i prób wynalezienia nowego tworzywa na dętki.? ' +
      'Czy wiesz, że wynalazł go inżynier chemii, Neil Tillotson? ' +
      'Podczas imprezy dzieci nie tylko dowiedzą się wielu ciekawostek, ' +
      'ale także napompują balony w niecodzienny sposób oraz nauczą się skręcać różne zwierzątka i inne kształty. ' +
      'Po urodzinach każdy wróci do domu z pamiątkowymi balonami!',
  },
  {
    key: 1,
    value: 'item-2',
    borderColor: 'before:border-laboRed',
    backgroundColor: 'bg-laboRed',
    fontColor: 'text-laboRed',
    heading: 'Spotkanie z magiczną chemią',
    icon: SlChemistry,
    description:
      'To niezwykła wyprawa w świat chemii. ' +
      'Podczas przyjęcia dzieci wykonają niesamowite doświadczenia, ' +
      'm.in. sprawią, że zniknie woda, wywołają Dżina z butelki czy rozpalą ogień bez zapałek.',
  },
  {
    key: 2,
    value: 'item-3',
    borderColor: 'before:border-laboGreen',
    backgroundColor: 'bg-laboGreen',
    fontColor: 'text-laboGreen',
    heading: 'Pachnący świat mydełek',
    icon: FaSoap,
    description:
      'W trakcie imprezy dzieci dowiedzą się wielu ciekawostek o mydle, ' +
      'a następnie stworzą własne, niepowtarzalne, pachnące mydło w wybranym przez siebie kształcie. ' +
      'Będzie to swoiste laboratorium, ' +
      'w którym uczestnicy mieszać będą kolory, zapachy i inne dodatki. ' +
      'Na koniec zapakują mydełka i zabiorą je do domu.',
  },
  {
    key: 3,
    value: 'item-4',
    borderColor: 'before:border-laboOrange',
    backgroundColor: 'bg-laboOrange',
    fontColor: 'text-laboOrange',
    heading: 'W krainie lodu',
    icon: GiFoam,
    description:
      'Mroźne doświadczenia i gorące emocje. ' +
      'Czy lód to zawsze zamarznięta woda? ' +
      'Czy istnieje taki lód, który się nie topi? ' +
      'Wykonamy niesamowite eksperymenty z użyciem suchego lodu. ' +
      'Podczas tej wyprawy między innymi przekonamy się czym jest suchy lód, ' +
      'sprawdzimy czy rzeczywiście jest taki zimny oraz zrobimy tajemniczą mgłę.',
  },
];

export const galleryPartyHeaderContent = {
  kidFontText: 'EXPLORE LABOKIDS',
  header: 'Gallery',
  paragraph:
    'Explore captivating moments from our kindergarten. Step into the world of young learners and be inspired by the joy of discovery.',
  animatedPicture: true,
};
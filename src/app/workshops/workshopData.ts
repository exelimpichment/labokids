import workshopHeroBig from '@/public/workshopHero.jpg';
// temp source of images
import montessoriGalleryListOfImage1 from '@/public/montessoriGallery/montessoriGallery1.jpg';
import montessoriGalleryListOfImage2 from '@/public/montessoriGallery/montessoriGallery2.jpg';
import montessoriGalleryListOfImage3 from '@/public/montessoriGallery/montessoriGallery3.jpg';
import montessoriGalleryListOfImage4 from '@/public/montessoriGallery/montessoriGallery4.jpg';
import montessoriGalleryListOfImage5 from '@/public/montessoriGallery/montessoriGallery5.jpg';
import montessoriGalleryListOfImage6 from '@/public/montessoriGallery/montessoriGallery6.jpg';
import { GiBalloons, GiFoam } from 'react-icons/gi';
import { SlChemistry } from 'react-icons/sl';
import { FaSoap } from 'react-icons/fa';
// temp source of images

export const workshopHeroContent = {
  image: workshopHeroBig,
  buttonsPosition: 'lg:justify-end',
  kidFontText: 'LaboKids montessori kindergarten',
  header: 'A bright future for all.',
  textPosition: 'lg:text-right',
  flexPosition: 'items-end',
  paragraph:
    'We prioritize personalized Montessori education while nurturing group unity through camaraderie, affection, and fairness.',
};

export const imagesWorkshopHeaderContent = {
  kidFontText: 'EXPLORE LABOKIDS',
  header: 'Gallery',
  paragraph:
    'Explore captivating moments from our kindergarten. Step into the world of young learners and be inspired by the joy of discovery.',
};

export const priceWorkshopHeaderContent = {
  kidFontText: 'BEST PRICE FOR PARENTS',
  header: 'Pricing',
  paragraph:
    'Discover unbeatable prices for unforgettable parties - our commitment to ' +
    'affordability ensures you get the best value for your celebrations.',
};

export const workshopGalleryPhotoSets = {
  baloniki: [
    { id: 0, image: montessoriGalleryListOfImage1, alt: 'alt' },
    { id: 1, image: montessoriGalleryListOfImage2, alt: 'alt' },
    { id: 2, image: montessoriGalleryListOfImage3, alt: 'alt' },
    { id: 3, image: montessoriGalleryListOfImage4, alt: 'alt' },
    { id: 4, image: montessoriGalleryListOfImage5, alt: 'alt' },
    { id: 5, image: montessoriGalleryListOfImage6, alt: 'alt' },
  ],
  chemia: [
    { id: 0, image: montessoriGalleryListOfImage6, alt: 'alt' },
    { id: 1, image: montessoriGalleryListOfImage5, alt: 'alt' },
    { id: 2, image: montessoriGalleryListOfImage4, alt: 'alt' },
    { id: 3, image: montessoriGalleryListOfImage3, alt: 'alt' },
    { id: 4, image: montessoriGalleryListOfImage2, alt: 'alt' },
    { id: 5, image: montessoriGalleryListOfImage1, alt: 'alt' },
  ],
  mydlo: [
    { id: 0, image: montessoriGalleryListOfImage1, alt: 'alt' },
    { id: 1, image: montessoriGalleryListOfImage2, alt: 'alt' },
    { id: 2, image: montessoriGalleryListOfImage3, alt: 'alt' },
    { id: 3, image: montessoriGalleryListOfImage4, alt: 'alt' },
    { id: 4, image: montessoriGalleryListOfImage5, alt: 'alt' },
    { id: 5, image: montessoriGalleryListOfImage6, alt: 'alt' },
  ],
  lod: [
    { id: 0, image: montessoriGalleryListOfImage6, alt: 'alt' },
    { id: 1, image: montessoriGalleryListOfImage5, alt: 'alt' },
    { id: 2, image: montessoriGalleryListOfImage4, alt: 'alt' },
    { id: 3, image: montessoriGalleryListOfImage3, alt: 'alt' },
    { id: 4, image: montessoriGalleryListOfImage2, alt: 'alt' },
    { id: 5, image: montessoriGalleryListOfImage1, alt: 'alt' },
  ],
};

export const workshopAccordionHeaderData = {
  kidFontText: 'HAPPINESS FOR KIDS',
  header: 'Birthday topics',
  paragraph:
    'Experience the magic of science and amaze your little ones with thrilling experiments! Book a birthday party they’ll never forget.',
};

export const accordionWorkshopData = [
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
];

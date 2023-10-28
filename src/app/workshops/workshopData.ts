import workshopHeroBig from '@/public/workshopHero.jpg';

import montessoriGalleryListOfImage1 from '@/public/montessoriGallery/montessoriGallery1.jpg';
import montessoriGalleryListOfImage2 from '@/public/montessoriGallery/montessoriGallery2.jpg';
import montessoriGalleryListOfImage3 from '@/public/montessoriGallery/montessoriGallery3.jpg';
import montessoriGalleryListOfImage4 from '@/public/montessoriGallery/montessoriGallery4.jpg';
import montessoriGalleryListOfImage5 from '@/public/montessoriGallery/montessoriGallery5.jpg';
import montessoriGalleryListOfImage6 from '@/public/montessoriGallery/montessoriGallery6.jpg';

import user from '@/public/projectSvg/user.svg';
import users from '@/public/projectSvg/users.svg';
import userPlus from '@/public/projectSvg/userPlus.svg';
import { PartyPopper, RotateCw, TentTree } from 'lucide-react';

export const workshopHeroContent = {
  image: workshopHeroBig,
  buttonsPosition: 'lg:justify-end',
  kidFontText: 'Workshop with LaboKids',
  header: 'A bright future for all.',
  textPosition: 'lg:text-right',
  flexPosition: 'items-end',
  paragraph:
    "Explore the World of Wonder: Kids' Workshops with Mind-Blowing Experiments and Exciting Insights into Biology and More!",
};

export const imagesWorkshopHeaderContent = {
  kidFontText: 'EXPLORE LABOKIDS',
  header: 'Gallery',
  paragraph:
    'Explore captivating moments from our kindergarten. Step into the world of young learners and be inspired by the joy of discovery.',
  animatedPicture: true,
};

export const priceWorkshopHeaderContent = {
  kidFontText: 'BEST PRICE FOR PARENTS',
  header: 'Pricing',
  paragraph:
    'Discover unbeatable prices for enriching workshops - our commitment to affordability ensures you get the best value for your educational endeavors.',
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
  kidFontText: 'WE OFFER A LOT!',
  header: 'Our Workshop',
  paragraph:
    'Engaging Workshops for Kindergarten and Primary School Children in Grades 1-3. ' +
    'Unlocking Curiosity and Inspiring Lifelong Learning Through Hands-On Education.',
};

export const accordionWorkshopData = [
  {
    key: 0,
    value: 'item-1',
    borderColor: 'before:border-laboBlue',
    fontColor: 'text-laboBlue',
    backgroundColor: 'bg-laboBlue',
    heading: 'Regular Workshops', // warsztaty cykliczne
    icon: RotateCw,
    description:
      "Our offer includes 30 topics to choose from, adapted to the age of children, in the field of chemistry, physics, and biology. These topics are meant to spark children's interest in science while keeping the content appropriate for their level of understanding. Whether it's chemistry, physics, or biology, our program has a variety of options for young learners to explore and enjoy.",
  },
  {
    key: 1,
    value: 'item-2',
    borderColor: 'before:border-laboRed',
    backgroundColor: 'bg-laboRed',
    fontColor: 'text-laboRed',
    heading: 'Holiday Workshop', // warsztaty swenteczne
    icon: PartyPopper,
    description:
      "We will make your holidays special by ensuring that your children experience a multitude of emotions on occasions such as Boy's Day, Girl's Day, St. Nicholas Day, Valentine's Day, and other holidays. Our goal is to create unforgettable moments and cherished memories for your little ones, filled with joy, surprises, and love. With our special holiday offerings, your family will celebrate these occasions with a sense of wonder and delight.",
  },

  // Sprawimy, że wasze święta będą
  // wyjątkowe. Zapewnimy waszym
  // dzieciom morze emocji z okazji Dnia
  // Chłopaka, Dnia Dziewczyny,
  // Mikołajek, Walentynek i innych świąt.

  {
    key: 2,
    value: 'item-3',
    borderColor: 'before:border-laboGreen',
    backgroundColor: 'bg-laboGreen',
    fontColor: 'text-laboGreen',
    heading: 'Picnic Workshop',
    icon: TentTree,
    description:
      'W trakcie imprezy dzieci dowiedzą się wielu ciekawostek o mydle, ' +
      'a następnie stworzą własne, niepowtarzalne, pachnące mydło w wybranym przez siebie kształcie. ' +
      'Będzie to swoiste laboratorium, ' +
      'w którym uczestnicy mieszać będą kolory, zapachy i inne dodatki. ' +
      'Na koniec zapakują mydełka i zabiorą je do domu.',
  },
];

export const workshopPricingData = [
  {
    id: 1,
    header: 'One Group',
    paragraph:
      'Perfect for small gatherings or individual groups, ensuring personalized attention and a memorable experience.',
    price: '450/group',
    advantages: [
      '25 Kids Maximum',
      'Flexible Scheduling',
      'Experienced Teachers',
    ],
    icon: user,
  },
  {
    id: 2,
    header: 'Two - Three Groups',
    paragraph:
      'Ideal for multiple groups or classes, providing a well-balanced combination of learning and fun.',
    price: '350/group',
    advantages: [
      '25 Kids Max per group',
      'Customizable Curriculum',
      'Engaging Activities',
    ],
    icon: users,
  },
  {
    id: 3,
    header: 'Four and More',
    paragraph:
      'Our best value option for larger gatherings, ensuring affordability without compromising on quality.',
    price: '300/group',
    advantages: ['25 Kids Max per group', 'Endless Fun', 'Best Value'],
    icon: userPlus,
  },
];

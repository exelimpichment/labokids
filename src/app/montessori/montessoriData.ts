import montessoriHero from 'public/montessoriHero.jpg';
import team1 from '@/public/team-1.webp';
import team2 from '@/public/team-2.webp';
import team3 from '@/public/team-3.webp';

import montessoriGalleryListOfImage1 from '@/public/montessoriGallery/montessoriGallery1.jpg';
import montessoriGalleryListOfImage2 from '@/public/montessoriGallery/montessoriGallery2.jpg';
import montessoriGalleryListOfImage3 from '@/public/montessoriGallery/montessoriGallery3.jpg';
import montessoriGalleryListOfImage4 from '@/public/montessoriGallery/montessoriGallery4.jpg';
import montessoriGalleryListOfImage5 from '@/public/montessoriGallery/montessoriGallery5.jpg';
import montessoriGalleryListOfImage6 from '@/public/montessoriGallery/montessoriGallery6.jpg';

import montessoriMethodsListOfImage1 from '@/public/montessoriMethodsListOfImage1.jpg';
import montessoriMethodsListOfImage2 from '@/public/montessoriMethodsListOfImage2.jpg';
import montessoriMethodsListOfImage3 from '@/public/montessoriMethodsListOfImage3.jpg';
import montessoriMethodsListOfImage4 from '@/public/montessoriMethodsListOfImage1.jpg';
import montessoriMethodsListOfImage5 from '@/public/montessoriMethodsListOfImage5.jpg';

export const montessoriHeroContent = {
  image: montessoriHero,
  buttonsPosition: 'lg:justify-end',
  kidFontText: 'LaboKids montessori kindergarten',
  header: 'A bright future for all.',
  textPosition: 'lg:text-right',
  flexPosition: 'items-end',
  paragraph:
    'We prioritize personalized Montessori education while nurturing group unity through camaraderie, affection, and fairness.',
};

export const priceHeaderContent = {
  kidFontText: 'BEST PRICE FOR PARENTS',
  header: 'Pricing',
  paragraph:
    'Discover unbeatable prices for unforgettable parties - our commitment to ' +
    'affordability ensures you get the best value for your celebrations.',
};

export const teachersHeaderContent = {
  kidFontText: 'ABOUT THE TEACHERS',
  header: 'Our Teachers',
  paragraph:
    'We have an excellent teacher to child ratio at our Kindergarten to ensure that each child receives the attention he or she needs.',
};

export const imagesHeaderContent = {
  kidFontText: 'EXPLORE LABOKIDS',
  header: 'Gallery',
  paragraph:
    'Explore captivating moments from our kindergarten. Step into the world of young learners and be inspired by the joy of discovery.',
};

export const aboutMontessoriHeaderContent = {
  kidFontText: 'ABOUT OUR EDUCATION PROGRAM',
  header: 'Montessori Method',
  paragraph:
    'Our goal is the comprehensive development of the child, teaching independence and tolerance. According to the Montessori method, we have 5 subject areas:',
};

export const OurTeachersInfoList = [
  { id: 0, name: 'Alie Bohm', position: 'Senior Educator', image: team1 },
  { id: 1, name: 'Alie Bohm', position: 'Senior Educator', image: team2 },
  { id: 2, name: 'Alie Bohm', position: 'Senior Educator', image: team3 },
  { id: 3, name: 'Alie Bohm', position: 'Senior Educator', image: team3 },
];

export const montessoriGalleryListOfImages = [
  { id: 0, image: montessoriGalleryListOfImage1 },
  { id: 1, image: montessoriGalleryListOfImage2 },
  { id: 2, image: montessoriGalleryListOfImage3 },
  { id: 3, image: montessoriGalleryListOfImage4 },
  { id: 4, image: montessoriGalleryListOfImage5 },
  { id: 5, image: montessoriGalleryListOfImage6 },
];

export const montessoriMethodsList = [
  {
    id: 0,
    image: montessoriMethodsListOfImage1,
    paragraph:
      'Practical life activities encompass a progressively demanding set of fine motor tasks with real-world purposes, like tidying a table or washing dishes. These activities not only aid children in mastering everyday chores but also cultivate independence, physical dexterity, coordination, focus, and a notion of organization.',
    header: 'Practical Life',
  },
  {
    id: 1,
    image: montessoriMethodsListOfImage2,
    paragraph:
      'The Montessori classroom is meticulously arranged to organically foster the acquisition of skills vital for both spoken and written language. Children employ sandpaper letters to grasp the phonetics of the alphabet and the precise formation of each letter.',
    header: 'Language',
  },
  {
    id: 2,
    image: montessoriMethodsListOfImage3,
    paragraph:
      'Through the use of hands-on materials designed\naround the decimal system, children learn important\nmathematical principles. Dr Montessori demonstrated\nthat if a child is able to learn during the stage\nwhen they enjoy manipulating materials, they will be able\nto more easily and successfully assimilate\nthe skills and knowledge of arithmetic.',
    header: 'Mathematics',
  },
  {
    id: 3,
    image: montessoriMethodsListOfImage4,
    paragraph:
      "Montessori's sensorial education focuses on honing a child's sensory perception by consistently engaging with purposefully crafted materials.\nThis approach aims to offer tangible instances that illustrate otherwise abstract notions, including elements like color, texture, sound, and fragrance.",
    header: 'Sensorial',
  },
  {
    id: 4,
    image: montessoriMethodsListOfImage5,
    paragraph:
      "In this domain, children delve into a range of subjects, including Geography, History, Biology, Art, and Music. This broad exploration provides them with the chance to gain a deeper understanding of their surroundings. This facet of children's education empowers our students to uncover the richness of both historical and contemporary cultures while also examining the realms of living and non-living entities.",
    header: 'Culture and Science',
  },
];

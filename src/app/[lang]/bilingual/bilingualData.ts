import bilingualHero from '@/public/bilingualHero.jpg';
import calendar from '@/public/projectSvg/calendar.svg';
import soup from '@/public/projectSvg/soup.svg';
import dimond from '@/public/projectSvg/dimond.svg';

import teacher1 from '@/public/teacher-1.webp';
import teacher2 from '@/public/teacher-2.webp';
import teacher3 from '@/public/teacher-3.webp';

export const bilingualHeroContent = {
  image: bilingualHero,
  buttonsPosition: 'lg:justify-end',
  kidFontText: 'LaboKids Bilingual kindergarten',
  header: 'A bright future for all.',
  textPosition: 'lg:text-right',
  flexPosition: 'items-end',
  paragraph:
    'Family-style kindergartens, where caring professional teachers envelop each child with love.',
};

export const bilingualTeachersHeader = {
  kidFontText: 'ABOUT THE TEACHERS',
  header: 'Our Teachers',
  paragraph:
    'We have an excellent teacher to child ratio at our Kindergarten to ensure that each child receives the attention he or she needs.',
};

export const priceBilingualHeaderContent = {
  kidFontText: 'BEST PRICE FOR PARENTS',
  header: 'Pricing',
  paragraph:
    "Discover unbeatable value for your child's formative years - our commitment to affordability ensures the best care and education for them.",
};

export const bilingualPricingData = [
  {
    id: 1,
    header: 'Monthly payment',
    paragraph: 'Affordable monthly payment plans to suit your budget.',
    price: 800,
    advantages: [
      'Personalized Approach',
      'Experienced Teachers',
      'Engaging Curriculum',
    ],
    icon: calendar,
  },
  {
    id: 2,
    header: 'Meals',
    paragraph: 'Nutritious meals provided for the child during their time.',
    price: '17/day',
    advantages: [
      'Healthy Food',
      'Dietary Accommodations',
      'Mealtime Education',
    ],
    icon: soup,
  },
  {
    id: 3,
    header: 'Special offers',
    paragraph: 'Enjoy financial benefits with our exclusive offers!',
    price: 'on request',
    advantages: ['Additional Lessons', 'Bring a Friend', 'Offers for Siblings'],
    icon: dimond,
  },
];

export const aboutBilingualHeaderContent = {
  kidFontText: 'ABOUT OUR EDUCATION PROGRAM',
  header: 'Bilingual Education',
  paragraph:
    'Language immersion introduces young learners to English in an immersive environment, promoting early language acquisition and fluency development.',
};

export const imagesBilingualHeaderContent = {
  kidFontText: 'EXPLORE LABOKIDS',
  header: 'Gallery',
  paragraph:
    'Explore captivating moments from our kindergarten. Step into the world of young learners and be inspired by the joy of discovery.',
  animatedPicture: true,
};

export const teachersBilingualCarouselData = [
  {
    id: 0,
    name: 'lorem ipsum',
    position: 'position posiition',
    image: teacher1,
  },
  {
    id: 1,
    name: 'lorem ipsum',
    position: 'position posiition',
    image: teacher1,
  },
  {
    id: 2,
    name: 'lorem ipsum',
    position: 'position posiition',
    image: teacher2,
  },
  {
    id: 3,
    name: 'lorem ipsum',
    position: 'position posiition',
    image: teacher1,
  },
  {
    id: 4,
    name: 'lorem ipsum',
    position: 'position posiition',
    image: teacher1,
  },
  {
    id: 5,
    name: 'lorem ipsum',
    position: 'position posiition',
    image: teacher3,
  },
  {
    id: 6,
    name: 'lorem ipsum',
    position: 'position posiition',
    image: teacher3,
  },
  {
    id: 7,
    name: 'lorem ipsum',
    position: 'position posiition',
    image: teacher3,
  },
  {
    id: 3,
    name: 'lorem ipsum',
    position: 'position posiition',
    image: teacher1,
  },
];

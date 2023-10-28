import { RiHomeHeartLine } from 'react-icons/ri';
import bilingualHero from '../../../public/bilingualHero.jpg';
import { LuSchool } from 'react-icons/lu';
import { HeartHandshake } from 'lucide-react';

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

export const priceHeaderContent = {
  kidFontText: 'BEST PRICE FOR PARENTS',
  header: 'Pricing',
  paragraph:
    'Discover unbeatable prices for unforgettable parties - our commitment to ' +
    'affordability ensures you get the best value for your celebrations.',
};

export const bilingualPricingData = [
  {
    id: 1,
    header: 'Monthly payment',
    paragraph: 'Affordable monthly payment plans to suit your budget.',
    price: 1100,
    advantages: [
      'Personalized Approach',
      'Experienced Teachers',
      'Engaging Curriculum',
    ],
    icon: RiHomeHeartLine,
  },
  {
    id: 2,
    header: 'Meals',
    paragraph:
      'Nutritious meals provided for your child during their time with us.',
    price: '17 / day',
    advantages: [
      'Healthy Food',
      'Dietary Accommodations',
      'Mealtime Education',
    ],
    icon: LuSchool,
  },
  {
    id: 3,
    header: 'Special offers',
    paragraph: 'Enjoy financial benefits with our exclusive offers!',
    price: 0,
    advantages: ['Additional Lessons', 'Bring a Friend', 'Offers for Siblings'],
    icon: HeartHandshake,
  },
];

export const aboutBilingualHeaderContent = {
  kidFontText: 'ABOUT OUR EDUCATION PROGRAM',
  header: 'Bilingual Education',
  paragraph:
    'Language immersion introduces young learners to English in an immersive environment, promoting early language acquisition and fluency development.',
};

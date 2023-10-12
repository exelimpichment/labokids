import { VenetianMask, HeartHandshake } from 'lucide-react';
import { RiHomeHeartLine } from 'react-icons/ri';
import { LuSchool } from 'react-icons/lu';

const pricingData = [
  {
    id: 1,
    header: 'Party-at-Your-Place',
    paragraph:
      'Bring the birthday magic to your doorstep with our at-home party experience!',
    price: 123,
    advantages: ['Convenience', 'Personalized Experience', 'Intimate'],
    icon: RiHomeHeartLine,
  },
  {
    id: 2,
    header: 'At our kindergarten',
    paragraph:
      'Bring the birthday excitement to our kindergarten for a memorable celebration!',
    price: 123,
    advantages: [
      'Our Catered Cuisine',
      'Educational Fun',
      'Hassle-Free Experience',
    ],
    icon: LuSchool,
  },
  {
    id: 3,
    header: 'Tailored Experience',
    paragraph:
      'Completely customizable celebration, negotiate and arrange the ideal birthday.',
    price: 123,
    advantages: ['Personalized Party', 'Flexibility', 'Memorable and Unique'],
    icon: HeartHandshake,
  },
];

export default pricingData;

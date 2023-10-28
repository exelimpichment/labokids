import { CakeSlice, Leaf, Ruler } from 'lucide-react';
import { TbLanguage } from 'react-icons/tb';
import { BiHomeAlt2 } from 'react-icons/bi';

export const navbarLinks = [
  { id: 0, href: '/', label: 'Home', icon: BiHomeAlt2 },
  { id: 1, href: '/montessori', label: 'Montessori', icon: Leaf },
  { id: 2, href: '/bilingual', label: 'Bilingual', icon: TbLanguage },
  { id: 3, href: '/party', label: 'Birthdays', icon: CakeSlice },
  { id: 4, href: '/workshops', label: 'Workshop', icon: Ruler },
];

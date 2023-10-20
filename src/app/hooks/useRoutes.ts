'use client';

import { usePathname } from 'next/navigation';
import { useMemo } from 'react';

import { CakeSlice, Leaf, Ruler } from 'lucide-react';
import { TbLanguage } from 'react-icons/tb';
import { BiHomeAlt2 } from 'react-icons/bi';

const useRoutes = () => {
  const pathname = usePathname();

  const routes = useMemo(
    () => [
      {
        id: 0,
        href: '/',
        label: 'Home',
        icon: BiHomeAlt2,
        active: pathname === '/',
      },
      {
        id: 1,
        href: '/montessori',
        label: 'Montessori',
        icon: Leaf,
        active: pathname === '/montessori',
      },
      {
        id: 2,
        href: '/bilingual',
        label: 'Bilingual',
        icon: TbLanguage,
        active: pathname === '/bilingual',
      },
      {
        id: 3,
        href: '/party',
        label: 'Birthdays',
        icon: CakeSlice,
        active: pathname === '/party',
      },
      {
        id: 4,
        href: '/workshops',
        label: 'Workshop',
        icon: Ruler,
        active: pathname === '/workshops',
      },
    ],
    [pathname]
  );
  return routes;
};

export default useRoutes;

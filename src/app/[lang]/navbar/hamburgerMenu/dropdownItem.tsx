'use client';

import { IconType } from 'react-icons';
import { useGlobalContext } from '../../context/globalContext';
import { useRouter } from 'next/navigation';
import { CakeSlice, Leaf, LucideIcon, Ruler } from 'lucide-react';
import { TbLanguage } from 'react-icons/tb';
import { titleFont } from '../../common/fonts';

interface INavbarLink {
  route: {
    id: number;
    href: string;
    label: string;
    icon: IconType;
    active: boolean;
  };
}

const dropdownIcons = {
  montessori: Leaf,
  bilingual: TbLanguage,
  party: CakeSlice,
  workshops: Ruler,
};

interface IDropdownItem {
  item: {
    pathname: string;
    lang: string;
    key: 'montessori' | 'bilingual' | 'party' | 'workshops';
    value: string;
  };
}

const DropdownItem: React.FC<IDropdownItem> = ({ item }) => {
  const { pathname, lang, key, value } = item;

  const { setBurgerMenuOpen } = useGlobalContext();
  const router = useRouter();
  router.prefetch(`/${lang}/${key}`);

  const handleClick = () => {
    setBurgerMenuOpen(false);
    setTimeout(() => {
      router.push(`/${lang}/${key}`);
    }, 300);
  };

  const IconComponent = dropdownIcons[key] as LucideIcon; // Cast to React.ComponentType

  return (
    <li>
      <button
        type="button"
        onClick={handleClick}
        className={`flex gap-2 ${titleFont.className} ${
          pathname === `/${lang}/${key}` ? 'text-black' : 'text-gray-600'
        } px-3`}
      >
        <IconComponent size={24} />
        <span>{value}</span>
      </button>
    </li>
  );
};

export default DropdownItem;

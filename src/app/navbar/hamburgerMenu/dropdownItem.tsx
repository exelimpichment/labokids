'use client';

// import Link from 'next/link';
import { IconType } from 'react-icons';
import { useGlobalContext } from '../../context/globalContext';
import { useRouter } from 'next/navigation';

interface INavbarLink {
  route: {
    id: number;
    href: string;
    label: string;
    icon: IconType;
    active: boolean;
  };
}

const DropdownItem: React.FC<INavbarLink> = ({
  route: { id, href, label, icon: Icon, active },
}) => {
  const { setBurgerMenuOpen } = useGlobalContext();
  const router = useRouter();
  router.prefetch(href);

  const handleClick = () => {
    setBurgerMenuOpen(false);
    setTimeout(() => {
      router.push(href);
    }, 300);
  };
  return (
    <li>
      <button
        type="button"
        onClick={handleClick}
        className={`flex gap-2 ${active ? 'text-black' : 'text-gray-600'}`}
      >
        <Icon size={24} />
        <span>{label}</span>
      </button>
    </li>
  );
};

export default DropdownItem;

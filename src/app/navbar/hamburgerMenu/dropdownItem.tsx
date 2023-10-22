import Link from 'next/link';
import { IconType } from 'react-icons';
import { useGlobalContext } from '../../context/globalContext';

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
  const { burgerMenuOpen, setBurgerMenuOpen } = useGlobalContext();
  return (
    <li>
      <Link
        href={href}
        className={`flex gap-2 ${active ? 'text-black' : 'text-gray-600'}`}
        onClick={() => setBurgerMenuOpen(false)}
      >
        <Icon size={24} />
        <span>{label}</span>
      </Link>
    </li>
  );
};

export default DropdownItem;

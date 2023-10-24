import Link from 'next/link';
import { IconType } from 'react-icons';

interface INavbarLink {
  route: {
    id: number;
    href: string;
    label: string;
    icon: IconType;
    active: boolean;
  };
}

const DesktopNavbarLink: React.FC<INavbarLink> = ({
  route: { href, label, active, icon: Icon },
}) => {
  return (
    <li
      className={`${active ? 'text-black' : 'text-white'} ${
        !active ? ' hover:text-gray-300' : null
      }`}
    >
      <Link href={href}>{label}</Link>
    </li>
  );
};

export default DesktopNavbarLink;

import { SheetClose } from '@/components/ui/sheet';
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

const NavbarLink: React.FC<INavbarLink> = ({
  route: { href, label, active, icon: Icon },
}) => {
  return (
    <SheetClose asChild className="max-w-[85%] cursor-pointer text-2xl">
      <Link href={href}>
        <div
          className={`flex flex-row items-center gap-3 ${
            active ? 'text-black' : 'text-gray-700'
          }`}
        >
          <Icon />
          <span>{label}</span>
        </div>
      </Link>
    </SheetClose>
  );
};

export default NavbarLink;

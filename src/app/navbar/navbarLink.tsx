import { SheetClose } from '@/components/ui/sheet';
import Link from 'next/link';
import { IconType } from 'react-icons';

interface INavbarLink {
  link: {
    id: number;
    href: string;
    label: string;
    icon: IconType;
  };
}

const NavbarLink: React.FC<INavbarLink> = ({
  link: { href, label, icon: Icon },
}) => {
  return (
    <SheetClose asChild className="cursor-pointer text-2xl">
      <Link href={href}>
        <div className="flex w-full flex-row items-center gap-3">
          <Icon />
          <span>{label}</span>
        </div>
      </Link>
    </SheetClose>
  );
};

export default NavbarLink;

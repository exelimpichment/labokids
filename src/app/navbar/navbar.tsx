'use client';

import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, Phone, PhoneCall } from 'lucide-react';
import NavbarLinkList from './navbarLinkList';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="absolute right-5 top-5 z-20 lg:hidden">
      <div>
        <Sheet>
          <SheetTrigger asChild>
            <Menu size={32} />
          </SheetTrigger>
          <SheetContent className="w-[100%] border-0 sm:w-[100%]">
            <NavbarLinkList />
            <div className="absolute bottom-3 flex w-full items-center gap-3 pt-60 text-xl">
              <PhoneCall />
              <Link href="tel:+48 503 038 500">+48 503 038 500</Link>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default Navbar;

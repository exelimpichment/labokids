'use client';

import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, Phone, PhoneCall } from 'lucide-react';
import NavbarLinkList from './navbarLinkList';
import Link from 'next/link';

const Navbar = () => {
  return (
    <>
      <div className="absolute right-5 top-5 z-20 lg:hidden">
        <Menu size={32} />
      </div>
      <nav className="absolute right-5 top-5 z-20 lg:hidden">
        <div>
          <Sheet>
            <SheetTrigger asChild>
              <Menu size={32} />
            </SheetTrigger>
            <SheetContent className="border-0">
              <div className="flex h-full flex-col justify-between">
                <NavbarLinkList />
                <div className="flex w-full items-center gap-3 text-lg sm:text-xl">
                  <PhoneCall />
                  <Link href="tel:+48 503 038 500">+48 503 038 500</Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

'use client';
import Image from 'next/image';
import HamburgerTrigger from './HamburgerTrigger';
import laboKidsLogo from '@/public/labokids-logo.png';
import { useGlobalContext } from '../../context/globalContext';

const HamburgerMenu = () => {
  const { burgerMenuOpen } = useGlobalContext();
  return (
    <div className="absolute right-0 top-0 z-50 flex w-full flex-col items-end px-6 pt-1 lg:hidden ">
      <div className="flex w-full items-center justify-between">
        <div
          className={`${
            burgerMenuOpen ? 'opacity-0' : 'opacity-1'
          } transition-opacity`}
        >
          <Image
            src={laboKidsLogo}
            alt="website logo"
            style={{ objectFit: 'contain', objectPosition: 'center center' }}
            className="h-full w-[auto]"
          />
        </div>
        <HamburgerTrigger />
      </div>
    </div>
  );
};

export default HamburgerMenu;

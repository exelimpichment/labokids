'use client';
import Image from 'next/image';
import HamburgerTrigger from './hamburgerTrigger';
import laboKidsLogo from '@/public/labokids-logo.png';
import { useGlobalContext } from '../../context/globalContext';
import LanguageSelect from '../../common/languageSelect/languageSelect';
import { Locale } from '@/i18n.config';

const HamburgerMenu = ({ lang }: { lang: Locale }) => {
  const { burgerMenuOpen } = useGlobalContext();
  return (
    <div
      className={`${
        burgerMenuOpen ? null : 'w-full'
      } absolute right-0  z-50 px-6  lg:hidden`}
    >
      <div
        className={` ${
          !burgerMenuOpen ? 'w-full' : null
        }  flex items-center justify-between`}
      >
        <div
          className={`${
            burgerMenuOpen ? 'hidden' : 'block'
          } transition-opacity`}
        >
          <Image
            src={laboKidsLogo}
            alt="website logo"
            style={{ objectFit: 'contain', objectPosition: 'center center' }}
            className="h-full w-[auto]"
          />
        </div>
        <div
          className="flex gap-3
        "
        >
          {!burgerMenuOpen && <LanguageSelect lang={lang} />}
          <HamburgerTrigger />
        </div>
      </div>
    </div>
  );
};

export default HamburgerMenu;

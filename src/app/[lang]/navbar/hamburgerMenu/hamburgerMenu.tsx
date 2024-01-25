'use client';
import Image from 'next/image';
import laboKidsLogo from '@/public/labokids-logo.png';
import { useGlobalContext } from '../../context/globalContext';
import LanguageSelect from '../../common/languageSelect/languageSelect';
import { Locale } from '@/i18n.config';
import HamburgerTrigger from './hamburgerTrigger';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const HamburgerMenu = ({ lang }: { lang: Locale }) => {
  const { burgerMenuOpen } = useGlobalContext();
  const pathname = usePathname();
  const locale = pathname.split('/')[1];

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
          <Link href={`/${locale}`}>
            <Image
              src={laboKidsLogo}
              alt="website logo"
              style={{ objectFit: 'contain', objectPosition: 'center center' }}
              className="h-full w-[auto]"
            />
          </Link>
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

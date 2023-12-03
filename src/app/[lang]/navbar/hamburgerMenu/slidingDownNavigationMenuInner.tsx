'use client';

import { useGlobalContext } from '../../context/globalContext';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { Locale } from '@/i18n.config';
import { usePathname, useRouter } from 'next/navigation';
import { MapPin, Phone } from 'lucide-react';
import { TNavigation } from '@/lib/types';
import DropdownItem from './dropdownItem';

const SlidingDownNavigationMenuInner = ({
  lang,
  navigation,
}: {
  lang: Locale;
  navigation: TNavigation;
}) => {
  const { burgerMenuOpen, setBurgerMenuOpen } = useGlobalContext();
  const pathname = usePathname();

  useEffect(() => {
    if (burgerMenuOpen) {
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = 'scroll';
      };
    }
    return;
  }, [burgerMenuOpen]);

  const SlidingDownMenuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        SlidingDownMenuRef.current &&
        !SlidingDownMenuRef.current.contains(event.target as Node)
      ) {
        setBurgerMenuOpen(false);
      }
    };

    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setBurgerMenuOpen(false);
      }
    };

    window.addEventListener('click', handleClickOutside);
    window.addEventListener('keydown', handleEscapeKey);

    return () => {
      window.removeEventListener('click', handleClickOutside);
      window.removeEventListener('keydown', handleEscapeKey);
    };
  }, [setBurgerMenuOpen]);

  type Entry<T> = [keyof T, T[keyof T]];

  function objectEntries<T extends object>(obj: T): Entry<T>[] {
    return (Object.keys(obj) as Array<keyof T>).map((key) => [
      key,
      obj[key],
    ]) as Entry<T>[];
  }

  return (
    <AnimatePresence mode={'sync'}>
      {burgerMenuOpen && (
        <motion.div
          ref={SlidingDownMenuRef}
          className=" absolute left-0 top-0 z-[999] flex  w-full flex-col items-center rounded-bl-2xl rounded-br-2xl bg-blue-100 p-4 lg:hidden"
          initial={{ y: -400, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -400, opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <ul className="mt-2 flex flex-col items-start gap-3 text-2xl">
            {objectEntries(navigation).map(([key, value]) => (
              <DropdownItem key={key} item={{ pathname, lang, key, value }} />
            ))}

            <li className="mt-3 flex items-center gap-3 px-3 text-[1.3rem] text-laboBlue ">
              <div>
                <Phone size={24} />
              </div>
              <a href="tel:+48 503 038 500">+48 503 038 500</a>
            </li>
            <li className="mt-3 flex items-center gap-3 px-3 text-[1.3rem] text-laboBlue">
              <div>
                <MapPin size={24} />
              </div>
              <div className="flex flex-col text-lg">
                <p>Knapowskiego 23, Poznań</p>
                <p>Labokids Montessori</p>
              </div>
            </li>
            <li className="mt-3 flex items-center gap-3 px-3 text-[1.3rem] text-laboBlue">
              <div>
                <MapPin size={24} />
              </div>
              <div className="flex flex-col text-lg">
                <p>Krośnieńska 9, Poznań</p>
                <p>Labokids Bilingual</p>
              </div>
            </li>
          </ul>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SlidingDownNavigationMenuInner;

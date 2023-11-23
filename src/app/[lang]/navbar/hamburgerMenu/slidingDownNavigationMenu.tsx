'use client';

import { useGlobalContext } from '../../context/globalContext';
import { motion, AnimatePresence } from 'framer-motion';
import DropdownItemsList from './dropdownItemsList';
import { useEffect, useRef } from 'react';
import LanguageSelect from '../../common/languageSelect/languageSelect';

const SlidingDownNavigationMenu = () => {
  const { burgerMenuOpen, setBurgerMenuOpen } = useGlobalContext();

  useEffect(() => {
    if (burgerMenuOpen) {
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = 'scroll';
      };
    }
    return;
  }, [burgerMenuOpen]);

  const windowRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        windowRef.current &&
        !windowRef.current.contains(event.target as Node)
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

  return (
    <AnimatePresence mode={'sync'}>
      {burgerMenuOpen && (
        <motion.div
          ref={windowRef}
          className=" absolute left-0 top-0 z-10 flex  w-full flex-col items-center rounded-bl-2xl rounded-br-2xl bg-blue-100 p-4 lg:hidden"
          initial={{ y: -400, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -400, opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <DropdownItemsList />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SlidingDownNavigationMenu;

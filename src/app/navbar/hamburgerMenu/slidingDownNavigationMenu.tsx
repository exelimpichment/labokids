'use client';

import { useGlobalContext } from '../../context/globalContext';
import { motion, AnimatePresence } from 'framer-motion';
import DropdownItemsList from './dropdownItemsList';

const SlidingDownNavigationMenu = () => {
  const { burgerMenuOpen } = useGlobalContext();
  return (
    <AnimatePresence mode={'sync'}>
      {burgerMenuOpen && (
        <motion.div
          className=" absolute left-0 top-0 z-10 flex  w-full flex-col items-center rounded-bl-2xl rounded-br-2xl bg-blue-100 p-4 lg:hidden"
          initial={{ y: -250, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -250, opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          <DropdownItemsList />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SlidingDownNavigationMenu;

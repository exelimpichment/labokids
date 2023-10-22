'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useGlobalContext } from '../../context/globalContext';
import DropdownItemsList from './dropdownItemsList';

const HamburgerFallDown = () => {
  const { burgerMenuOpen } = useGlobalContext();

  return (
    <AnimatePresence>
      {burgerMenuOpen && (
        <motion.div
          className={` lg:hidden `}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <DropdownItemsList />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default HamburgerFallDown;

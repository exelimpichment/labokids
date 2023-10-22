'use client';

import { m, AnimatePresence } from 'framer-motion';
import { useGlobalContext } from '../context/globalContext';

const Backdrop = () => {
  const { burgerMenuOpen } = useGlobalContext();

  return (
    <AnimatePresence>
      {burgerMenuOpen && (
        <m.div
          className="fixed left-0 top-0 z-0 h-screen w-screen bg-black"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          exit={{ opacity: 0 }}
        ></m.div>
      )}
    </AnimatePresence>
  );
};

export default Backdrop;

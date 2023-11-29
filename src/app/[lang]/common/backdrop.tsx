'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useGlobalContext } from '../context/globalContext';

const Backdrop = () => {
  const { burgerMenuOpen, contactUsDialogOpen } = useGlobalContext();

  return (
    <AnimatePresence>
      {(burgerMenuOpen || contactUsDialogOpen) && (
        <motion.div
          className="fixed left-0 top-0 z-0 h-[100lvh] w-screen bg-black"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          exit={{ opacity: 0 }}
        ></motion.div>
      )}
    </AnimatePresence>
  );
};

export default Backdrop;

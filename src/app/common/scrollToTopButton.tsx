'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { ChevronUp } from 'lucide-react';
import { useGlobalContext } from '../context/globalContext';

const ScrollToTopButton = () => {
  const { scrollToTop, isIntersecting } = useGlobalContext();
  return (
    <AnimatePresence>
      {isIntersecting && (
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          type="button"
          className="fixed bottom-4 right-4 flex h-12 w-12 items-center justify-center rounded-full bg-laboBlue p-1 transition-all duration-1000 hover:bg-slate-400"
          onClick={scrollToTop}
        >
          <ChevronUp size={32} />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTopButton;

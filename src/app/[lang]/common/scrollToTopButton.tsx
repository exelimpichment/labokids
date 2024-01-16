'use client';

import { ChevronUp, MapPin, Phone } from 'lucide-react';
import { useGlobalContext } from '../context/globalContext';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ScrollToTopButton = () => {
  const { scrollToTop, isIntersecting } = useGlobalContext();
  const [isPhoneOpen, setIsPhoneOpen] = useState(true);
  const [isGeoOpen, setIsGeoOpen] = useState(false);

  return (
    <div className="fixed bottom-4 left-4">
      {isIntersecting && (
        <button
          aria-label="scroll the page to top"
          type="button"
          className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-laboBlue p-1 transition-all duration-500 hover:bg-slate-400"
          onClick={scrollToTop}
        >
          <ChevronUp size={32} />
        </button>
      )}
      <div className="mb-2 flex">
        <button
          aria-label="open geolocation info popup"
          type="button"
          className="hidden h-12 w-12 items-center justify-center rounded-full bg-laboBlue p-1 transition-all duration-500 hover:bg-slate-400 lg:flex"
          onClick={() => setIsGeoOpen((prev) => !prev)}
        >
          <MapPin size={32} />
        </button>
        <AnimatePresence>
          {isGeoOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="ml-2 hidden flex-col items-start justify-center rounded-full bg-laboBlue px-4 text-sm lg:flex "
            >
              <p>Knapowskiego 23, Poznań - Labokids Montessori</p>
              <p>Krośnieńska 9, Poznań - Labokids Bilingual</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <div className="flex">
        <button
          aria-label="open phone info popup"
          type="button"
          className="flex h-12 w-12 items-center justify-center rounded-full bg-laboBlue p-1 transition-all duration-500 hover:bg-slate-400"
          onClick={() => setIsPhoneOpen((prev) => !prev)}
        >
          <Phone size={32} />
        </button>
        <AnimatePresence>
          {isPhoneOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="ml-2 flex items-center justify-center rounded-full bg-laboBlue px-2"
            >
              <a href="tel:+48 503 038 500">+48 503 038 500</a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ScrollToTopButton;

'use client';

import { HelpCircle } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const AdditionalInfo = ({ hint }: { hint: string }) => {
  const [open, setOpen] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.stopPropagation();
    setOpen((prev: boolean) => !prev);
  };

  const additionalInfoMenuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        additionalInfoMenuRef.current &&
        !additionalInfoMenuRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false);
      }
    };

    window.addEventListener('click', handleClickOutside);
    window.addEventListener('keydown', handleEscapeKey);

    return () => {
      window.removeEventListener('click', handleClickOutside);
      window.removeEventListener('keydown', handleEscapeKey);
    };
  }, [setOpen]);

  return (
    <div>
      <AnimatePresence>
        {open && (
          <motion.div
            ref={additionalInfoMenuRef}
            className="absolute bottom-[21px] left-[-18px] mb-2 w-[150px]  break-normal rounded-2xl bg-slate-300 p-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="break-words">{hint}</p>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        type="button"
        onClick={handleClick}
        className={`absolute bottom-[3.5px] left-[-21px] cursor-pointer rounded-full  hover:bg-laboBlue ${
          !open ? 'transparent' : 'bg-laboBlue'
        }`}
      >
        <HelpCircle size={18} />
      </button>
    </div>
  );
};

export default AdditionalInfo;

'use client';

import { HelpCircle } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const AdditionalInfo = () => {
  const [open, setOpen] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    console.log('test2');

    e.stopPropagation();
    setOpen((prev: boolean) => !prev);
  };

  return (
    <div>
      <AnimatePresence>
        {open && (
          <motion.div
            className="absolute bottom-[21px] left-[-18px] mb-2 h-[200px] w-[150px] overflow-y-scroll break-normal rounded-2xl bg-slate-300 p-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="break-words">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
              errorblanditiispraesentium eaque veniam architecto
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        type="button"
        onClick={handleClick}
        className={`absolute bottom-[3.5px] left-[-21px] cursor-pointer rounded-full  hover:bg-slate-300 ${
          !open ? 'transparent' : 'bg-slate-300'
        }`}
      >
        <HelpCircle size={18} />
      </button>
    </div>
  );
};

export default AdditionalInfo;

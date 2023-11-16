'use client';

import { ChevronUp } from 'lucide-react';
import { useGlobalContext } from '../context/globalContext';

const ScrollToTopButton = () => {
  const { scrollToTop, isIntersecting } = useGlobalContext();

  return (
    <>
      {isIntersecting && (
        <button
          type="button"
          className="fixed bottom-4 right-4 flex h-12 w-12 items-center justify-center rounded-full bg-laboBlue p-1 transition-all duration-500 hover:bg-slate-400"
          onClick={scrollToTop}
        >
          <ChevronUp size={32} />
        </button>
      )}
    </>
  );
};

export default ScrollToTopButton;

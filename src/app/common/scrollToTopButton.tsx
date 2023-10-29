'use client';

import { Button } from '@/components/ui/button';
import { ChevronUp } from 'lucide-react';
import { useGlobalContext } from '../context/globalContext';

const ScrollToTopButton = () => {
  const { scrolledView, setScrolledView, scrollToTop } = useGlobalContext();
  return (
    <Button
      type="button"
      variant={'outline'}
      className="fixed bottom-4 right-4 h-12 w-12 rounded-full bg-laboBlue p-1 transition-all duration-1000"
      onClick={scrollToTop}
    >
      <ChevronUp size={32} />
    </Button>
  );
};

export default ScrollToTopButton;

'use client';

import { Button } from '@/components/ui/button';
import { useGlobalContext } from '../../context/globalContext';

const ButtonsHero = () => {
  const { scrollToTopics } = useGlobalContext();

  return (
    <div className="flex w-full flex-row gap-3 py-5">
      <Button
        variant="outline"
        className="rounded border-transparent bg-laboOrange transition-all duration-500 hover:bg-white"
        onClick={scrollToTopics}
      >
        Read More
      </Button>
      <Button
        variant="outline"
        className="rounded border-transparent bg-white transition-all duration-500 hover:bg-gray-400"
      >
        Contact Us
      </Button>
    </div>
  );
};

export default ButtonsHero;

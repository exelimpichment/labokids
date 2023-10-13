'use client';

import { Button } from '@/components/ui/button';
import { useGlobalContext } from '../../context/globalContext';

interface IButtonsHero {
  position?: 'start' | 'end';
}

const ButtonsHero: React.FC<IButtonsHero> = ({ position = 'start' }) => {
  const { scrollToTopics } = useGlobalContext();

  return (
    <div className={`flex w-full flex-row justify-${position} gap-3 py-5`}>
      <Button
        variant="outline"
        className="rounded border-transparent bg-laboBlue transition-all duration-500 hover:bg-white"
        onClick={scrollToTopics}
      >
        Read More
      </Button>
      <Button
        variant="outline"
        className="rounded border-transparent bg-white hover:bg-slate-300"
      >
        Contact Us
      </Button>
    </div>
  );
};

export default ButtonsHero;

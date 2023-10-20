'use client';

import { Button } from '@/components/ui/button';
import { useGlobalContext } from '../context/globalContext';

interface IButtonsHero {
  buttonsPosition?: string;
}

const ButtonsHero: React.FC<IButtonsHero> = ({ buttonsPosition = 'start' }) => {
  const { contactUsDialogOpen, setContactUsDialog, scrollToTopics } =
    useGlobalContext();
  console.log('render');

  return (
    <div
      className={`flex w-full flex-row ${buttonsPosition} justify-center gap-3 py-5`}
    >
      <Button
        type="button"
        variant="outline"
        className="rounded border-transparent bg-laboBlue transition-all duration-500 hover:bg-white"
        onClick={scrollToTopics}
      >
        Read More
      </Button>
      <Button
        type="button"
        variant="outline"
        className="rounded border-transparent bg-blue-100 hover:bg-slate-300"
        onClick={() => setContactUsDialog(true)}
      >
        Contact Us
      </Button>
    </div>
  );
};

export default ButtonsHero;

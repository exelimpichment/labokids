'use client';

import { Button } from '@/components/ui/button';
import { useGlobalContext } from '../context/globalContext';
import ContactUsDialog from './contactUsDialog/contactUsDialog';
import { useEffect } from 'react';

interface IButtonsHero {
  buttonsPosition?: string;
}

const ButtonsHero: React.FC<IButtonsHero> = ({ buttonsPosition = 'start' }) => {
  const {
    setContactUsDialog,
    scrollToTopics,
    setIsIntersecting,
    isIntersectingRef,
  } = useGlobalContext();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        console.log(entry.isIntersecting);
        setIsIntersecting(!entry.isIntersecting);
      },
      { threshold: 0 }
    );

    if (isIntersectingRef.current !== null) {
      observer.observe(isIntersectingRef.current);
    }
    return () => observer.disconnect();
  }, [setIsIntersecting, isIntersectingRef]);

  return (
    <div
      className={`flex w-full flex-row ${buttonsPosition} justify-center gap-3 py-5`}
    >
      <Button
        ref={isIntersectingRef}
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
      <ContactUsDialog />
    </div>
  );
};

export default ButtonsHero;

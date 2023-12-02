'use client';

import { Button } from '@/components/ui/button';
import { useGlobalContext } from '../context/globalContext';
import { MouseEvent, useEffect } from 'react';
import { titleFont } from './fonts';

interface IButtonsHero {
  buttonsPosition?: string;
  heroPageButtonsText: { readMore: string; contactUs: string };
}

const ButtonsHero: React.FC<IButtonsHero> = ({
  buttonsPosition = 'start',
  heroPageButtonsText: { readMore, contactUs },
}) => {
  const {
    setContactUsDialogOpen,
    scrollToTopics,
    setIsIntersecting,
    isIntersectingRef,
  } = useGlobalContext();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(!entry.isIntersecting);
      },
      { threshold: 0 }
    );

    if (isIntersectingRef.current !== null) {
      observer.observe(isIntersectingRef.current);
    }
    return () => observer.disconnect();
  }, [setIsIntersecting, isIntersectingRef]);

  const handleClick = (
    e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>
  ) => {
    e.stopPropagation();

    setContactUsDialogOpen(true);
  };

  return (
    <div
      className={`flex w-full flex-col md:flex-row ${buttonsPosition} justify-center gap-3 py-5`}
    >
      <Button
        ref={isIntersectingRef}
        type="button"
        variant="outline"
        className={`${titleFont.className} rounded border-transparent bg-laboBlue text-base transition-all duration-500 hover:bg-white`}
        onClick={scrollToTopics}
      >
        {readMore}
      </Button>
      <Button
        type="button"
        variant="outline"
        className={`${titleFont.className} rounded border-transparent bg-blue-100 text-base hover:bg-slate-300`}
        onClick={(e) => handleClick(e)}
      >
        {contactUs}
      </Button>
    </div>
  );
};

export default ButtonsHero;

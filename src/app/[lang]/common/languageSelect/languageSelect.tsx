import { Locale, i18n } from '@/i18n.config';
import { ChevronDown } from 'lucide-react';
import { titleFont } from '../fonts';
import { useEffect, useRef, useState } from 'react';
import DropdownLanguageList from './dropdownLanguageList';
import { AnimatePresence } from 'framer-motion';

const LanguageSelect = ({ lang }: { lang: Locale }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleClick = () => {
    setIsOpen((p) => !p);
  };

  const LanguageSelectRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        LanguageSelectRef.current &&
        !LanguageSelectRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    window.addEventListener('click', handleClickOutside);
    window.addEventListener('keydown', handleEscapeKey);

    return () => {
      window.removeEventListener('click', handleClickOutside);
      window.removeEventListener('keydown', handleEscapeKey);
    };
  }, [setIsOpen]);

  return (
    <div className="w-14" ref={LanguageSelectRef}>
      <button
        className={`${titleFont.className} flex cursor-pointer items-center p-1  text-xl lg:text-lg xl:text-[22px] xl:leading-[1.85rem]`}
        onClick={handleClick}
      >
        <span>{lang}</span>
        <div className={`${isOpen ? 'rotate-180' : ''} transition-all`}>
          <ChevronDown size={26} />
        </div>
      </button>
      <AnimatePresence>
        {isOpen && <DropdownLanguageList lang={lang} />}
      </AnimatePresence>
    </div>
  );
};

export default LanguageSelect;

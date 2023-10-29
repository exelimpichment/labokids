'use client';

import { useGlobalContext } from '../../context/globalContext';

const HamburgerTrigger = () => {
  const { burgerMenuOpen, setBurgerMenuOpen } = useGlobalContext();

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setBurgerMenuOpen(!burgerMenuOpen);
  };
  return (
    <button
      type="button"
      className={`mb-2 flex h-6  w-7 flex-col justify-between lg:hidden`}
      onClick={handleClick}
    >
      <div
        className={`h-1 w-7 origin-right rounded-xl bg-black transition-all duration-500 ${
          burgerMenuOpen ? 'rotate-[-45deg]' : null
        }`}
      ></div>
      <div
        className={`h-1 w-7 rounded-xl bg-black transition-all  duration-500 ${
          burgerMenuOpen ? 'translate-x-[-8px] opacity-0' : null
        }`}
      ></div>
      <div
        className={`h-1 w-7 origin-right rounded-xl bg-black transition-all duration-500 ${
          burgerMenuOpen ? 'rotate-[45deg]' : null
        }`}
      ></div>
    </button>
  );
};

export default HamburgerTrigger;

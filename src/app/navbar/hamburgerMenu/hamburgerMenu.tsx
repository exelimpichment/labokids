import HamburgerFallDown from './HamburgerFallDown';
import HamburgerTrigger from './HamburgerTrigger';

const HamburgerMenu = () => {
  return (
    <div className="absolute right-5 top-5 z-50 flex flex-col items-end ">
      <HamburgerTrigger />
      <HamburgerFallDown />
    </div>
  );
};

export default HamburgerMenu;

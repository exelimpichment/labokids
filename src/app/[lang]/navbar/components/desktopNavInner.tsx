import DesktopNavLogo from './desktopNavLogo';
import DesktopNavbarLinkList from './desktopNavbarLinkList';

const DesktopNavInner = () => {
  return (
    <div className="hidden h-16 items-center justify-between lg:flex 2xl:h-20">
      <DesktopNavLogo />
      <DesktopNavbarLinkList />
    </div>
  );
};

export default DesktopNavInner;

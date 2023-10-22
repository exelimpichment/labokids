import Backdrop from '../common/backdrop';
import Container from '../common/container';
import { useGlobalContext } from '../context/globalContext';
import DesktopNavLogo from './components/desktopNavLogo';
import DesktopNavbarLinkList from './components/desktopNavbarLinkList';
import HamburgerMenu from './hamburgerMenu';

const Navbar = () => {
  return (
    <nav className="min-h-14 absolute left-0 top-0 z-10 w-full xl:px-5">
      <Container>
        <div className="hidden h-14 items-center justify-between lg:flex">
          <DesktopNavLogo />
          <DesktopNavbarLinkList />
        </div>
      </Container>
      <HamburgerMenu />
    </nav>
  );
};

export default Navbar;

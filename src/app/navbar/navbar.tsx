import Container from '../common/container';
import DesktopNavInner from './components/desktopNavInner';
import HamburgerMenu from './hamburgerMenu';

const Navbar = () => {
  return (
    <nav className="min-h-14 absolute left-0 top-4 z-10 w-full xl:px-5">
      <Container>
        <DesktopNavInner />
      </Container>
      <HamburgerMenu />
    </nav>
  );
};

export default Navbar;

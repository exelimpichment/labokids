import { Locale } from '@/i18n.config';
import Container from '../common/container';
import DesktopNavInner from './components/desktopNavInner';
import HamburgerMenu from './hamburgerMenu';

const Navbar = ({ lang }: { lang: Locale }) => {
  return (
    <nav className="min-h-14 absolute left-0 top-4 z-10 w-full xl:px-5">
      <Container>
        <DesktopNavInner lang={lang} />
      </Container>
      <HamburgerMenu lang={lang} />
    </nav>
  );
};

export default Navbar;

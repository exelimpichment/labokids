'use client';

import Container from '../../common/container';
import useRoutes from '../../hooks/useRoutes';
import DesktopNavbarLinkList from './desktopNavbarLinkList';
import DesktopNavLogo from './desktopNavLogo';

const DesktopNav = () => {
  const routes = useRoutes();
  return (
    <nav className="absolute left-0 top-0 z-50  hidden h-14 w-full lg:block  xl:px-5">
      <Container>
        <div className="flex h-14 items-center justify-between">
          <DesktopNavLogo />
          <DesktopNavbarLinkList />
        </div>
      </Container>
    </nav>
  );
};

export default DesktopNav;

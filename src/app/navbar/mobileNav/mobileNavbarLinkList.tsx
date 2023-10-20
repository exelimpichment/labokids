'use client';

import useRoutes from '../../hooks/useRoutes';
import { navbarLinks } from '../navbarData';
import NavbarLink from './mobileNavbarLink';

const NavbarLinkList = () => {
  const routes = useRoutes();
  return (
    <div className="flex flex-col gap-3">
      {routes.map((route) => (
        <NavbarLink key={route.id} route={route}></NavbarLink>
      ))}
    </div>
  );
};

export default NavbarLinkList;

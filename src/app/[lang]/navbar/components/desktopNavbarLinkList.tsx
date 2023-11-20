'use client';

import { titleFont } from '../../common/fonts';
import useRoutes from '../../hooks/useRoutes';
import DesktopNavbarLink from './desktopNavbarLink';

const DesktopNavbarLinkList = () => {
  const routes = useRoutes();
  return (
    <ul
      className={`${titleFont.className} flex gap-5 text-xl xl:gap-7 xl:text-2xl`}
    >
      {routes.map((route) => (
        <DesktopNavbarLink key={route.id} route={route}></DesktopNavbarLink>
      ))}
    </ul>
  );
};

export default DesktopNavbarLinkList;

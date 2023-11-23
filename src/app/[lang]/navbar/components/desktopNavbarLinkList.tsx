'use client';

import { titleFont } from '../../common/fonts';
import LanguageSelect from '../../common/languageSelect/languageSelect';
import useRoutes from '../../hooks/useRoutes';
import DesktopNavbarLink from './desktopNavbarLink';

const DesktopNavbarLinkList = () => {
  const routes = useRoutes();
  return (
    <div className="flex items-center justify-center gap-5 xl:gap-12">
      <ul
        className={`${titleFont.className} flex gap-5 text-lg xl:gap-7  xl:text-[22px] xl:leading-[1.85rem]`}
      >
        {routes.map((route) => (
          <DesktopNavbarLink key={route.id} route={route}></DesktopNavbarLink>
        ))}
      </ul>
      <LanguageSelect />
    </div>
  );
};

export default DesktopNavbarLinkList;

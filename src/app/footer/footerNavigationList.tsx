'use client';

import useRoutes from '../hooks/useRoutes';
import FooterNavigationListItem from './footerNavigationListItem';

const FooterNavigationList = () => {
  const routes = useRoutes();
  return (
    <ul className="flex h-16 items-center justify-center px-2">
      <div className="flex flex-wrap items-center justify-center gap-4 lg:gap-10">
        {routes.map((route) => (
          <FooterNavigationListItem
            key={route.id}
            itemInformation={{
              href: route.href,
              label: route.label,
              active: route.active,
            }}
          />
        ))}
      </div>
    </ul>
  );
};

export default FooterNavigationList;

'use client';

import useRoutes from '../../hooks/useRoutes';
import { navbarLinks } from '../navbarData';
import DropdownItem from './dropdownItem';

const DropdownItemsList = () => {
  const routes = useRoutes();
  return (
    <ul className="flex flex-col items-start gap-3 text-lg">
      {routes.map((route) => (
        <DropdownItem key={route.id} route={route} />
      ))}
    </ul>
  );
};

export default DropdownItemsList;

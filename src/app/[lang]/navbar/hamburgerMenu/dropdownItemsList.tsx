'use client';

import { Phone } from 'lucide-react';
import useRoutes from '../../hooks/useRoutes';
import DropdownItem from './dropdownItem';

const DropdownItemsList = () => {
  const routes = useRoutes();
  return (
    <ul className="flex flex-col items-start gap-3 text-2xl">
      {routes.map((route) => (
        <DropdownItem key={route.id} route={route} />
      ))}
      <li className="mt-3 flex items-center gap-3 px-3 text-[1.3rem] text-laboBlue">
        <div>
          <Phone size={24} />
        </div>
        <a href="tel:+48 503 038 500">+48 503 038 500</a>
      </li>
    </ul>
  );
};

export default DropdownItemsList;
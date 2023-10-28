import React from 'react';
import Link from 'next/link';

interface IFooterNavigationListItem {
  itemInformation: { href: string; label: string; active: boolean };
}

const FooterNavigationListItem: React.FC<IFooterNavigationListItem> = ({
  itemInformation: { href, label, active },
}) => {
  return (
    <li
      className={` ${active ? 'text-black' : 'text-gray-400'} ${
        active ? 'hover:text-black' : 'hover:text-gray-500'
      }`}
    >
      <Link href={href}>{label}</Link>
    </li>
  );
};

export default FooterNavigationListItem;

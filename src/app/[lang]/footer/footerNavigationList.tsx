'use client';

import { Locale } from '@/i18n.config';
import { usePathname } from 'next/navigation';
import { TNavigation } from '@/lib/types';
import Link from 'next/link';
import { titleFont } from '../common/fonts';
import { basicPathnameArr } from '@/lib/basicPathnameArr';

interface IDesktopNavbarLinkList {
  navigation: TNavigation;
  lang: Locale;
}

const FooterNavigationList: React.FC<IDesktopNavbarLinkList> = ({
  navigation,
  lang,
}) => {
  const pathname = usePathname();

  return (
    <div
      className={` ${
        !basicPathnameArr.includes(pathname) ? 'flex' : 'hidden'
      } min-h-[50px] items-center justify-center border-t border-gray-200  px-2 pt-2 `}
    >
      <ul
        className={`flex flex-wrap items-center justify-center gap-4 lg:gap-10 ${titleFont.className} text-lg`}
      >
        {Object.entries(navigation).map(([key, value]) => (
          <li
            key={key}
            className={`${
              pathname === `/${lang}/${key}` ? 'text-black' : 'text-gray-400'
            } ${
              pathname !== `/${lang}/${key}`
                ? 'hover:text-black'
                : 'hover:text-gray-500'
            }`}
          >
            <Link href={`/${lang}/${key}`}>{value}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterNavigationList;

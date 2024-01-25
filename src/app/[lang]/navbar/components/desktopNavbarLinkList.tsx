'use client';

import Link from 'next/link';
import { titleFont } from '../../common/fonts';
import LanguageSelect from '../../common/languageSelect/languageSelect';
import { TNavigation } from '@/lib/types';
import { Locale } from '@/i18n.config';
import { usePathname } from 'next/navigation';

interface IDesktopNavbarLinkList {
  navigation: TNavigation;
  lang: Locale;
}

const DesktopNavbarLinkList: React.FC<IDesktopNavbarLinkList> = ({
  navigation,
  lang,
}) => {
  const pathname = usePathname();

  return (
    <div className="flex items-center justify-center gap-5 xl:gap-12">
      <ul
        className={`${titleFont.className} ${
          pathname.length > 3 ? 'flex' : 'hidden'
        } gap-5 text-lg xl:gap-7  xl:text-[22px] xl:leading-[1.85rem]`}
      >
        {Object.entries(navigation).map(([key, value]) => (
          <li
            key={key}
            className={`${
              pathname === `/${lang}/${key}` ? 'text-black' : 'text-white'
            } ${pathname !== `/${lang}/${key}` ? 'hover:text-gray-300' : ''}`}
          >
            <Link href={`/${lang}/${key}`}>{value}</Link>
          </li>
        ))}
      </ul>
      <LanguageSelect lang={lang} />
    </div>
  );
};

export default DesktopNavbarLinkList;

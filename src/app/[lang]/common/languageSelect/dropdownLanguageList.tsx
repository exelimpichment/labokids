import { Locale, i18n } from '@/i18n.config';
import { titleFont } from '../fonts';
import { motion } from 'framer-motion';
import { Dot } from 'lucide-react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const DropdownLanguageList = ({ lang }: { lang: Locale }) => {
  const pathName = usePathname();

  const redirectedPathName = (locale: Locale) => {
    if (!pathName) return '/';
    const segments = pathName.split('/');
    segments[1] = locale;
    return segments.join('/');
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className={`${titleFont.className} absolute w-14 translate-x-[-10px] cursor-pointer  text-lg xl:text-[22px] xl:leading-[1.85rem]`}
    >
      <ul className=" p-1">
        {i18n.locales.map((locale) => {
          return (
            <li key={locale} className="cursor-pointer hover:text-gray-300 ">
              <Link
                href={redirectedPathName(locale)}
                className="flex items-center"
              >
                <div className={`${lang === locale ? '' : 'invisible'} hover:`}>
                  <Dot />
                </div>
                <span> {locale}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </motion.div>
  );
};

export default DropdownLanguageList;

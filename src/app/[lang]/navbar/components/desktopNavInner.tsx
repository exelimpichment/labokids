import { Locale } from '@/i18n.config';
import DesktopNavLogo from './desktopNavLogo';
import DesktopNavbarLinkList from './desktopNavbarLinkList';
import { getDictionary } from '@/lib/dictionary';

const DesktopNavInner = async ({ lang }: { lang: Locale }) => {
  const { navigation } = await getDictionary(lang);
  return (
    <div className="hidden h-16 items-center justify-between lg:flex 2xl:h-20">
      <DesktopNavLogo />
      <DesktopNavbarLinkList navigation={navigation} lang={lang} />
    </div>
  );
};

export default DesktopNavInner;

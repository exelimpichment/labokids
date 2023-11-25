import { Locale } from '@/i18n.config';
import SlidingDownNavigationMenuInner from './SlidingDownNavigationMenuInner';
import { getDictionary } from '@/lib/dictionary';

const SlidingDownNavigationMenu = async ({ lang }: { lang: Locale }) => {
  const { navigation } = await getDictionary(lang);

  return (
    <div>
      <SlidingDownNavigationMenuInner lang={lang} navigation={navigation} />
    </div>
  );
};

export default SlidingDownNavigationMenu;

import { Locale } from '@/i18n.config';

import { getDictionary } from '@/lib/dictionary';
import SlidingDownNavigationMenuInner from './slidingDownNavigationMenuInner';

const SlidingDownNavigationMenu = async ({ lang }: { lang: Locale }) => {
  const { navigation } = await getDictionary(lang);

  return (
    <div>
      <SlidingDownNavigationMenuInner lang={lang} navigation={navigation} />
    </div>
  );
};

export default SlidingDownNavigationMenu;

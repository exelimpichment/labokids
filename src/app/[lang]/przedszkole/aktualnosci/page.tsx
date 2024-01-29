import { Locale } from '@/i18n.config';
import { getDictionary } from '@/lib/dictionary';
import HomeHeroDummy from '../../common/homeHeroDummy';

export default async function Home({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const {
    heroPageMontessori,
    heroPageButtonsText,
    heroPageParty,
    heroPageBilingual,
    heroPageWorkshops,
  } = await getDictionary(lang);

  return (
    <>
      <HomeHeroDummy
        content={{
          heroPageMontessori,
          heroPageButtonsText,
          heroPageParty,
          heroPageBilingual,
          heroPageWorkshops,
        }}
      />
    </>
  );
}

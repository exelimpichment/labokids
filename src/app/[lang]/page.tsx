import { Locale } from '@/i18n.config';
import HomeHero from './home/homeHero';
import { getDictionary } from '@/lib/dictionary';

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
      <HomeHero
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

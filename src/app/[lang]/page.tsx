import { Locale } from '@/i18n.config';
import HomeHero from './home/homeHero';

export default function Home({ lang }: { lang: Locale }) {
  return (
    <>
      <HomeHero />
    </>
  );
}

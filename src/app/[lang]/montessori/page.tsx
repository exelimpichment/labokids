import PageHero from '../common/pageHero';
import Price from '../common/price/price';
import ScrollToComponent from '../common/scrollToComponent';
import SectionHeader from '../common/sectionHeader';

import MontessoriMethodsList from './MontessoriMethodsList/montessoriMethodsList';
import StaticGallery from '../common/staticGallery/staticGallery';
import { workshopGalleryPhotoSets } from '../workshops/workshopData';

import {
  aboutMontessoriHeaderContent,
  imagesMontessoriHeaderContent,
  montessoriPricingData,
  priceMontessoriHeaderContent,
  teachersMontessoriCarouselData,
  teachersMontessoriHeaderContent,
} from './montessoriData';
import ScrollToTopComponent from '../common/scrollToTopComponent';

import TeachersCarousel from '../common/teachersCarousel/teachersCarousel';
import { getDictionary } from '@/lib/dictionary';
import { Locale } from '@/i18n.config';

const Montessori = async ({
  params: { lang },
}: {
  params: { lang: Locale };
}) => {
  const { heroPageMontessori, heroPageButtonsText } = await getDictionary(lang);

  return (
    <main className="content">
      <ScrollToTopComponent />
      <PageHero content={{ ...heroPageMontessori, heroPageButtonsText }} />
      <ScrollToComponent />
      <SectionHeader content={aboutMontessoriHeaderContent} />
      <MontessoriMethodsList />
      <SectionHeader content={imagesMontessoriHeaderContent} />
      <StaticGallery galleryImages={workshopGalleryPhotoSets['baloniki']} />
      <SectionHeader content={teachersMontessoriHeaderContent} />
      <TeachersCarousel carouselData={teachersMontessoriCarouselData} />
      <SectionHeader content={priceMontessoriHeaderContent} />
      <Price priceData={montessoriPricingData} />
    </main>
  );
};

export default Montessori;

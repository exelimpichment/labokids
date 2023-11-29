import PageHero from '../common/pageHero';
import Price from '../common/price/price';
import ScrollToComponent from '../common/scrollToComponent';
import SectionHeader from '../common/sectionHeader';

import MontessoriMethodsList from './MontessoriMethodsList/montessoriMethodsList';
import StaticGallery from '../common/staticGallery/staticGallery';

import ScrollToTopComponent from '../common/scrollToTopComponent';

import TeachersCarousel from '../common/teachersCarousel/teachersCarousel';
import { getDictionary } from '@/lib/dictionary';
import { Locale } from '@/i18n.config';
import { montessoriGalleryPhotoSet } from './montessoriImageStoringObj';

const Montessori = async ({
  params: { lang },
}: {
  params: { lang: Locale };
}) => {
  const {
    heroPageMontessori,
    heroPageButtonsText,
    aboutMontessoriHeaderContent,
    montessoriMethodsList,
    imagesMontessoriHeaderContent,
    teachersMontessoriHeaderContent,
    priceMontessoriHeaderContent,
    montessoriPricingData,
    teachersMontessoriCarouselData,
  } = await getDictionary(lang);

  return (
    <main className="content">
      <ScrollToTopComponent />
      <PageHero content={{ ...heroPageMontessori, heroPageButtonsText }} />
      <ScrollToComponent />
      <SectionHeader content={aboutMontessoriHeaderContent} />
      <MontessoriMethodsList montessoriMethodsList={montessoriMethodsList} />
      <SectionHeader
        content={imagesMontessoriHeaderContent}
        animatedPicture={true}
      />

      <StaticGallery galleryImages={montessoriGalleryPhotoSet} />
      <SectionHeader content={teachersMontessoriHeaderContent} />
      <TeachersCarousel carouselData={teachersMontessoriCarouselData} />
      <SectionHeader content={priceMontessoriHeaderContent} />
      <Price priceData={montessoriPricingData} />
    </main>
  );
};

export default Montessori;

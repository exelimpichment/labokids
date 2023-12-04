import PageHero from '../common/pageHero';
import Price from '../common/price/price';
import ScrollToComponent from '../common/scrollToComponent';
import SectionHeader from '../common/sectionHeader';
import StaticGallery from '../common/staticGallery/staticGallery';

import ScrollToTopComponent from '../common/scrollToTopComponent';
import TeachersCarousel from '../common/teachersCarousel/teachersCarousel';
import { Locale } from '@/i18n.config';
import { getDictionary } from '@/lib/dictionary';
import BilingualProgramList from './bilingualProgram/bilingualProgramList';
import { bilingualGalleryPhotoSet } from './bilingualImageStoringObj';

const Bilingual = async ({
  params: { lang },
}: {
  params: { lang: Locale };
}) => {
  const {
    heroPageBilingual,
    heroPageButtonsText,
    aboutBilingualHeaderContent,
    bilingualProgramContent,
    imagesBilingualHeaderContent,
    teachersBilingualHeaderContent,
    teachersBilingualCarouselData,
    priceBilingualHeaderContent,
    bilingualPricingData,
  } = await getDictionary(lang);

  return (
    <main className="content">
      <ScrollToTopComponent />
      <PageHero content={{ ...heroPageBilingual, heroPageButtonsText }} />
      <ScrollToComponent />
      <SectionHeader
        content={aboutBilingualHeaderContent}
        animatedPicture={true}
      />
      <BilingualProgramList content={bilingualProgramContent} />
      <SectionHeader content={imagesBilingualHeaderContent} />
      <StaticGallery galleryImages={bilingualGalleryPhotoSet} />
      <SectionHeader content={teachersBilingualHeaderContent} />
      <TeachersCarousel carouselData={teachersBilingualCarouselData} />
      <SectionHeader content={priceBilingualHeaderContent} />
      <Price priceData={bilingualPricingData} />
    </main>
  );
};

export default Bilingual;

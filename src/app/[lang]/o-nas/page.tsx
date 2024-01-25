import Price from '../common/price/price';
import ScrollToComponent from '../common/scrollToComponent';
import SectionHeader from '../common/sectionHeader';
import StaticGallery from '../common/staticGallery/staticGallery';

import ScrollToTopComponent from '../common/scrollToTopComponent';
import TeachersCarousel from '../common/teachersCarousel/teachersCarousel';
import { Locale } from '@/i18n.config';

import BilingualProgramList from '../../[lang]/bilingual/bilingualProgram/bilingualProgramList';
import { bilingualGalleryPhotoSet } from '../bilingual/bilingualImageStoringObj';
import { getDictionary } from '@/lib/dictionary';
import PageHeroDummy from '../common/PageHeroDummy';

const Kontakt = async ({ params: { lang } }: { params: { lang: Locale } }) => {
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
      <PageHeroDummy content={{ ...heroPageBilingual, heroPageButtonsText }} />
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

export default Kontakt;

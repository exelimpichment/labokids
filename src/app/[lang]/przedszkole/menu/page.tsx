import { getDictionary } from '@/lib/dictionary';
import ScrollToTopComponent from '../../common/scrollToTopComponent';
import PageHeroDummy from '../../common/PageHeroDummy';
import SectionHeader from '../../common/sectionHeader';
import BilingualProgramList from '../../bilingual/bilingualProgram/bilingualProgramList';
import { bilingualGalleryPhotoSet } from '../../bilingual/bilingualImageStoringObj';
import Price from '../../common/price/price';
import { Locale } from '@/i18n.config';
import ScrollToComponent from '../../common/scrollToComponent';
import StaticGallery from '../../common/staticGallery/staticGallery';
import TeachersCarousel from '../../common/teachersCarousel/teachersCarousel';

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

import PageHero from '../common/pageHero';
import Price from '../common/price/price';
import ScrollToComponent from '../common/scrollToComponent';
import SectionHeader from '../common/sectionHeader';

import StaticGallery from '../common/staticGallery/staticGallery';
import { workshopGalleryPhotoSets } from '../workshops/workshopData';

import {
  aboutBilingualHeaderContent,
  bilingualHeroContent,
  bilingualPricingData,
  bilingualTeachersHeader,
  imagesBilingualHeaderContent,
  priceBilingualHeaderContent,
  teachersBilingualCarouselData,
} from './bilingualData';
import ScrollToTopComponent from '../common/scrollToTopComponent';
import TeachersCarousel from '../common/teachersCarousel/teachersCarousel';
import BilingualProgram from './bilingualProgram';

const Bilingual = () => {
  return (
    <main className="content">
      <ScrollToTopComponent />
      <PageHero content={bilingualHeroContent} />
      <ScrollToComponent />
      <SectionHeader content={aboutBilingualHeaderContent} />
      <BilingualProgram />
      <SectionHeader content={imagesBilingualHeaderContent} />
      <StaticGallery galleryImages={workshopGalleryPhotoSets['baloniki']} />
      <SectionHeader content={bilingualTeachersHeader} />
      <TeachersCarousel carouselData={teachersBilingualCarouselData} />
      <SectionHeader content={priceBilingualHeaderContent} />
      <Price priceData={bilingualPricingData} />
    </main>
  );
};

export default Bilingual;

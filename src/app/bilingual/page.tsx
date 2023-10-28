import PageHero from '../common/pageHero';
import Price from '../common/price/price';
import ScrollToComponent from '../common/scrollToComponent';
import SectionHeader from '../common/sectionHeader';
import { imagesHeaderContent } from '../montessori/montessoriData';
import StaticGallery from '../common/staticGallery/staticGallery';
import { workshopGalleryPhotoSets } from '../workshops/workshopData';

import {
  aboutBilingualHeaderContent,
  bilingualHeroContent,
  bilingualPricingData,
  bilingualTeachersHeader,
  priceHeaderContent,
} from './bilingualData';
import ScrollToTopComponent from '../common/scrollToTopComponent';

const Bilingual = () => {
  return (
    <main className="content">
      <ScrollToTopComponent />
      <PageHero content={bilingualHeroContent} />
      <ScrollToComponent />
      <SectionHeader content={aboutBilingualHeaderContent} />
      {/* anny s phot  goe here*/}
      <SectionHeader content={imagesHeaderContent} />
      <StaticGallery galleryImages={workshopGalleryPhotoSets['baloniki']} />
      <SectionHeader content={bilingualTeachersHeader} />
      <SectionHeader content={priceHeaderContent} />
      <Price />
    </main>
  );
};

export default Bilingual;

import PageHero from '../common/pageHero';
import Price from '../common/price/price';
import ScrollToComponent from '../common/scrollToComponent';
import SectionHeader from '../common/sectionHeader';
import { imagesHeaderContent } from '../montessori/montessoriData';
import StaticGallery from '../common/staticGallery/staticGallery';
import { workshopGalleryPhotoSets } from '../workshops/workshopData';
import OurTeachers from '../common/teachersGallery/ourTeachers';

import {
  bilingualHeroContent,
  bilingualTeachersHeader,
  priceHeaderContent,
} from './bilingualData';

const Bilingual = () => {
  return (
    <main className="content">
      <PageHero content={bilingualHeroContent} />
      <ScrollToComponent />
      <SectionHeader content={imagesHeaderContent} />
      <StaticGallery galleryImages={workshopGalleryPhotoSets['baloniki']} />
      <SectionHeader content={bilingualTeachersHeader} />
      <OurTeachers />
      <SectionHeader content={priceHeaderContent} />
      <Price />
    </main>
  );
};

export default Bilingual;

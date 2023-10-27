import ImageGallery from '../common/navigatedGallery/ImageGallery';
import OurTeachers from '../common/TeachersGallery/ourTeachers';
import PageHero from '../common/pageHero';
import Price from '../common/price/price';
import ScrollToComponent from '../common/scrollToComponent';
import SectionHeader from '../common/sectionHeader';

import { imagesHeaderContent } from '../montessori/montessoriData';
import {
  bilingualHeroContent,
  bilingualTeachersHeader,
  priceHeaderContent,
} from './bilingualData';
import StaticGallery from '../common/staticGallery/staticGallery';
import { workshopGalleryPhotoSets } from '../workshops/workshopData';

const Bilingual = () => {
  return (
    <main>
      <PageHero content={bilingualHeroContent} />
      <ScrollToComponent />
      <SectionHeader content={imagesHeaderContent} />
      <StaticGallery galleryImages={workshopGalleryPhotoSets['baloniki']} />
      <SectionHeader content={bilingualTeachersHeader} />
      <OurTeachers />
      <SectionHeader content={priceHeaderContent} />
      <Price />
      <div className="mt-96"></div>
    </main>
  );
};

export default Bilingual;

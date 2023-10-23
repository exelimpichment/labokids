import ImageGallery from '../common/gallery/ImageGallery';
import PageHero from '../common/pageHero';
import Price from '../common/price/price';
import ScrollToComponent from '../common/scrollToComponent';
import SectionHeader from '../common/sectionHeader';
import OurTeachers from '../common/TeachersGallery/ourTeachers';
import { priceHeaderContent } from '../party/partyData';

import {
  aboutMontessoriHeaderContent,
  imagesHeaderContent,
  montessoriHeroContent,
  teachersHeaderContent,
} from './montessoriData';
import MontessoriMethodsList from './MontessoriMethodsList/montessoriMethodsList';

const Montessori = () => {
  return (
    <main>
      <PageHero content={montessoriHeroContent} />
      <ScrollToComponent />
      <SectionHeader content={aboutMontessoriHeaderContent} />
      <MontessoriMethodsList />
      <SectionHeader content={imagesHeaderContent} />
      <ImageGallery />
      <SectionHeader content={teachersHeaderContent} />
      <OurTeachers />
      <SectionHeader content={priceHeaderContent} />
      <Price />
      <div className="mt-96"></div>
    </main>
  );
};

export default Montessori;

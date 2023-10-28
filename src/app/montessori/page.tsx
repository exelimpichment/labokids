import PageHero from '../common/pageHero';
import Price from '../common/price/price';
import ScrollToComponent from '../common/scrollToComponent';
import SectionHeader from '../common/sectionHeader';

import { priceHeaderContent } from '../party/partyData';

import {
  aboutMontessoriHeaderContent,
  imagesHeaderContent,
  montessoriHeroContent,
  teachersHeaderContent,
} from './montessoriData';
import MontessoriMethodsList from './MontessoriMethodsList/montessoriMethodsList';
import StaticGallery from '../common/staticGallery/staticGallery';
import { workshopGalleryPhotoSets } from '../workshops/workshopData';
import OurTeachers from '../common/teachersGallery/ourTeachers';

const Montessori = () => {
  return (
    <main className="content">
      <PageHero content={montessoriHeroContent} />
      <ScrollToComponent />
      <SectionHeader content={aboutMontessoriHeaderContent} />
      <MontessoriMethodsList />
      <SectionHeader content={imagesHeaderContent} />
      <StaticGallery galleryImages={workshopGalleryPhotoSets['baloniki']} />
      <SectionHeader content={teachersHeaderContent} />
      <OurTeachers />
      <SectionHeader content={priceHeaderContent} />
      <Price />
    </main>
  );
};

export default Montessori;

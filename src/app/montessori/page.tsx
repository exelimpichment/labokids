import { Suspense } from 'react';
import ImageGallery from '../common/navigatedGallery/ImageGallery';
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
import StaticGallery from '../common/staticGallery/staticGallery';
import { workshopGalleryPhotoSets } from '../workshops/workshopData';

const Montessori = () => {
  return (
    <main>
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
      <div className="mt-96"></div>
    </main>
  );
};

export default Montessori;

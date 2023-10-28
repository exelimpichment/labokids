import PageHero from '../common/pageHero';
import Price from '../common/price/price';
import ScrollToComponent from '../common/scrollToComponent';
import SectionHeader from '../common/sectionHeader';

import MontessoriMethodsList from './MontessoriMethodsList/montessoriMethodsList';
import StaticGallery from '../common/staticGallery/staticGallery';
import { workshopGalleryPhotoSets } from '../workshops/workshopData';

import {
  aboutMontessoriHeaderContent,
  imagesMontessoriHeaderContent,
  montessoriHeroContent,
  montessoriPricingData,
  priceMontessoriHeaderContent,
  teachersMontessoriHeaderContent,
} from './montessoriData';

const Montessori = () => {
  return (
    <main className="content">
      <PageHero content={montessoriHeroContent} />
      <ScrollToComponent />
      <SectionHeader content={aboutMontessoriHeaderContent} />
      <MontessoriMethodsList />
      <SectionHeader content={imagesMontessoriHeaderContent} />
      <StaticGallery galleryImages={workshopGalleryPhotoSets['baloniki']} />
      <SectionHeader content={teachersMontessoriHeaderContent} />
      {/* <OurTeachers /> */}
      <SectionHeader content={priceMontessoriHeaderContent} />
      <Price priceData={montessoriPricingData} />
    </main>
  );
};

export default Montessori;

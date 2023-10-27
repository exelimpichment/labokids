import PageHero from '../common/pageHero';
import Price from '../common/price/price';
import ScrollToComponent from '../common/scrollToComponent';
import SectionHeader from '../common/sectionHeader';
import StaticGallery from '../common/staticGallery/staticGallery';
import Topics from '../common/topics/topics';

import {
  accordionWorkshopData,
  imagesWorkshopHeaderContent,
  priceWorkshopHeaderContent,
  workshopAccordionHeaderData,
  workshopGalleryPhotoSets,
  workshopHeroContent,
} from './workshopData';

const Workshops = () => {
  return (
    <main className="content">
      <PageHero content={workshopHeroContent} />
      <ScrollToComponent />
      <SectionHeader content={workshopAccordionHeaderData} />
      <Topics accordionData={accordionWorkshopData} />
      <SectionHeader content={imagesWorkshopHeaderContent} />
      <StaticGallery galleryImages={workshopGalleryPhotoSets['baloniki']} />
      <SectionHeader content={priceWorkshopHeaderContent} />
      <Price />
    </main>
  );
};

export default Workshops;

// workshopHero

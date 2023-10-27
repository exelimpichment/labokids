import Gallery from '../common/navigatedGallery/gallery';
import PageHero from '../common/pageHero';
import Price from '../common/price/price';
import ScrollToComponent from '../common/scrollToComponent';
import SectionHeader from '../common/sectionHeader';
import StaticGallery from '../common/staticGallery/staticGallery';
import {
  imagesWorkshopHeaderContent,
  priceWorkshopHeaderContent,
  workshopGalleryPhotoSets,
  workshopHeroContent,
} from './workshopData';

const Workshops = () => {
  return (
    <main>
      <PageHero content={workshopHeroContent} />
      <ScrollToComponent />
      <SectionHeader content={imagesWorkshopHeaderContent} />
      <StaticGallery galleryImages={workshopGalleryPhotoSets['baloniki']} />
      <SectionHeader content={priceWorkshopHeaderContent} />
      <Price />
    </main>
  );
};

export default Workshops;

// workshopHero

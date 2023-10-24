import Gallery from '../common/gallery/gallery';
import PageHero from '../common/pageHero';
import Price from '../common/price/price';
import SectionHeader from '../common/sectionHeader';
import {
  imagesWorkshopHeaderContent,
  priceWorkshopHeaderContent,
  workshopHeroContent,
} from './workshopData';

const Workshops = () => {
  return (
    <main>
      <PageHero content={workshopHeroContent} />
      <SectionHeader content={imagesWorkshopHeaderContent} />
      <Gallery />
      <SectionHeader content={priceWorkshopHeaderContent} />
      <Price />
    </main>
  );
};

export default Workshops;

// workshopHero

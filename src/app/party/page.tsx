import PageHero from '../common/pageHero';
import {
  partyAccordionHeaderData,
  partyHeroContent,
  priceHeaderContent,
} from './partyData';
import Price from '../common/price/price';
import Topics from './topics/topics';
import SectionHeader from '../common/sectionHeader';
import ImageGallery from '../common/ImageGallery/ImageGallery';
import { imagesHeaderContent } from '../montessori/montessoriData';
import ScrollToComponent from '../common/scrollToComponent';
import { useGlobalContext } from '../context/globalContext';
import Gallery from '../common/gallery/gallery';

const Party = () => {
  return (
    <>
      <PageHero content={partyHeroContent} />
      <ScrollToComponent />
      <SectionHeader content={partyAccordionHeaderData} />
      <Topics />
      <SectionHeader content={imagesHeaderContent} />
      <Gallery />
      <SectionHeader content={priceHeaderContent} />
      <Price />
    </>
  );
};

export default Party;

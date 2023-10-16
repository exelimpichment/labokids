import PageHero from '../common/pageHero';
import {
  content,
  partyAccordionHeaderData,
  priceHeaderContent,
} from './partyData';
import Price from '../common/price/price';
import Topics from './topics/topics';
import SectionHeader from '../common/sectionHeader';
import ImageGallery from '../common/ImageGallery/ImageGallery';
import { imagesHeaderContent } from '../montessori/montessoriData';
import ScrollToComponent from '../common/scrollToComponent';
import { useGlobalContext } from '../context/globalContext';

const Party = () => {
  return (
    <>
      <PageHero content={content} />
      <ScrollToComponent />
      <SectionHeader content={partyAccordionHeaderData} />
      <Topics />
      <SectionHeader content={imagesHeaderContent} />
      <ImageGallery />
      <SectionHeader content={priceHeaderContent} />
      <Price />
    </>
  );
};

export default Party;

import PageHero from '../common/pageHero';
import {
  accordionPartyData,
  partyAccordionHeaderData,
  partyHeroContent,
  priceHeaderContent,
} from './partyData';
import Price from '../common/price/price';
import Topics from '../common/topics/topics';
import SectionHeader from '../common/sectionHeader';
import { imagesHeaderContent } from '../montessori/montessoriData';
import ScrollToComponent from '../common/scrollToComponent';
import Gallery from '../common/dynamicGallery/dynamicGallery';

const Party = () => {
  return (
    <main className="content">
      <PageHero content={partyHeroContent} />
      <ScrollToComponent />
      <SectionHeader content={partyAccordionHeaderData} />
      <Topics accordionData={accordionPartyData} />
      <SectionHeader content={imagesHeaderContent} />
      <Gallery />
      <SectionHeader content={priceHeaderContent} />
      <Price />
    </main>
  );
};

export default Party;

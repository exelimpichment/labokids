import PageHero from '../common/pageHero';
import {
  accordionPartyData,
  galleryPartyHeaderContent,
  partyAccordionHeaderData,
  partyHeroContent,
  partyPricingData,
  pricePartyHeaderContent,
} from './partyData';
import Price from '../common/price/price';
import Topics from '../common/topics/topics';
import SectionHeader from '../common/sectionHeader';

import ScrollToComponent from '../common/scrollToComponent';
import Gallery from '../common/dynamicGallery/dynamicGallery';

const Party = () => {
  return (
    <main className="content">
      <PageHero content={partyHeroContent} />
      <ScrollToComponent />
      <SectionHeader content={partyAccordionHeaderData} />
      <Topics accordionData={accordionPartyData} />
      <SectionHeader content={galleryPartyHeaderContent} />
      <Gallery />
      <SectionHeader content={pricePartyHeaderContent} />
      <Price priceData={partyPricingData} />
    </main>
  );
};

export default Party;

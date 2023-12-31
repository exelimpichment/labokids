import PageHero from '../common/pageHero';

import Price from '../common/price/price';
import Topics from '../common/topics/topics';
import SectionHeader from '../common/sectionHeader';

import ScrollToComponent from '../common/scrollToComponent';
import Gallery from '../common/dynamicGallery/dynamicGallery';
import ScrollToTopComponent from '../common/scrollToTopComponent';
import { Locale } from '@/i18n.config';
import { getDictionary } from '@/lib/dictionary';

const Party = async ({ params: { lang } }: { params: { lang: Locale } }) => {
  const {
    heroPageParty,
    heroPageButtonsText,
    partyAccordionHeaderData,
    accordionPartyData,
    imagesPartyHeaderContent,
    pricePartyHeaderContent,
    partyPricingData,
  } = await getDictionary(lang);
  return (
    <main className="content">
      <ScrollToTopComponent />
      <PageHero content={{ ...heroPageParty, heroPageButtonsText }} />
      <ScrollToComponent />
      <SectionHeader content={partyAccordionHeaderData} />
      <Topics accordionData={accordionPartyData} />
      <SectionHeader
        content={imagesPartyHeaderContent}
        animatedPicture={true}
      />
      <Gallery />
      <SectionHeader content={pricePartyHeaderContent} />
      <Price priceData={partyPricingData} />
    </main>
  );
};

export default Party;

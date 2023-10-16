import PageHero from '../common/pageHero';
import {
  content,
  partyAccordionHeaderData,
  priceHeaderContent,
} from './partyData';
import Price from '../common/price/price';
import Topics from './topics/topics';
import SectionHeader from '../common/sectionHeader';

const Party = () => {
  return (
    <>
      <PageHero content={content} />
      <SectionHeader content={partyAccordionHeaderData} />
      <Topics />
      <SectionHeader content={priceHeaderContent} />
      <Price />
    </>
  );
};

export default Party;

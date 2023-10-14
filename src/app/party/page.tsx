import PageHero from '../common/pageHero';
import { content } from './partyData';
import Price from '../common/price/price';
import Topics from './topics/topics';

const Party = () => {
  return (
    <>
      <PageHero content={content} />
      <Topics />
      <Price />
      <div className="h-[500px]"></div>
    </>
  );
};

export default Party;

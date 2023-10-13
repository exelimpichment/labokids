import PartyHero from './partyHero/partyHero';
import Price from './price/price';
import Topics from './topics/topics';

const Party = () => {
  return (
    <>
      <PartyHero />
      <Topics />
      <Price />
      <div className="h-[500px]"></div>
    </>
  );
};

export default Party;

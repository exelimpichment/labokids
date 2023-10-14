import PriceCard from './priceCard';
import { pricingData } from '../../party/partyData';

const PriceCards = () => {
  return (
    <div className="mt-10 flex flex-row flex-wrap justify-center gap-6 lg:gap-10">
      {pricingData.map((item) => (
        <PriceCard key={item.id} item={item} />
      ))}
    </div>
  );
};

export default PriceCards;

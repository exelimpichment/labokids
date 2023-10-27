'use client';
import PriceCard from './priceCard';
import { partyPricingData } from '../../party/partyData';

const PriceCards = () => {
  return (
    <div className="mb-24 mt-10 flex flex-row flex-wrap justify-center gap-6 lg:gap-10">
      {partyPricingData.map((item) => (
        <PriceCard key={item.id} item={item} />
      ))}
    </div>
  );
};

export default PriceCards;

import PriceCard from './priceCard';
import pricingData from './pricingData';

const PriceCards = () => {
  return (
    <div className="mt-10 flex  flex-row justify-center ">
      {pricingData.map((item) => (
        <PriceCard key={item.id} item={item} />
      ))}
    </div>
  );
};

export default PriceCards;

'use client';
import PriceCard from './priceCard';
import { partyPricingData } from '../../party/partyData';
import Image from 'next/image';
import movingRocket from '@/public/movingRocket.webp';

const PriceCards = () => {
  return (
    <div className="relative mb-14 mt-10 flex flex-row flex-wrap justify-center gap-6 lg:gap-10">
      <div className="animate-reciprocal-vertical absolute left-[-20px] top-[-100px] lg:left-[5%] 2xl:left-[13%]">
        <Image
          width={120}
          height={122}
          src={movingRocket}
          alt="moving crab image"
        />
      </div>
      {partyPricingData.map((item) => (
        <PriceCard key={item.id} item={item} />
      ))}
    </div>
  );
};

export default PriceCards;

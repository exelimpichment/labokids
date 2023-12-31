import PriceCard from './priceCard';
import Image from 'next/image';
import movingRocket from '@/public/movingRocket.webp';
import { PriceDataProps } from '@/lib/types';

const PriceCards: React.FC<PriceDataProps> = ({ priceData }) => {
  return (
    <div className="relative mb-14 mt-10 flex flex-row flex-wrap justify-center gap-6 lg:gap-10">
      <div className="absolute left-[-20px] top-[-100px] animate-reciprocal-vertical lg:left-[5%] 2xl:left-[13%]">
        <Image
          width={120}
          src={movingRocket}
          alt="moving crab image"
          className="h-auto"
        />
      </div>
      {priceData.map((item) => (
        <PriceCard key={item.id} item={item} />
      ))}
    </div>
  );
};

export default PriceCards;

import PriceCard from './priceCard';
import { partyPricingData } from '../../party/partyData';
import Image from 'next/image';
import movingRocket from '@/public/movingRocket.webp';
import { IconType } from 'react-icons';
import { LucideIcon } from 'lucide-react';

interface PriceDataProps {
  priceData: {
    id: number;
    header: string;
    paragraph: string;
    price: number | string;
    advantages: string[];
    icon: any;
  }[];
}

const PriceCards: React.FC<PriceDataProps> = ({ priceData }) => {
  return (
    <div className="relative mb-14 mt-10 flex flex-row flex-wrap justify-center gap-6 lg:gap-10">
      <div className="absolute left-[-20px] top-[-100px] animate-reciprocal-vertical lg:left-[5%] 2xl:left-[13%]">
        <Image
          width={120}
          height={122}
          src={movingRocket}
          alt="moving crab image"
        />
      </div>
      {priceData.map((item) => (
        <PriceCard key={item.id} item={item} />
      ))}
    </div>
  );
};

export default PriceCards;

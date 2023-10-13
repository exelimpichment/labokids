import { Button } from '@/components/ui/button';
import { textFont, titleFont } from '../../common/fonts';
import { IconType } from 'react-icons';
import { LucideIcon } from 'lucide-react';

interface IPriceCard {
  item: {
    id: number;
    header: string;
    paragraph: string;
    price: number;
    advantages: string[];
    icon: IconType | LucideIcon;
  };
}

const PriceCard: React.FC<IPriceCard> = ({
  item: { id, header, paragraph, price, advantages, icon: Icon },
}) => {
  return (
    <div className="flex max-w-[270px] cursor-pointer flex-col items-center justify-between rounded-2xl border border-gray-200 p-5 hover:rounded-2xl hover:border-transparent hover:bg-slate-100">
      <div className="text-laboBlue">
        <Icon size={32} />
      </div>

      <h2 className={`${titleFont.className} pt-5 text-xl`}>{header}</h2>
      <p
        className={`${textFont.className} grow-1 px-5 pt-5 text-center text-gray-700`}
      >
        {paragraph}
      </p>
      <div className="pt-5">
        <span>
          <sub>zł</sub>
          <span className={`${titleFont.className}  text-4xl`}>{price}</span>
        </span>
      </div>
      <div className="pt-5">
        <ul className="flex flex-col items-center text-gray-700">
          <li>{advantages[0]}</li>
          <li>{advantages[1]}</li>
          <li>{advantages[2]}</li>
        </ul>
      </div>
    </div>
  );
};

export default PriceCard;

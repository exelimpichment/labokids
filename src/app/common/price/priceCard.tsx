'use client';

import { textFont, titleFont } from '../fonts';
import { useGlobalContext } from '../../context/globalContext';
import Image from 'next/image';

import { AnimatePresence } from 'framer-motion';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { HelpCircle } from 'lucide-react';
import AdditionalInfo from '../../additionalInfo/additionalInfo';

interface IPriceCard {
  item: {
    id: number;
    header: string;
    paragraph: string;
    price: number | string;
    advantages: string[];
    icon: any;
  };
}

const PriceCard: React.FC<IPriceCard> = ({
  item: { id, header, paragraph, price, advantages, icon },
}) => {
  const { setContactUsDialog } = useGlobalContext();

  const handleClick = () => {
    setContactUsDialog((prev) => !prev);
  };

  const [open, setOpen] = useState(false);

  const handleClick2 = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.stopPropagation();
    setOpen((prev: boolean) => !prev);
  };

  return (
    <div
      onClick={handleClick}
      className="flex max-w-[270px] cursor-pointer flex-col items-center justify-between rounded-2xl border border-gray-200 p-5 hover:rounded-2xl hover:border-transparent hover:bg-slate-100"
    >
      <div className="text-laboBlue">
        <Image src={icon} alt="school svg" height={35} width={35} />
      </div>

      <h2 className={`${titleFont.className} pt-5 text-xl`}>{header}</h2>
      <p
        className={`${textFont.className} grow-1 px-5 pt-5 text-center text-gray-700`}
      >
        {paragraph}
      </p>
      <div className="pt-5">
        <sub
          className={`${
            price === 'on request' ? 'hidden' : 'inline'
          } pr-1 text-lg`}
        >
          zł
        </sub>
        <span className={`${titleFont.className}  text-3xl`}>{price}</span>
      </div>
      <div className="pt-5">
        <ul className="flex flex-col items-center text-gray-700">
          <li>
            <div className="relative">
              <AdditionalInfo />
              <span>{advantages[0]}</span>
            </div>
          </li>
          <li>
            <div className="relative">
              {/* <AdditionalInfo /> */}
              <span>{advantages[1]}</span>
            </div>
          </li>
          <li>
            <div className="relative">
              {/* <AdditionalInfo /> */}
              <span>{advantages[2]}</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PriceCard;

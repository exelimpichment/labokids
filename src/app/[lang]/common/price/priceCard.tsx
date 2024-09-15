'use client';

import { textFont, titleFont } from '../fonts';
import { useGlobalContext } from '../../context/globalContext';
import AdditionalInfo from '../../additionalInfo/additionalInfo';
import { MouseEvent } from 'react';
import { IPriceCard, T, pricingIconLibrary } from '@/lib/types';

const PriceCard: React.FC<IPriceCard> = ({
  item: { value, header, paragraph, price, advantages, hints },
}) => {
  const { setContactUsDialogOpen } = useGlobalContext();

  const handleClick = (
    e: MouseEvent<HTMLDivElement, globalThis.MouseEvent>
  ) => {
    e.stopPropagation();
    setContactUsDialogOpen(true);
  };

  const Icon = pricingIconLibrary[value as T];

  return (
    <div
      onClick={(e) => handleClick(e)}
      className="flex max-w-[270px] cursor-pointer flex-col items-center justify-between rounded-2xl border border-gray-200 p-5 hover:rounded-2xl hover:border-transparent hover:bg-slate-100"
    >
      <div>
        <Icon size={36} />
      </div>

      <h2 className={`${titleFont.className} pt-5 text-center text-xl`}>
        {header}
      </h2>
      <p
        className={`${textFont.className} grow-1 px-5 pt-5 text-center text-gray-700`}
      >
        {paragraph}
      </p>
      <div className="pt-5 text-laboBlue">
        <sub
          className={`${
            !price ||
            price === 'on request' ||
            price === 'na zapytanie' ||
            price === 'за запитом'
              ? 'hidden'
              : 'inline'
          } pr-1 text-lg`}
        >
          zł
        </sub>
        <span className={`${titleFont.className}  text-3xl`}>{price}</span>
      </div>
      <div className="pt-5">
        <ul
          className={`${textFont.className} flex flex-col items-center text-gray-700`}
        >
          {advantages?.length && (
            <li>
              <div className="relative">
                {hints[0] && <AdditionalInfo hint={hints[0]} />}
                <span>{advantages[0]}</span>
              </div>
            </li>
          )}
          {advantages?.length && (
            <li>
              <div className="relative">
                {hints[1] && <AdditionalInfo hint={hints[1]} />}
                <span>{advantages[1]}</span>
              </div>
            </li>
          )}
          {advantages?.length && (
            <li>
              <div className="relative">
                {hints[2] && <AdditionalInfo hint={hints[2]} />}
                <span>{advantages[2]}</span>
              </div>
            </li>
          )}
          {advantages?.length && (
            <li>
              <div className="relative">
                {hints[3] && <AdditionalInfo hint={hints[3]} />}
                <span>{advantages[3]}</span>
              </div>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default PriceCard;

'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { titleFont } from '../../common/fonts';
import { LucideIcon } from 'lucide-react';
import { IconType } from 'react-icons';

interface IAccordionCollapsibleItem {
  item: {
    value: string;
    cardColor: string;
    heading: string;
    icon: IconType | LucideIcon;
    description: string;
    transformAmount?: string;
  };
}

const AccordionCollapsibleItem: React.FC<IAccordionCollapsibleItem> = ({
  item: {
    value,
    cardColor,
    heading,
    icon: Icon,
    description,
    transformAmount = '0px',
  },
}) => {
  return (
    <AccordionItem value={value}>
      <AccordionTrigger
        className={`${titleFont.className}  text-xl  text-${cardColor}`}
      >
        <div className="flex items-center justify-between">
          <div
            className={`relative flex h-[60px] w-[60px] items-center justify-center rounded-full bg-${cardColor} text-white before:absolute before:left-1/2  before:top-1/2 before:h-[65px] before:w-[65px] before:-translate-x-1/2 before:-translate-y-1/2 before:rounded-full before:border before:border-dashed before:border-${cardColor} hover:before:left-auto hover:before:top-auto before:hover:animate-[rotating_5s_linear_infinite]`}
          >
            <div className={`mx-5 translate-y-${transformAmount}`}>
              <Icon size={32} />
            </div>
          </div>
          <span className="ml-2 text-start">{heading}</span>
        </div>
      </AccordionTrigger>
      <AccordionContent className="text-center">{description}</AccordionContent>
    </AccordionItem>
  );
};

export default AccordionCollapsibleItem;

import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { titleFont } from '../fonts';
import { IconType } from 'react-icons';
import { LucideIcon, PartyPopper, RotateCw, TentTree } from 'lucide-react';
import { SlChemistry } from 'react-icons/sl';
import { FaSoap } from 'react-icons/fa';
import { GiBalloons, GiFoam } from 'react-icons/gi';

interface IAccordionCollapsibleItem {
  item: {
    key: number;
    value: string;
    borderColor: string;
    fontColor: string;
    backgroundColor: string;
    heading: string;
    description: string;
  };
}

type IAccordionCollapsibleItemIconsObj = {
  [key: string]: IconType | LucideIcon;
};

const accordionCollapsibleItemIconsObj: IAccordionCollapsibleItemIconsObj = {
  'item-1': GiBalloons,
  'item-2': SlChemistry,
  'item-3': FaSoap,
  'item-4': GiFoam,
  'item-9': RotateCw,
  'item-10': PartyPopper,
  'item-11': TentTree,
};

const AccordionCollapsibleItem: React.FC<IAccordionCollapsibleItem> = ({
  item: {
    value,
    borderColor,
    fontColor,
    backgroundColor,
    heading,
    description,
  },
}) => {
  const Icon = accordionCollapsibleItemIconsObj[value];

  return (
    <AccordionItem value={value}>
      <AccordionTrigger
        className={`${fontColor} ${titleFont.className}  text-xl `}
      >
        <div className="flex items-center justify-between">
          <div
            className={`relative flex h-[60px] w-[60px] items-center justify-center rounded-full ${backgroundColor} text-white before:absolute before:left-1/2  before:top-1/2 before:h-[65px] before:w-[65px] before:-translate-x-1/2 before:-translate-y-1/2 before:rounded-full before:border before:border-dashed ${borderColor} hover:before:left-auto hover:before:top-auto before:hover:animate-[rotating_5s_linear_infinite]`}
          >
            <div className={`mx-5`}>
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

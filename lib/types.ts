import {
  StaticImageData,
  StaticImport,
} from 'next/dist/shared/lib/get-img-props';
import { FaChildren } from 'react-icons/fa6';
import { MdOutlineHandshake } from 'react-icons/md';

export interface IPageHero {
  content: {
    image: StaticImport;
    buttonsPosition?: 'start' | 'end';
    kidFontText: string;
    header: string;
    paragraph: string;
  };
}

import { z } from 'zod';

const phoneRegex = new RegExp(
  /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/
);

export const formSchema = z.object({
  phone: z.string().regex(phoneRegex, 'Invalid number*'),
  email: z.union([z.literal(''), z.string().email()]),
  message: z.string(),
});

export type TFormSchema = z.infer<typeof formSchema>;

export type TNavigation = {
  montessori: string;
  // bilingual: string;
  party: string;
  workshops: string;
};

export interface PriceDataProps {
  priceData: {
    id: number;
    value: string;
    header: string;
    paragraph: string;
    price?: string; // Optional price field
    advantages?: string[]; // Optional advantages field
    hints: string[];
  }[];
}

export interface IPriceCard {
  item: {
    id: number;
    value: string;
    header: string;
    paragraph: string;
    price?: string; // Optional price field
    advantages?: string[]; // Optional advantages field
    hints: string[];
  };
}

export interface ITopics {
  accordionData: {
    key: number;
    value: string;
    borderColor: string;
    fontColor: string;
    backgroundColor: string;
    heading: string;
    description: string;
  }[];
}

import {
  Calendar,
  Gem,
  Home,
  School,
  Soup,
  User,
  UserPlus,
  Users,
} from 'lucide-react';

export const pricingIconLibrary = {
  'card-0': FaChildren,
  'card-1': MdOutlineHandshake,
  'card-2': Gem,

  'card-3': FaChildren,
  'card-4': Soup,
  'card-5': Gem,

  'card-6': School,
  'card-7': Home,
  'card-8': Gem,

  'card-9': User,
  'card-10': Users,
  'card-11': UserPlus,
};
export type T = keyof typeof pricingIconLibrary;

import plac_zabaw from '@/public/plac_zabaw.jpg';
import naukaZabawa from '@/public/nauka_i_zabawa.jpg';
import przytulne_sale from '@/public/przytulne_sale.jpg';
import zdrowe_odzywianie from '@/public/zdrowe_odzywianie.jpg';
import cudowni_nauczyciele from '@/public/cudowni_nauczyciele.jpg';

export const bilingualProgramImageObj: IImageObj = {
  english: naukaZabawa,
  nature: cudowni_nauczyciele,
  music: zdrowe_odzywianie,
  sale: przytulne_sale,
  plac: plac_zabaw,
};

export type IImageObj = {
  [key: string]: StaticImageData;
};

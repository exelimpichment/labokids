import {
  StaticImageData,
  StaticImport,
} from 'next/dist/shared/lib/get-img-props';

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
  bilingual: string;
  party: string;
  workshops: string;
};

export interface PriceDataProps {
  priceData: {
    value: string;
    id: number;
    header: string;
    paragraph: string;
    price: number | string;
    advantages: string[];
    hints: string[];
  }[];
}

export interface IPriceCard {
  item: {
    id: number;
    value: string;
    header: string;
    paragraph: string;
    price: number | string;
    advantages: string[];
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
  'card-0': Calendar,
  'card-1': Soup,
  'card-2': Gem,

  'card-3': Calendar,
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

import bilingualMusic from '@/public/bilingualMusic.jpg';
import bilingualNative from '@/public/bilingualNative.jpg';
import bilingualNature from '@/public/bilingualNature.jpg';

export const bilingualProgramImageObj: IBilingualProgramImageObj = {
  nature: bilingualNature,
  music: bilingualMusic,
  english: bilingualNative,
};

export type IBilingualProgramImageObj = {
  [key: string]: StaticImageData;
};

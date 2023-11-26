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

export type MontessoriImageObject = {
  en: {
    'Practical Life': StaticImageData;
    Sensorial: StaticImageData;
    Language: StaticImageData;
    Mathematics: StaticImageData;
    'Culture and Science': StaticImageData;
  };
  pl: {
    'Życie praktyczne': StaticImageData;
    Sensoryczna: StaticImageData;
    Język: StaticImageData;
    Matematyka: StaticImageData;
    'Kultura i Nauka': StaticImageData;
  };
  ua: {
    'Практичне життя': StaticImageData;
    'Сенсорна освіта': StaticImageData;
    Мова: StaticImageData;
    Математика: StaticImageData;
    'Культура та Наука': StaticImageData;
  };
};

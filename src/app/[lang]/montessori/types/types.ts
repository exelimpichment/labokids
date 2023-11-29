// MontessoriMethodsList;

export interface IMontessoriMethodsList {
  montessoriMethodsList: {
    id: number;
    paragraph: string;
    header: string;
    value: string;
  }[];
}

// MontessoriMethodsItem;

import { StaticImageData } from 'next/image';
import montessoriMethodsListOfImage1 from '@/public/montessoriMethodsListOfImage1.jpg';
import montessoriMethodsListOfImage2 from '@/public/montessoriMethodsListOfImage2.jpg';
import montessoriMethodsListOfImage3 from '@/public/montessoriMethodsListOfImage3.jpg';
import montessoriMethodsListOfImage4 from '@/public/montessoriMethodsListOfImage1.jpg';
import montessoriMethodsListOfImage5 from '@/public/montessoriMethodsListOfImage5.jpg';

export type ImageOptions<Type> = {
  [Property in keyof Type]: StaticImageData;
};

export const montessoriImagObject: IMontessoriImageObject = {
  life: montessoriMethodsListOfImage1,
  sensorial: montessoriMethodsListOfImage2,
  language: montessoriMethodsListOfImage4,
  mathematics: montessoriMethodsListOfImage3,
  science: montessoriMethodsListOfImage5,
};

export interface IMontessoriMethodsItem {
  montessoriMethodsItem: {
    id: number;
    paragraph: string;
    header: string;
    value: string;
  };
}

type IMontessoriImageObject = {
  [key: string]: StaticImageData;
};

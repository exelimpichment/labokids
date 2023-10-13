import { StaticImport } from 'next/dist/shared/lib/get-img-props';

export interface IPageHero {
  content: {
    image: StaticImport;
    buttonsPosition?: 'start' | 'end';
    kidFontText: string;
    header: string;
    paragraph: string;
  };
}

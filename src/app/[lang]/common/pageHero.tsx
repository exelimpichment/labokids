'use client';

import Image from 'next/image';
import Container from './container';
import { kidFont, textFont, titleFont } from '../common/fonts';
import ButtonsHero from './buttonsHero';
import montessoriHero from 'public/montessoriHero.jpg';
import bilingualHero from '@/public/bilingualHero.jpg';
import partyHero from '@/public/partyHero.jpg';
import workshopHero from '@/public/workshopHero.jpg';

import { usePathname } from 'next/navigation';

const offeredServicesObj = {
  montessori: {
    image: montessoriHero,
    buttonsPosition: 'lg:justify-end',
    textPosition: 'lg:text-right',
    flexPosition: 'items-end',
  },
  bilingual: {
    image: bilingualHero,
    buttonsPosition: 'lg:justify-end',
    textPosition: 'lg:text-right',
    flexPosition: 'items-end',
  },
  party: {
    image: partyHero,
    buttonsPosition: 'lg:justify-end',
    textPosition: 'lg:text-right',
    flexPosition: 'items-end',
  },
  workshops: {
    image: workshopHero,
    buttonsPosition: 'lg:justify-end',
    textPosition: 'lg:text-right',
    flexPosition: 'items-end',
  },
};

interface IPageHero {
  content: {
    kidFontText: string;
    header: string;
    paragraph: string;
    heroPageButtonsText: { readMore: string; contactUs: string };
  };
}

const PageHero: React.FC<IPageHero> = ({
  content: { header, kidFontText, paragraph, heroPageButtonsText },
}) => {
  const pathname = usePathname();

  const pathnameSectionsArray = pathname.split('/');
  const lastSection = pathnameSectionsArray[
    pathnameSectionsArray.length - 1
  ] as 'montessori' | 'bilingual' | 'party' | 'workshops';

  return (
    <section>
      <div className="h-screen">
        <div className="absolute -z-10 h-screen w-screen">
          <Image
            src={offeredServicesObj[lastSection].image}
            fill
            style={{ objectFit: 'cover', objectPosition: 'top center' }}
            quality={100}
            alt="hero image"
            placeholder="blur"
          />
        </div>
        <Container>
          <div
            className={`flex flex-col ${offeredServicesObj[lastSection].flexPosition} pb-5`}
          >
            <div
              className={`mt-[10vh] sm:mt-[25vh] lg:mt-[40vh] lg:max-w-[60%] landscape:sm:mt-[10vh] landscape:lg:mt-[25vh] landscape:xl:mt-[45vh]  ${offeredServicesObj[lastSection].textPosition} text-center `}
            >
              <p
                className={`${kidFont.className} pb-5 text-2xl text-blue-100 lg:pb-3`}
              >
                {kidFontText}
              </p>
              <h1
                className={`${titleFont.className} pb-5 text-4xl text-blue-100 lg:pb-5 xl:text-5xl`}
              >
                {header}
              </h1>
              <p
                className={`${textFont.className} text-xl font-light text-blue-100`}
              >
                {paragraph}
              </p>
            </div>
          </div>
          <ButtonsHero
            buttonsPosition={offeredServicesObj[lastSection].buttonsPosition}
            heroPageButtonsText={heroPageButtonsText}
          />
        </Container>
      </div>
    </section>
  );
};

export default PageHero;

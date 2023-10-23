'use client';
'use client';
import Image from 'next/image';
import Container from './container';
import { kidFont, textFont, titleFont } from '../common/fonts';
import ButtonsHero from './buttonsHero';
import { StaticImageData } from 'next/dist/shared/lib/get-img-props';
import { motion, AnimatePresence } from 'framer-motion';

interface IPageHero {
  content: {
    image: StaticImageData;
    buttonsPosition: string;
    kidFontText: string;
    header: string;
    paragraph: string;
    textPosition: string;
    flexPosition: string;
  };
}

const PageHero: React.FC<IPageHero> = ({
  content: {
    image,
    buttonsPosition,
    kidFontText,
    header,
    paragraph,
    textPosition,
    flexPosition,
  },
}) => {
  return (
    <section>
      <div className="h-screen">
        <div className="absolute -z-10 h-full w-full">
          <Image
            src={image}
            fill
            style={{ objectFit: 'cover', objectPosition: 'top center' }}
            quality={100}
            alt="hero image"
            placeholder="blur"
          />
        </div>
        <Container>
          <div className={`flex flex-col ${flexPosition} pb-5`}>
            <div
              className={`mt-[10vh] sm:mt-[25vh] lg:mt-[40vh] lg:max-w-[60%] landscape:sm:mt-[10vh] landscape:lg:mt-[25vh] landscape:xl:mt-[45vh]  ${textPosition} text-center `}
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
          <ButtonsHero buttonsPosition={buttonsPosition} />
        </Container>
      </div>
    </section>
  );
};

export default PageHero;

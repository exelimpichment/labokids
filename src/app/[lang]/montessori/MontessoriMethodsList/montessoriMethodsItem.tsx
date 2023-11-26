import Image, { StaticImageData } from 'next/image';
import Container from '../../common/container';
import { titleFont } from '../../common/fonts';

import montessoriMethodsListOfImage1 from '@/public/montessoriMethodsListOfImage1.jpg';
import montessoriMethodsListOfImage2 from '@/public/montessoriMethodsListOfImage2.jpg';
import montessoriMethodsListOfImage3 from '@/public/montessoriMethodsListOfImage3.jpg';
import montessoriMethodsListOfImage4 from '@/public/montessoriMethodsListOfImage1.jpg';
import montessoriMethodsListOfImage5 from '@/public/montessoriMethodsListOfImage5.jpg';
import { Locale } from '@/i18n.config';

type MontessoriImageObject = {
  [lang in Locale]: {
    [key: string]: StaticImageData;
  };
};

const montessoriImagObject: MontessoriImageObject = {
  en: {
    'Practical Life': montessoriMethodsListOfImage1,
    Sensorial: montessoriMethodsListOfImage2,
    Language: montessoriMethodsListOfImage3,
    Mathematics: montessoriMethodsListOfImage4,
    'Culture and Science': montessoriMethodsListOfImage5,
  },
  pl: {
    'Życie praktyczne': montessoriMethodsListOfImage1,
    Sensoryczna: montessoriMethodsListOfImage2,
    Język: montessoriMethodsListOfImage3,
    Matematyka: montessoriMethodsListOfImage4,
    'Kultura i Nauka': montessoriMethodsListOfImage5,
  },
  ua: {
    'Практичне життя': montessoriMethodsListOfImage1,
    'Сенсорна освіта': montessoriMethodsListOfImage2,
    Мова: montessoriMethodsListOfImage3,
    Математика: montessoriMethodsListOfImage4,
    'Культура та Наука': montessoriMethodsListOfImage5,
  },
};

interface IMontessoriMethodsItem {
  lang: Locale;
  montessoriMethodsItem: {
    id: number;
    paragraph: string;
    header: string;
  };
}

const MontessoriMethodsItem: React.FC<IMontessoriMethodsItem> = ({
  montessoriMethodsItem: { id, paragraph, header },
  lang,
}) => {
  return (
    <Container>
      <div className="flex flex-col gap-3 lg:flex-row lg:gap-10">
        <div
          className={`equalFlexPart relative min-h-[350px] ${
            id % 2 !== 0 ? 'lg:order-1' : null
          } overflow-hidden`}
        >
          <Image
            loading="lazy"
            src={montessoriImagObject[lang][header]}
            alt="method image"
            fill
            // blurDataURL
            className="rounded-3xl"
            quality={100}
            placeholder="blur"
            sizes="(max-width: 768px) 100vw, 50vw"
            style={{
              objectFit: 'cover',
              objectPosition: 'top center',
            }}
          />
        </div>
        <div className="equalFlexPart lg:min-h-[350px]">
          <h2 className={`${titleFont.className} text-center text-2xl`}>
            {header}
          </h2>
          <p className="pt-5 text-center text-lg text-gray-600">{paragraph}</p>
        </div>
      </div>
    </Container>
  );
};

export default MontessoriMethodsItem;

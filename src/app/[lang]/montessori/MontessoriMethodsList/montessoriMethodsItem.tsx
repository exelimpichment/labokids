import Image, { StaticImageData } from 'next/image';
import Container from '../../common/container';
import { titleFont } from '../../common/fonts';

import montessoriMethodsListOfImage1 from '@/public/montessoriMethodsListOfImage1.jpg';
import montessoriMethodsListOfImage2 from '@/public/montessoriMethodsListOfImage2.jpg';
import montessoriMethodsListOfImage3 from '@/public/montessoriMethodsListOfImage3.jpg';
import montessoriMethodsListOfImage4 from '@/public/montessoriMethodsListOfImage1.jpg';
import montessoriMethodsListOfImage5 from '@/public/montessoriMethodsListOfImage5.jpg';
import { Locale } from '@/i18n.config';

type IMontessoriImageObject = {
  [lang in Locale]: {
    [key: string]: StaticImageData;
  };
};

const montessoriImagObject: IMontessoriImageObject = {
  en: {
    'Practical Life': montessoriMethodsListOfImage1,
    Sensorial: montessoriMethodsListOfImage2,
    Language: montessoriMethodsListOfImage4,
    Mathematics: montessoriMethodsListOfImage3,
    'Culture and Science': montessoriMethodsListOfImage5,
  },
  pl: {
    'Życie praktyczne': montessoriMethodsListOfImage1,
    Sensoryczna: montessoriMethodsListOfImage2,
    Język: montessoriMethodsListOfImage4,
    Matematyka: montessoriMethodsListOfImage3,
    'Kultura i Nauka': montessoriMethodsListOfImage5,
  },
  ua: {
    'Практичне життя': montessoriMethodsListOfImage1,
    'Сенсорна освіта': montessoriMethodsListOfImage2,
    Мова: montessoriMethodsListOfImage4,
    Математика: montessoriMethodsListOfImage3,
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
      <section className="flex flex-col gap-3 lg:flex-row lg:gap-10">
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
            className="rounded-3xl"
            quality={100}
            placeholder="blur"
            sizes="(max-width: 768px) 100vw, 50vw"
            style={{
              objectFit: 'cover',
              objectPosition: 'center center',
            }}
          />
        </div>
        <div className="equalFlexPart lg:min-h-[350px]">
          <h2 className={`${titleFont.className} text-center text-2xl`}>
            {header}
          </h2>
          <p className="pt-5 text-center text-lg text-gray-600">{paragraph}</p>
        </div>
      </section>
    </Container>
  );
};

export default MontessoriMethodsItem;

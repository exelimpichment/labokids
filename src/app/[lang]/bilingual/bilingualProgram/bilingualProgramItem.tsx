import Image, { StaticImageData } from 'next/image';
import { titleFont } from '../../common/fonts';

import bilingualMusic from '@/public/bilingualMusic.jpg';
import bilingualNative from '@/public/bilingualNative.jpg';
import bilingualNature from '@/public/bilingualNature.jpg';
import { Locale } from '@/i18n.config';

const bilingualProgramImageObj: IBilingualProgramImageObj = {
  en: {
    Music: bilingualMusic,
    'English Language': bilingualNative,
    Nature: bilingualNature,
  },
  pl: {
    Muzyka: bilingualMusic,
    'Język angielski': bilingualNative,
    Natura: bilingualNature,
  },
  ua: {
    Музика: bilingualMusic,
    'Англійська мова': bilingualNative,
    Природа: bilingualNature,
  },
};

type IBilingualProgramImageObj = {
  [lang in Locale]: {
    [key: string]: StaticImageData;
  };
};

interface IBilingualProgramItem {
  lang: Locale;
  programItem: { key: string; header: string; description: string };
}

const BilingualProgramItem: React.FC<IBilingualProgramItem> = ({
  lang,
  programItem: { header, description },
}) => {
  return (
    <section>
      <div className="flex flex-col gap-3 lg:flex-row lg:gap-10">
        <div className={`equalFlexPart relative min-h-[350px] overflow-hidden`}>
          <Image
            loading="lazy"
            src={bilingualProgramImageObj[lang][header]}
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
          <p className="pt-5 text-center text-lg text-gray-600">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
};

export default BilingualProgramItem;

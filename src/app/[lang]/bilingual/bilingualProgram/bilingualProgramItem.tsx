import Image, { StaticImageData } from 'next/image';
import { titleFont } from '../../common/fonts';
import { bilingualProgramImageObj } from '@/lib/types';

interface IBilingualProgramItem {
  programItem: {
    key: string;
    header: string;
    description: string;
    value: string;
  };
}

const BilingualProgramItem: React.FC<IBilingualProgramItem> = ({
  programItem: { header, description, value },
}) => {
  return (
    <section>
      <div className="flex flex-col gap-3 lg:flex-row lg:gap-10">
        <div className={`equalFlexPart relative min-h-[350px] overflow-hidden`}>
          <Image
            loading="lazy"
            src={bilingualProgramImageObj[value]}
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

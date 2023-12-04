import Image, { StaticImageData } from 'next/image';
import { textFont, titleFont } from '../../common/fonts';
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
  programItem: { header, description, value, key },
}) => {
  return (
    <section>
      <div className="flex flex-col gap-3 lg:flex-row lg:gap-10">
        <div
          className={`relative min-h-[350px] basis-full overflow-hidden ${
            Number(key) % 2 !== 0 ? 'lg:order-1' : null
          }`}
        >
          <Image
            loading="lazy"
            src={bilingualProgramImageObj[value]}
            alt="method image"
            className="rounded-3xl"
            fill
            quality={100}
            placeholder="blur"
            sizes="(max-width: 768px) 100vw, 50vw"
            style={{
              objectFit: 'cover',
              objectPosition: 'center center',
            }}
          />
        </div>
        <div className="basis-full lg:min-h-[350px]">
          <h2 className={`${titleFont.className} text-center text-2xl`}>
            {header}
          </h2>
          <p
            className={`pt-5 text-center text-lg text-gray-600 ${textFont.className}`}
          >
            {description}
          </p>
        </div>
      </div>
    </section>
  );
};

export default BilingualProgramItem;

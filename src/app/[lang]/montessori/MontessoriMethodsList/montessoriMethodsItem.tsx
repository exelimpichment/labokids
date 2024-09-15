import Image from 'next/image';
import Container from '../../common/container';
import { titleFont } from '../../common/fonts';
import { IMontessoriMethodsItem, montessoriImagObject } from '../types/types';

const MontessoriMethodsItem: React.FC<IMontessoriMethodsItem> = ({
  montessoriMethodsItem: { id, paragraph, header, value },
}) => {
  return (
    <Container>
      <section className="flex flex-col gap-3 lg:flex-row lg:gap-10">
        <div
          className={`relative min-h-[350px] basis-full ${
            id % 2 !== 0 ? 'lg:order-1' : null
          } overflow-hidden`}
        >
          <Image
            loading="lazy"
            src={montessoriImagObject[value]}
            alt="method image"
            fill
            className="rounded-3xl"
            quality={100}
            // placeholder="blur"
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
          <p className="pt-5 text-center text-lg text-gray-600">{paragraph}</p>
        </div>
      </section>
    </Container>
  );
};

export default MontessoriMethodsItem;

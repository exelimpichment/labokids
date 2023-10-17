import Image, { StaticImageData } from 'next/image';
import Container from '../../common/container';
import { titleFont } from '../../common/fonts';

interface IMontessoriMethodsItem {
  montessoriMethodsItem: {
    id: number;
    image: StaticImageData;
    paragraph: string;
    header: string;
  };
}

const MontessoriMethodsItem: React.FC<IMontessoriMethodsItem> = ({
  montessoriMethodsItem: { id, image, paragraph, header },
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
            src={image}
            alt="method image"
            fill
            className="rounded-3xl"
            quality={100}
            placeholder="blur"
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

import Image, { StaticImageData } from 'next/image';
import Container from '../container';
import movingSun from '@/public/movingSun.webp';

interface IStaticGallery {
  galleryImages: { id: number; image: StaticImageData; alt: string }[];
}

const StaticGallery: React.FC<IStaticGallery> = ({ galleryImages }) => {
  return (
    <Container>
      <div className="relative mt-10 flex flex-wrap justify-center gap-5">
        {galleryImages.map((item) => (
          <div className="relative h-56 w-96" key={item.id}>
            <Image
              src={item.image}
              fill
              alt="gallery image"
              placeholder="blur"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              quality={100}
              style={{
                objectFit: 'cover',
                objectPosition: 'center center',
              }}
              className="rounded-xl"
            />
          </div>
        ))}
        <div className="absolute bottom-[-90px] right-0  z-40 animate-reciprocal-horizontal xl:bottom-[-132px] xl:right-[10%]">
          <Image
            width={133}
            height={137}
            src={movingSun}
            alt="moving crab image"
          />
        </div>
      </div>
    </Container>
  );
};

export default StaticGallery;

import Image, { StaticImageData } from 'next/image';
import Container from '../container';

interface IStaticGallery {
  galleryImages: { id: number; image: StaticImageData; alt: string }[];
}

const StaticGallery: React.FC<IStaticGallery> = ({ galleryImages }) => {
  return (
    <Container>
      <div className=" mt-10 flex  flex-wrap justify-center gap-5">
        {galleryImages.map((item) => (
          <div className="relative h-56 w-96" key={item.id}>
            <Image
              src={item.image}
              fill
              alt="gallery image"
              placeholder="blur"
              quality={100}
              style={{
                objectFit: 'cover',
                objectPosition: 'center center',
              }}
              className="rounded-xl"
            />
          </div>
        ))}
      </div>
    </Container>
  );
};

export default StaticGallery;

import Image from 'next/image';
import { listOfImages } from '../../montessori/montessoriData';
import Container from '../container';

const ImageGallery = () => {
  return (
    <Container>
      <div className="mt-10 flex flex-wrap justify-center gap-5">
        {listOfImages.map((item) => (
          <Image
            src={item.image}
            key={item.id}
            width={300}
            alt="gallery image"
            placeholder="blur"
            quality={100}
            style={{
              objectFit: 'cover',
              objectPosition: 'top center',
            }}
            className="rounded-xl"
          />
        ))}
      </div>
    </Container>
  );
};

export default ImageGallery;

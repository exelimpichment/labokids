'use client';

import Image from 'next/image';

import Container from '../container';
import { useGlobalContext } from '../../context/globalContext';
import { workshopGalleryPhotoSets } from '../../workshops/workshopData';

const ImageGallery = () => {
  const { activeGalleryCollection } = useGlobalContext();
  return (
    <Container>
      <div className="mt-10 flex flex-wrap justify-center gap-5">
        {workshopGalleryPhotoSets[activeGalleryCollection].map((item) => (
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

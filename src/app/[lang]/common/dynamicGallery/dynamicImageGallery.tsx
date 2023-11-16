'use client';

import Image from 'next/image';

import Container from '../container';
import { useGlobalContext } from '../../context/globalContext';
import { workshopGalleryPhotoSets } from '../../workshops/workshopData';

const DynamicImageGallery = () => {
  const { activeGalleryCollection } = useGlobalContext();
  return (
    <Container>
      <div className=" mt-10 flex  flex-wrap justify-center gap-5">
        {workshopGalleryPhotoSets[activeGalleryCollection].map((item) => (
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

export default DynamicImageGallery;

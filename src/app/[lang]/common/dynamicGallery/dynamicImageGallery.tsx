'use client';

import Image from 'next/image';

import Container from '../container';
import { useGlobalContext } from '../../context/globalContext';

import { partyGalleryPhotoSet } from '../../party/partyImageStoringObj';

const DynamicImageGallery = () => {
  const { activeGalleryCollection } = useGlobalContext();
  return (
    <Container>
      <div className=" mt-10 flex  flex-wrap justify-center gap-5">
        {partyGalleryPhotoSet[activeGalleryCollection].map((item) => (
          <div className="relative h-56 w-96" key={item.id}>
            <Image
              src={item.image}
              fill
              alt="gallery image"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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

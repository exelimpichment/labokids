'use client';

import { StaticImageData } from 'next/image';
import Container from '../container';
import ShowMoreDropdown from '../showMoreDropdown/showMoreDropdown';
import StaticGalleryCard from './staticGalleryCard';
import MovingSun from './movingSun';
import ShowMoreDropdownButton from '../showMoreDropdown/showMoreDropdownButton';
import { useState } from 'react';

interface IStaticGallery {
  galleryImages: { id: number; image: StaticImageData; alt: string }[];
}

const StaticGallery: React.FC<IStaticGallery> = ({ galleryImages }) => {
  const [isOpen, setIsOpen] = useState<boolean>(true);
  return (
    <Container>
      <div className="relative mt-10 flex flex-wrap justify-center gap-5">
        {galleryImages.slice(0, 6).map((item) => (
          <StaticGalleryCard key={item.id} item={item} />
        ))}
        {galleryImages.length > 6 && (
          <ShowMoreDropdown
            isOpen={isOpen}
            galleryImages={galleryImages.slice(0, 7)}
          />
        )}
        <MovingSun />
      </div>
      {galleryImages.length > 6 && (
        <ShowMoreDropdownButton state={{ isOpen, setIsOpen }} />
      )}
    </Container>
  );
};

export default StaticGallery;

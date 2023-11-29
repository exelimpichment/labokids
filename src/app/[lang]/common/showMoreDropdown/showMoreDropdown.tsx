'use client';

import { StaticImageData } from 'next/image';
import StaticGalleryCard from '../staticGallery/staticGalleryCard';

interface IStaticGallery {
  isOpen: boolean;
  galleryImages: { id: number; image: StaticImageData; alt: string }[];
}

const ShowMoreDropdown: React.FC<IStaticGallery> = ({
  galleryImages,
  isOpen,
}) => {
  return (
    <div
      className={`${
        isOpen ? 'grid-rows-[0fr]' : 'grid-rows-[1fr]'
      } grid w-full transition-all duration-700`}
    >
      <div className="flex flex-wrap justify-center gap-5 overflow-hidden">
        {galleryImages.map((item) => (
          <StaticGalleryCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default ShowMoreDropdown;

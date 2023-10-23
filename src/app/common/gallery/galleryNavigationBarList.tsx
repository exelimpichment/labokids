'use client';

import useGalleryButtons from '../../hooks/useGalleryButtons';

import GalleryNavigationBarListItem from './galleryNavigationBarListItem';

const GalleryNavigationBarList = () => {
  const galleryButtons = useGalleryButtons();
  return (
    <div className="mt-10 flex w-full justify-center">
      <div className="flex gap-6">
        {galleryButtons.map(
          ({ active, backgroundColor, borderColor, icon, id, buttonName }) => (
            <GalleryNavigationBarListItem
              key={id}
              button={{
                active,
                backgroundColor,
                borderColor,
                icon,
                buttonName,
              }}
            />
          )
        )}
      </div>
    </div>
  );
};

export default GalleryNavigationBarList;

'use client';

import clickMe from '@/public/clickMe.png';

import Image from 'next/image';
import useGalleryButtons from '../../hooks/useGalleryButtons';

import GalleryNavigationBarListItem from './dynamicGalleryNavigationBarListItem';

const DynamicGalleryNavigationBarList = () => {
  const galleryButtons = useGalleryButtons();
  return (
    <div className="mt-10 flex w-full  justify-center">
      <div className="relative flex flex-wrap justify-center gap-5 ">
        <Image
          height={40}
          src={clickMe}
          alt="click me image"
          className="absolute left-0 top-0  translate-x-[95%] translate-y-[130%] "
        />
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

export default DynamicGalleryNavigationBarList;

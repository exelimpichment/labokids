'use client';

import { IconType } from 'react-icons';
import { useGlobalContext } from '../../context/globalContext';

interface IGalleryNavigationBarList {
  button: {
    borderColor: string;
    icon: IconType;
    backgroundColor: string;
    active: boolean;
    buttonName: 'baloniki' | 'chemia' | 'mydlo' | 'lod';
  };
}

const DynamicGalleryNavigationBarListItem: React.FC<
  IGalleryNavigationBarList
> = ({
  button: { icon: Icon, backgroundColor, borderColor, active, buttonName },
}) => {
  const { setActiveGalleryCollection } = useGlobalContext();
  return (
    <button
      onClick={() => setActiveGalleryCollection(buttonName)}
      type="button"
      className={`relative flex h-[55px] w-[55px] items-center ${
        active ? backgroundColor : 'bg-gray-300'
      } justify-center rounded-full  text-white before:absolute before:left-1/2  before:top-1/2 before:h-[60px] before:w-[60px] before:-translate-x-1/2 before:-translate-y-1/2 before:rounded-full before:border before:border-dashed ${
        active ? borderColor : 'border-gray-300'
      }  hover:before:left-auto hover:before:top-auto before:hover:animate-[rotating_5s_linear_infinite]`}
    >
      <div className={`mx-5`}>
        <Icon size={30} />
      </div>
    </button>
  );
};

export default DynamicGalleryNavigationBarListItem;

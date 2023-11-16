'use client';

import { useGlobalContext } from '../context/globalContext';
import { GiBalloons, GiFoam } from 'react-icons/gi';
import { SlChemistry } from 'react-icons/sl';
import { FaSoap } from 'react-icons/fa';
import { IconType } from 'react-icons';

const useGalleryButtons = () => {
  const { activeGalleryCollection } = useGlobalContext();

  const galleryButtons: {
    id: number;
    buttonName: 'baloniki' | 'chemia' | 'mydlo' | 'lod';
    icon: IconType;
    borderColor: string;
    backgroundColor: string;
    active: boolean;
  }[] = [
    {
      id: 0,
      buttonName: 'baloniki',
      icon: GiBalloons,
      borderColor: 'before:border-laboBlue',
      backgroundColor: 'bg-laboBlue',
      active: activeGalleryCollection === 'baloniki',
    },
    {
      id: 1,
      buttonName: 'chemia',
      icon: SlChemistry,
      borderColor: 'before:border-laboRed',
      backgroundColor: 'bg-laboRed',
      active: activeGalleryCollection === 'chemia',
    },
    {
      id: 2,
      buttonName: 'mydlo',
      icon: FaSoap,
      borderColor: 'before:border-laboGreen',
      backgroundColor: 'bg-laboGreen',
      active: activeGalleryCollection === 'mydlo',
    },
    {
      id: 3,
      buttonName: 'lod',
      icon: GiFoam,
      borderColor: 'before:border-laboOrange',
      backgroundColor: 'bg-laboOrange',
      active: activeGalleryCollection === 'lod',
    },
  ];

  return galleryButtons;
};

export default useGalleryButtons;

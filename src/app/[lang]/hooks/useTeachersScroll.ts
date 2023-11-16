'use client';

import { MutableRefObject, useRef } from 'react';

export function useTeachersScroll(): [
  (direction: 'backward' | 'forward') => void,
  MutableRefObject<HTMLDivElement | null>,
] {
  const teachersCarouselRef = useRef<HTMLDivElement | null>(null);

  const handleClick = (direction: 'backward' | 'forward') => {
    if (teachersCarouselRef.current !== null) {
      const scrollAmount = 190;
      if (direction === 'forward') {
        teachersCarouselRef.current.scrollBy({
          left: scrollAmount,
          behavior: 'smooth',
        });
      } else if (direction === 'backward') {
        teachersCarouselRef.current.scrollBy({
          left: -scrollAmount,
          behavior: 'smooth',
        });
      }
    }
  };

  return [handleClick, teachersCarouselRef];
}

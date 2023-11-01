'use client';
import { StaticImageData } from 'next/image';
import Container from '../common/container';
import TeachersCard from './teachersCard';
import { useRef } from 'react';
import TeachersCarouselNavigationButtons from './teachersCarouselNavigationButtons';

interface ITeachersCarousel {
  carouselData: {
    id: number;
    name: string;
    position: string;
    image: StaticImageData;
  }[];
}

const TeachersCarousel: React.FC<ITeachersCarousel> = ({ carouselData }) => {
  const TeachersCarouselRef = useRef<HTMLDivElement | null>(null);

  const handleClick = (direction: 'backward' | 'forward') => {
    if (TeachersCarouselRef.current !== null) {
      const scrollAmount = 190;
      if (direction === 'forward') {
        TeachersCarouselRef.current.scrollBy({
          left: scrollAmount,
          behavior: 'smooth',
        });
      } else if (direction === 'backward') {
        TeachersCarouselRef.current.scrollBy({
          left: -scrollAmount,
          behavior: 'smooth',
        });
      }
    }
  };

  return (
    <section className="mt-10 px-4 pb-4">
      <Container>
        <div className="relative">
          <div
            ref={TeachersCarouselRef}
            className=" custom-scrollbar flex justify-between gap-5 overflow-x-auto overflow-y-hidden p-5"
          >
            {carouselData.map((teacher) => (
              <TeachersCard key={teacher.id} teacher={teacher} />
            ))}
          </div>
          <TeachersCarouselNavigationButtons handleClick={handleClick} />
        </div>
      </Container>
    </section>
  );
};

export default TeachersCarousel;

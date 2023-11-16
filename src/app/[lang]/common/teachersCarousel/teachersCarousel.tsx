'use client';
import { StaticImageData } from 'next/image';
import Container from '../container';
import TeachersCard from './teachersCard';
import { useRef } from 'react';
import TeachersCarouselNavigationButtons from './teachersCarouselNavigationButtons';
import { useTeachersScroll } from '../../hooks/useTeachersScroll';

interface ITeachersCarousel {
  carouselData: {
    id: number;
    name: string;
    position: string;
    image: StaticImageData;
  }[];
}

const TeachersCarousel: React.FC<ITeachersCarousel> = ({ carouselData }) => {
  const [handleClick, teachersCarouselRef] = useTeachersScroll();

  return (
    <section className="mt-10 px-4 pb-4">
      <Container>
        <div className="relative">
          <div
            ref={teachersCarouselRef}
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
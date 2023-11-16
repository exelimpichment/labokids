import { StaticImageData } from 'next/image';
import Container from '../common/container';
import TeachersCard from './teachersCard';

interface ITeachersCarousel {
  carouselData: {
    id: number;
    name: string;
    position: string;
    image: StaticImageData;
  }[];
}

const TeachersCarousel: React.FC<ITeachersCarousel> = ({ carouselData }) => {
  return (
    <section className="mt-10">
      <Container>
        <div className="flex justify-between gap-5 overflow-x-auto overflow-y-hidden p-4">
          {carouselData.map((teacher) => (
            <TeachersCard key={teacher.id} teacher={teacher} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default TeachersCarousel;

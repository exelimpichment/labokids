import Image, { StaticImageData } from 'next/image';
import { titleFont } from '../fonts';

interface ITeachersCard {
  teacher: {
    id: number;
    name: string;
    position: string;
    image: StaticImageData;
  };
}

const TeachersCard: React.FC<ITeachersCard> = ({ teacher }) => {
  return (
    <div className="min-w-[230px] overflow-hidden rounded-3xl rounded-tr-3xl border bg-slate-100">
      <div className="relative h-[270px] min-w-[200px]  rounded-tl-3xl rounded-tr-3xl">
        <Image
          src={teacher.image}
          fill
          sizes="(max-width: 320px) 100vw, (max-width: 425px) 75vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, (max-width: 1440px) 20vw, 15vw"
          alt="teachers image"
          style={{ objectFit: 'cover', objectPosition: 'center center' }}
        />
      </div>
      <div className="pl-1">
        <p className={` ${titleFont.className} mt-2 text-center text-xl`}>
          {teacher.name}
        </p>
        <p className="mb-4 text-center text-gray-600">{teacher.position}</p>
      </div>
    </div>
  );
};

export default TeachersCard;

import Image, { StaticImageData } from 'next/image';
import { titleFont } from '../fonts';
import teacher1 from '@/public/teacher-1.webp';
import teacher2 from '@/public/teacher-2.webp';
import teacher3 from '@/public/teacher-3.webp';

interface ITeachersCard {
  teacher: {
    id: number;
    name: string;
    position: string;
  };
}

const TeachersCard: React.FC<ITeachersCard> = ({ teacher }) => {
  return (
    <div className="min-w-[230px] overflow-hidden rounded-3xl rounded-tr-3xl border bg-slate-100">
      <div className="relative h-[270px] min-w-[200px]  rounded-tl-3xl rounded-tr-3xl">
        <Image
          src={teacher3}
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

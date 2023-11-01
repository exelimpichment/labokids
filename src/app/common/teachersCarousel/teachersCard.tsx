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
          alt="teachers image"
          style={{ objectFit: 'cover', objectPosition: 'center center' }}
        />
      </div>
      <div className="pl-1">
        <p className={` mt-2 ${titleFont.className} text-xl`}>{teacher.name}</p>
        <p className="mb-4 text-gray-600">{teacher.position}</p>
      </div>
    </div>
  );
};

export default TeachersCard;

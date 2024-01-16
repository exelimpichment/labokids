import Image, { StaticImageData } from 'next/image';
import { titleFont } from '../fonts';
import blue from '@/public/montessoriTeachersImages/blue.jpg';
import teacher1 from '@/public/montessoriTeachersImages/teacher-1.jpg';
import teacher2 from '@/public/montessoriTeachersImages/teacher-2.jpg';
import teacher4 from '@/public/montessoriTeachersImages/teacher-4.jpg';
import teacher5 from '@/public/montessoriTeachersImages/teacher-5.jpg';
import teacher6 from '@/public/montessoriTeachersImages/teacher-6.jpg';
import teacher11 from '@/public/bilingualTeachersImages/teacher-11.jpg';
import teacher15 from '@/public/bilingualTeachersImages/teacher-15.jpg';
import teacher16 from '@/public/bilingualTeachersImages/teacher-16.jpg';
import teacher12 from '@/public/bilingualTeachersImages/teacher-12.jpg';
import teacher13 from '@/public/bilingualTeachersImages/teacher-13.jpg';
import teacher14 from '@/public/bilingualTeachersImages/teacher-14.jpg';
import teacher17 from '@/public/bilingualTeachersImages/teacher-17.jpg';
import { IImageObj } from '@/lib/types';

interface ITeachersCard {
  teacher: {
    id: number;
    name: string;
    position: string;
  };
}

const teachersMapObj: IImageObj = {
  // montessori
  0: blue,
  1: teacher1,
  2: teacher2,
  3: blue,
  4: teacher4,
  5: teacher5,
  6: teacher6,
  7: blue,
  8: blue,
  9: blue,

  // bilingual
  10: blue,
  11: teacher11,
  12: teacher12,
  13: teacher13,
  14: teacher14,
  15: teacher15,
  16: teacher16,
  17: teacher17,
  18: blue,
};

const TeachersCard: React.FC<ITeachersCard> = ({ teacher }) => {
  return (
    <div className="min-w-[230px] overflow-hidden rounded-3xl rounded-tr-3xl border bg-slate-100">
      <div className="relative h-[325px] min-w-[200px]  rounded-tl-3xl rounded-tr-3xl">
        <Image
          src={teachersMapObj[teacher.id]}
          fill
          sizes="(max-width: 320px) 100vw, (max-width: 425px) 75vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, (max-width: 1440px) 20vw, 15vw"
          alt="teachers image"
          style={{ objectFit: 'cover', objectPosition: 'top center' }}
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

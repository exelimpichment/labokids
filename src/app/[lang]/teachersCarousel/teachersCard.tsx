import Image, { StaticImageData } from 'next/image';

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
    <div className="w-96 overflow-hidden rounded-3xl ">
      <div className="relative ">
        <Image
          src={teacher.image}
          fill
          alt="teachers image"
          style={{ objectFit: 'cover', objectPosition: 'center center' }}
        />
      </div>

      <p className="">{teacher.name}</p>
      <p className="">{teacher.position}</p>
    </div>
  );
};

export default TeachersCard;

import Image, { StaticImageData } from 'next/image';
import { titleFont } from '../fonts';

interface IOurTeachersListItem {
  teachers: {
    id: number;
    name: string;
    position: string;
    image: StaticImageData;
  };
}

const OurTeachersListItem: React.FC<IOurTeachersListItem> = ({
  teachers: { id, name, position, image },
}) => {
  return (
    <div className="flex flex-col">
      <div className="rounded-2xl">
        <Image
          src={image}
          alt="teacher image"
          width={225}
          height={300}
          className="rounded-xl"
        />
        <p className={`${titleFont.className} pt-3 text-xl`}>{name}</p>
        <p className="pt-1 text-gray-600">{position}</p>
      </div>
    </div>
  );
};

export default OurTeachersListItem;

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
          height={150}
          className="rounded-xl"
          style={{ width: 'auto' }}
        />
        <p className={`${titleFont.className} pl-3 pt-3 text-xl`}>{name}</p>
        <p className="pl-3 pt-1 text-gray-600">{position}</p>
      </div>
    </div>
  );
};

export default OurTeachersListItem;

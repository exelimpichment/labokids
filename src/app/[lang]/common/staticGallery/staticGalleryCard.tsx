import Image, { StaticImageData } from 'next/image';

interface IStaticGalleryCard {
  item: {
    id: number;
    image: StaticImageData;
    alt: string;
  };
}

const StaticGalleryCard: React.FC<IStaticGalleryCard> = ({ item }) => {
  return (
    <div className="relative h-56 w-96 " key={item.id}>
      <Image
        src={item.image}
        fill
        alt="gallery image"
        placeholder="blur"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        quality={100}
        style={{
          objectFit: 'cover',
          objectPosition: 'center center',
        }}
        className="rounded-xl"
      />
    </div>
  );
};

export default StaticGalleryCard;

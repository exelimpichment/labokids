import Image from 'next/image';
import heroImage from '@/public/bilingualHero.jpg';

const Bilingual2 = () => {
  return (
    <div className="h-screen">
      <div className="absolute -z-10 h-full w-full">
        <Image
          src={heroImage}
          layout="fill"
          objectFit="cover"
          quality={100}
          alt="tst"
        />
      </div>
      <div> Some overlay things go in here </div>
    </div>
  );
};

export default Bilingual2;

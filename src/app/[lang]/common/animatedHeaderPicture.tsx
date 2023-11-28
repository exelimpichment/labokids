import Image from 'next/image';
import movingCrab from '@/public/movingCrab.webp';

const AnimatedHeaderPicture = () => {
  return (
    <div className="absolute left-[-20px] top-[-40px] z-40 animate-reciprocal-vertical sm:left-2 xl:left-[15%]">
      <Image
        height={116}
        width={132}
        src={movingCrab}
        alt="moving crab image"
      />
    </div>
  );
};

export default AnimatedHeaderPicture;

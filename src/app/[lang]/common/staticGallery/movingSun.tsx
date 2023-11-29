import Image from 'next/image';
import movingSun from '@/public/movingSun.webp';

const MovingSun = () => {
  return (
    <div className="absolute bottom-[-90px] right-0  z-40 animate-reciprocal-horizontal xl:bottom-[-132px] xl:right-[10%]">
      <Image width={133} height={137} src={movingSun} alt="moving crab image" />
    </div>
  );
};

export default MovingSun;

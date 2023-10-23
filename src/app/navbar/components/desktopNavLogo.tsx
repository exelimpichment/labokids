import Image from 'next/image';
import laboKidsLogo from '@/public/labokids-logo.png';

const DesktopNavLogo = () => {
  return (
    <div className="h-[38px] xl:h-[50px] 2xl:h-[60px]">
      <Image
        src={laboKidsLogo}
        alt="labokids kindergarten logo"
        style={{ objectFit: 'contain' }}
        className="h-full w-[auto]"
      />
    </div>
  );
};

export default DesktopNavLogo;

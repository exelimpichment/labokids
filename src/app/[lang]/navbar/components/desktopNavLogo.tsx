'use client';

import Image from 'next/image';
import laboKidsLogo from '@/public/labokids-logo.png';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const DesktopNavLogo = () => {
  const pathname = usePathname();
  const locale = pathname.split('/')[1];

  return (
    <Link href={`/${locale}`} className="h-[38px] xl:h-[50px] 2xl:h-[60px]">
      <Image
        src={laboKidsLogo}
        alt="labokids kindergarten logo"
        style={{ objectFit: 'contain' }}
        className="h-full w-[auto]"
      />
    </Link>
  );
};

export default DesktopNavLogo;

'use client';

import { MapPin, Phone } from 'lucide-react';
import { MdAlternateEmail } from 'react-icons/md';
import { usePathname } from 'next/navigation';
import { basicPathnameArr } from '@/lib/basicPathnameArr';

const FooterContactInfo = () => {
  const pathname = usePathname();

  return (
    <div
      className={` ${
        !basicPathnameArr.includes(pathname) ? 'flex' : 'hidden'
      }  flex-col items-center justify-center gap-2 py-3`}
    >
      <div className="">
        <div className="flex">
          <MdAlternateEmail size={20} />
          <a className="pl-1" href="mailto:info@labokids.pl">
            info@labokids.pl
          </a>
        </div>

        <div className="flex pt-2">
          <Phone size={20} />
          <a className="pl-1 " href="tel:+48 503 038 500">
            +48 503 038 500
          </a>
        </div>
      </div>

      <div className="flex flex-col items-center gap-2">
        <div className="flex">
          <MapPin size={20} />
          <div className="flex flex-col items-center pl-1">
            <span>Nad Seganką 6a, Poznań, Poland</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterContactInfo;

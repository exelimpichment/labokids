'use client';

import { MapPin, Phone } from 'lucide-react';
import { MdAlternateEmail } from 'react-icons/md';
import { usePathname } from 'next/navigation';
import { basicPathnameArr } from '@/lib/basicPathnameArr';
import { File } from 'lucide-react';

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

      <a
        href="https://labokids-backet1.s3.eu-north-1.amazonaws.com/polityka_ochrony_maloletnich.pdf"
        download="polityka_ochrony_maloletnich.pdf"
        target="_blank"
        className="flex gap-2"
      >
        <File size={20} />
        <button>Polityka Ochrony Małoletnich</button>
      </a>
    </div>
  );
};

export default FooterContactInfo;

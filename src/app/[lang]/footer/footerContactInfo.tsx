import { MapPin, Phone } from 'lucide-react';
import { MdAlternateEmail } from 'react-icons/md';

const FooterContactInfo = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-2 pb-3">
      <div className="">
        <div className="flex">
          <MdAlternateEmail size={20} />
          <a className="pl-1" href="mailto:info@labokids.pl">
            info@labokids.pl
          </a>
        </div>

        <div className="flex">
          <Phone size={20} />
          <a className="pl-1" href="tel:+48 503 038 500">
            +48 503 038 500
          </a>
        </div>
      </div>

      <div className="">
        <div className="flex">
          <MapPin size={20} />
          <span className="pl-1">
            Knapowskiego 23, Poznań - Labokids Montessori
          </span>
        </div>
        <div className="flex">
          <MapPin size={20} />
          <span className="pl-1">
            Krośnieńska 9, Poznań - Labokids Bilingual
          </span>
        </div>
      </div>
    </div>
  );
};

export default FooterContactInfo;

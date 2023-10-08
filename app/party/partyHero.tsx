import Image from 'next/image';
import girlInPink from '../../public/girl-in-pink.jpg';
import labokidsLogo from '../../public/labokids-logo.png';
import { Instagram, Smartphone } from 'lucide-react';

const PartyHero = () => {
  return (
    <section>
      <div className='fixed inset-0 overflow-hidden z-[-1]'>
        <Image
          alt='smiling girl in pink'
          src={girlInPink}
          placeholder='blur'
          quality={100}
          fill
          sizes='100vw'
          style={{
            objectFit: 'cover',
            objectPosition: 'top center',
          }}
        />
      </div>

      <div className='h-14 flex flex-row items-center justify-between'>
        <Image src={labokidsLogo} alt='labokids logo' height={50} />
        <div className='flex flex-row items-center'>
          <Instagram />
          <Smartphone />
        </div>
      </div>
    </section>
  );
};

export default PartyHero;

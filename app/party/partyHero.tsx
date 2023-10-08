import Image from 'next/image';
import girlInPink from '../../public/girl-in-pink.jpg';
import labokidsLogo from '../../public/labokids-logo.png';
import { Instagram, Smartphone } from 'lucide-react';
import Container from '../common/container';
import { titleFont, kidFont, textFont } from '../common/fonts';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const PartyHero = () => {
  return (
    <section>
      <div className='min-h-[115vh] relative'>
        <Image
          alt='smiling girl in pink'
          src={girlInPink}
          placeholder='blur'
          quality={100}
          fill
          style={{
            objectFit: 'cover',
            objectPosition: 'top center',
          }}
        />
      </div>
      <div className='absolute top-2 w-screen'>
        <Container>
          <div className='h-14 flex flex-row items-center justify-between mt-1'>
            <Image src={labokidsLogo} alt='labokids logo' height={50} />
            <div className='flex flex-row items-center gap-8'>
              <div className='flex justify-center items-center'>
                <Link href='tel:testtest' className='text-laboOrange '>
                  <Smartphone size={20} />
                </Link>
                <span className={`${textFont.className} pl-2`}>
                  800 937 9992
                </span>
              </div>
              <Link
                href='https://www.instagram.com/labokids_23/'
                className='text-white bg-laboOrange h-10 w-10 rounded-full flex justify-center items-center hover:bg-gray-400'
              >
                <Instagram size={20} />
              </Link>
            </div>
          </div>
          <div className='max-w-[60%] mt-[40vh]'>
            <p className={`${kidFont.className} text-2xl text-white pb-3`}>
              Birthday with LaboKids
            </p>
            <h1 className={`${titleFont.className} text-5xl text-white pb-5`}>
              A bright future for all.
            </h1>
            <p
              className={`${textFont.className} text-xl font-extralight text-white`}
            >
              The Universe is one great kindergarten for man. Everything that
              exists has brought with it its own peculiar lesson.
            </p>
          </div>

          <div className='flex flex-row w-full gap-3 py-5'>
            <Button
              variant='outline'
              className='bg-laboOrange border-transparent transition-all duration-500'
            >
              Read More
            </Button>
            <Button
              variant='outline'
              className='border-transparent hover:bg-gray-400 transition-all duration-500'
            >
              Contact Us
            </Button>
          </div>
        </Container>
      </div>
    </section>
  );
};

export default PartyHero;

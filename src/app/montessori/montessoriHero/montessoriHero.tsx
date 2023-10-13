import Image from 'next/image';
import Container from '../../common/container';
import Link from 'next/link';
import { Instagram, Smartphone } from 'lucide-react';
import { kidFont, textFont, titleFont } from '../../common/fonts';
import labokidsLogo from 'public/labokids-logo.png';
import montessoriHero from 'public/montessoriHero.jpg';
import ButtonsHero from '../../party/partyHero/buttonsHero';

const MontessoriHero = () => {
  return (
    <section>
      {/* <div className="sticky top-10 z-50 h-0">dsdsd</div> */}
      <div className="relative min-h-[100vh]">
        <Image
          alt="smiling girl in pink"
          src={montessoriHero}
          placeholder="blur"
          quality={100}
          fill
          style={{
            objectFit: 'cover',
            objectPosition: 'top center',
          }}
        />
      </div>
      <div className="absolute top-2 w-screen">
        <Container>
          <div className="mt-1 flex h-14 flex-row items-center justify-between">
            <Image src={labokidsLogo} alt="labokids logo" height={50} />
            <div className="flex flex-row items-center gap-8">
              <div className="flex items-center justify-center">
                <Link href="tel:testtest" className="text-laboBlack ">
                  <Smartphone size={20} />
                </Link>
                <span className={`${textFont.className} pl-2`}>
                  800 937 9992
                </span>
              </div>
              <Link
                href="https://www.instagram.com/labokids_23/"
                className="relative flex h-9 w-9 items-center justify-center rounded-full bg-transparent text-black before:absolute before:left-1/2  before:top-1/2 before:h-[42px] before:w-[42px] before:-translate-x-1/2 before:-translate-y-1/2 before:rounded-full before:border before:border-dashed before:border-black hover:before:left-auto hover:before:top-auto before:hover:animate-[rotating_5s_linear_infinite]"
              >
                <Instagram size={25} />
              </Link>
            </div>
          </div>
          <div className="flex flex-col items-end">
            <div className="mt-[40vh] max-w-[60%] text-right">
              <p className={`${kidFont.className} pb-3 text-2xl text-white`}>
                Montessori with LaboKids
              </p>
              <h1 className={`${titleFont.className} pb-5 text-5xl text-white`}>
                A bright future for all.
              </h1>
              <p
                className={`${textFont.className} text-xl font-extralight text-white`}
              >
                The Universe is one great kindergarten for man. Everything that
                exists has brought with it its own peculiar lesson.
              </p>
            </div>
          </div>

          <ButtonsHero position={'end'} />
        </Container>
      </div>
    </section>
  );
};

export default MontessoriHero;

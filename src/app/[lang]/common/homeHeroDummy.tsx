'use client';

import Image from 'next/image';
import montessori from '../../../../public/montessoriHero.jpg';
import bilingualHero from '../../../../public/bilingualHero.jpg';
import partyHero from '../../../../public/partyHero.jpg';
import workshopHero from '../../../../public/workshopHero.jpg';
import { Button } from '@/components/ui/button';
import { textFont, titleFont } from '../common/fonts';
import { ArrowRight } from 'lucide-react';
import { usePathname, useRouter } from 'next/navigation';
import { SiInstagram } from 'react-icons/si';
import { FaFacebook } from 'react-icons/fa6';

interface IHomeHero {
  content: {
    heroPageMontessori: {
      kidFontText: string;
      header: string;
      paragraph: string;
    };
    heroPageButtonsText: {
      readMore: string;
      contactUs: string;
    };
    heroPageParty: {
      kidFontText: string;
      header: string;
      paragraph: string;
    };
    heroPageBilingual: {
      kidFontText: string;
      header: string;
      paragraph: string;
    };
    heroPageWorkshops: {
      kidFontText: string;
      header: string;
      paragraph: string;
    };
  };
}

const HomeHeroDummy: React.FC<IHomeHero> = ({
  content: {
    heroPageMontessori,
    heroPageButtonsText,
    heroPageParty,
    heroPageBilingual,
    heroPageWorkshops,
  },
}) => {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <article className="flex flex-col xl:h-screen xl:flex-wrap">
      <div className="relative h-[66vh] text-end xl:h-1/2 xl:w-1/2">
        <Image
          src={montessori}
          fill
          style={{ objectFit: 'cover', objectPosition: 'top center' }}
          quality={100}
          alt="hero image"
          placeholder="blur"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
        <div className="absolute bottom-7 right-7 flex flex-col gap-2">
          <h2
            className={`${titleFont.className}  text-xl text-blue-50 md:text-2xl`}
          >
            {heroPageMontessori.kidFontText}
          </h2>

          <address
            className={` ${textFont.className} flex flex-col gap-1 text-lg font-bold text-blue-50`}
          >
            <a href="https://maps.app.goo.gl/qNmsCweqfJUkHkkE9">
              Knapowskiego 23, Poznań
            </a>
            <a href="tel:+48503038500">+48 503 038 500</a>
          </address>

          <div className="flex justify-end gap-2">
            <a
              href="https://www.instagram.com/labokids_23"
              target="_blank"
              className="flex h-10 w-10 cursor-pointer items-center justify-center rounded bg-laboBlue transition-all duration-500 hover:bg-white"
            >
              <SiInstagram size={28} />
            </a>
            <a
              href="https://www.facebook.com/Labokids"
              target="_blank"
              className="flex h-10 w-10 cursor-pointer items-center justify-center rounded bg-laboBlue transition-all duration-500 hover:bg-white"
            >
              <FaFacebook size={28} />
            </a>
            <Button
              onClick={() => router.push(`/montessori`)}
              className={`${titleFont.className}  rounded border-transparent bg-laboBlue text-base transition-all duration-500 hover:bg-white`}
              type="button"
              variant="outline"
            >
              {heroPageButtonsText.readMore}
              <ArrowRight size={18} className="ml-2" />
            </Button>
          </div>
        </div>
      </div>

      <div className="relative order-3 h-[66vh] xl:order-2 xl:h-1/2 xl:w-1/2">
        <Image
          src={partyHero}
          fill
          style={{ objectFit: 'cover', objectPosition: 'top center' }}
          quality={100}
          alt="hero image"
          placeholder="blur"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
        <div className="absolute bottom-7 right-10">
          <h2 className={`${titleFont.className} pb-4 text-2xl text-blue-50`}>
            {heroPageParty.kidFontText}
          </h2>
          <div className="flex justify-end">
            <Button
              onClick={() => router.push(`/party`)}
              className={`${titleFont.className}  rounded border-transparent bg-laboBlue text-base transition-all duration-500 hover:bg-white`}
              type="button"
              variant="outline"
            >
              {heroPageButtonsText.readMore}
              <ArrowRight size={18} className="ml-2" />
            </Button>
          </div>
        </div>
      </div>

      <div className="relative  h-[66vh] xl:h-1/2 xl:w-1/2">
        <Image
          src={bilingualHero}
          fill
          style={{ objectFit: 'cover', objectPosition: 'top center' }}
          quality={100}
          alt="hero image"
          placeholder="blur"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
        <div className="absolute bottom-7 right-7 flex flex-col gap-2 text-end">
          <h2
            className={`${titleFont.className}  text-xl text-blue-50 md:text-2xl`}
          >
            {heroPageBilingual.kidFontText}
          </h2>

          <address
            className={` ${textFont.className} flex flex-col gap-1 text-lg font-bold text-blue-50 `}
          >
            <a href="https://maps.app.goo.gl/4fTR5xNpvZUtaizr8">
              Krośnieńska 9, Poznań
            </a>
            <a href="tel:+48503038500">+48 503 038 500</a>
          </address>

          <div className="flex justify-end gap-2">
            <a
              href="https://www.instagram.com/labokids.9"
              target="_blank"
              className="flex h-10 w-10 cursor-pointer items-center justify-center rounded bg-laboBlue transition-all duration-500 hover:bg-white"
            >
              <SiInstagram size={28} />
            </a>
            <a
              href="https://www.facebook.com/Labokids"
              target="_blank"
              className="flex h-10 w-10 cursor-pointer items-center justify-center rounded bg-laboBlue transition-all duration-500 hover:bg-white"
            >
              <FaFacebook size={28} />
            </a>
            <Button
              onClick={() => router.push(`/bilingual`)}
              className={`${titleFont.className}  rounded border-transparent bg-laboBlue text-base transition-all duration-500 hover:bg-white`}
              type="button"
              variant="outline"
            >
              {heroPageButtonsText.readMore}
              <ArrowRight size={18} className="ml-2" />
            </Button>
          </div>
        </div>
      </div>

      <div className="relative h-[66vh] xl:h-1/2 xl:w-1/2">
        <Image
          src={workshopHero}
          fill
          style={{ objectFit: 'cover', objectPosition: 'top center' }}
          quality={100}
          alt="hero image"
          placeholder="blur"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
        <div className="absolute bottom-7 right-10">
          <h2 className={`${titleFont.className} pb-4 text-2xl text-blue-50`}>
            {heroPageWorkshops.kidFontText}
          </h2>
          <div className="flex justify-end">
            <Button
              onClick={() => router.push(`/workshops`)}
              className={`${titleFont.className}  rounded border-transparent bg-laboBlue text-base transition-all duration-500 hover:bg-white`}
              type="button"
              variant="outline"
            >
              {heroPageButtonsText.readMore}
              <ArrowRight size={18} className="ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </article>
  );
};

export default HomeHeroDummy;

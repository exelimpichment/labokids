import Image from 'next/image';
import Container from '../common/container';
import homeHero from '@/public/unsplash.jpg';
import { homeHeadings } from './homeData';
import { titleFont } from '../common/fonts';
import { useRouter } from 'next/router';

const HomeHero = () => {
  // const { locale, locales, asPath } = useRouter();
  // console.log(locale, locales, asPath);
  return (
    <section>
      <div className="h-screen">
        <div className="absolute -z-10 h-full w-full">
          <Image
            src={homeHero}
            fill
            style={{ objectFit: 'cover', objectPosition: 'top center' }}
            quality={100}
            alt="hero image"
            placeholder="blur"
          />
        </div>
        <Container>
          {homeHeadings.map(({ heading, key }) => (
            <h2
              className={`${titleFont.className} text-4xl  text-blue-100 `}
              key={key}
            >
              <i> {heading}</i>
            </h2>
          ))}
        </Container>
      </div>
    </section>
  );
};

export default HomeHero;

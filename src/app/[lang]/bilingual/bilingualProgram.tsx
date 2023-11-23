import Image from 'next/image';
import Container from '../common/container';
import nativeSpeakerImage from '@/public/nativeSpeakerImage.jpg';
import bilingualOgrod from '@/public/bilingualOgrod.jpg';
import { titleFont } from '../common/fonts';

const BilingualProgram = () => {
  return (
    <section>
      <Container>
        <div className="mt-10 flex flex-col gap-16 lg:gap-10">
          <div className="flex flex-col gap-3 lg:flex-row lg:gap-10">
            <div
              className={`equalFlexPart relative min-h-[350px] overflow-hidden`}
            >
              <Image
                loading="lazy"
                src={nativeSpeakerImage}
                alt="method image"
                fill
                className="rounded-3xl"
                quality={100}
                placeholder="blur"
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{
                  objectFit: 'cover',
                  objectPosition: 'top center',
                }}
              />
            </div>
            <div className="equalFlexPart lg:min-h-[350px]">
              <h2 className={`${titleFont.className} text-center text-2xl`}>
                Język angielski
              </h2>
              <p className="pt-5 text-center text-lg text-gray-600">
                Jesteśmy przedszkolem, które łączy rozwijanie wrażliwości
                muzycznej z edukacją językową. W ciepłej i rodzinnej atmosferze
                rozwijamy miłość do muzyki poprzez otaczanie dzieci dźwiękiem,
                melodią i rytmem. Tworzona przez nas przestrzeń sprzyja
                nabywaniu przez dzieci umiejętności wyrażania uczuć i
                komunikowania potrzeb. Dużo czasu spędzamy również w naszym
                przepięknym ogrodzie.
              </p>
            </div>
          </div>
          {/* ========================== */}
          <div className="flex flex-col gap-3 lg:flex-row lg:gap-10">
            <div
              className={`equalFlexPart relative min-h-[350px] overflow-hidden lg:order-1`}
            >
              <Image
                loading="lazy"
                src={nativeSpeakerImage}
                alt="method image"
                fill
                className="rounded-3xl"
                quality={100}
                placeholder="blur"
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{
                  objectFit: 'cover',
                  objectPosition: 'top center',
                }}
              />
            </div>
            <div className="equalFlexPart lg:min-h-[350px]">
              <h2 className={`${titleFont.className} text-center text-2xl`}>
                Muzyka
              </h2>
              <p className="pt-5 text-center text-lg text-gray-600">
                Wśród naszych przedszkolaków można spotkać dzieci mówiące
                różnymi językami. Chcemy wykorzystać te okoliczności, które w
                naturalny sposób zachęcają dzieci do integracji, otwartości na
                świat i szacunku dla swoich rówieśników i dorosłych. Już od
                pierwszych dni obecności dziecka w naszym przedszkolu mają one
                codzienny kontakt z językiem angielskim. Stosujemy metodę
                immersji językowej, dzięki której dzieci chłoną język w
                naturalny sposób. Nauka angielskiego odbywa się również poprzez
                zastosowanie pedagogiki zabawy oraz regularnych zajęć
                językowych.
              </p>
            </div>
          </div>
          {/* ========================== */}
          <div className="flex flex-col gap-3 lg:flex-row lg:gap-10">
            <div
              className={`equalFlexPart relative min-h-[350px] overflow-hidden `}
            >
              <Image
                loading="lazy"
                src={bilingualOgrod}
                alt="method image"
                fill
                className="rounded-3xl"
                quality={100}
                placeholder="blur"
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{
                  objectFit: 'cover',
                  objectPosition: 'top center',
                }}
              />
            </div>
            <div className="equalFlexPart lg:min-h-[350px]">
              <h2 className={`${titleFont.className} text-center text-2xl`}>
                Natura
              </h2>
              <p className="pt-5 text-center text-lg text-gray-600">
                Z nami dzieci będą się wspaniale bawić na piknikach i rodzinnych
                imprezach. Podczas spotkań plenerowych, firmowych i rodzinnych
                zapewnimy ciekawe zajęcia, poprowadzimy eksperymenty, gry i
                zabawy. Z nami maluchy spędzą wesoło niezapomniany czas Zabawy
                na piknikach firmowych i przyjęciach rodzinnych
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default BilingualProgram;

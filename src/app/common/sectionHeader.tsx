import Image from 'next/image';
import { kidFont, textFont, titleFont } from './fonts';
import bee from 'public/bee.webp';
import movingCrab from '@/public/movingCrab.webp';

interface ISectionHeader {
  content: { kidFontText: string; header: string; paragraph: string };
}

const SectionHeader: React.FC<ISectionHeader> = ({
  content: { kidFontText, header, paragraph },
}) => {
  return (
    <div className="relative mt-16 flex max-w-full flex-col items-center justify-center">
      <div className="animate-reciprocal-vertical absolute left-[-20px] top-[-120px] z-50 sm:left-2 xl:left-[15%]">
        <Image
          height={116}
          width={132}
          src={movingCrab}
          alt="moving crab image"
        />
      </div>
      <p className={`${kidFont.className} mb-2 text-lg text-laboRed`}>
        {kidFontText}
      </p>
      <h2
        className={`${titleFont.className} mb-5 text-center text-4xl text-laboBlue`}
      >
        {header}
      </h2>
      <p
        className={`${textFont.className} mb-5 max-w-[50%] text-center text-gray-600 2sm:min-w-[90%] lg:min-w-[70%]  xl:min-w-0`}
      >
        {paragraph}
      </p>

      <Image src={bee} height={25} alt="small bee" />
    </div>
  );
};

export default SectionHeader;

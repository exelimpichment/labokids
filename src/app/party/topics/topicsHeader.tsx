import Image from 'next/image';
import bee from 'public/bee.webp';
import movingSun from 'public/movingSun.webp';
import movingRocket from 'public/movingRocket.webp';
import { kidFont, textFont, titleFont } from '../../common/fonts';

const TopicsHeader = () => {
  return (
    <div className="relative mt-10 flex max-w-full flex-col items-center justify-center">
      <div className="absolute right-0 animate-reciprocal">
        <Image src={movingRocket} alt="picture of a rocket" width={150} />
      </div>
      <div className="absolute left-0 animate-reciprocal-horizontal">
        <Image src={movingSun} width={120} alt="picture of a sun" />
      </div>

      <p className={`${kidFont.className} mb-2 text-lg text-laboRed`}>
        HAPPINESS FOR KIDS
      </p>
      <h2 className={`${titleFont.className} mb-5 text-4xl text-laboBlue`}>
        Birthday topics
      </h2>
      <p
        className={`${textFont.className} mb-5 max-w-[50%] text-center  text-gray-600`}
      >
        Experience the magic of science and amaze your little ones with
        thrilling experiments! Book a birthday party they&rsquo;ll never forget.
      </p>

      <Image src={bee} height={25} alt="small bee" />
    </div>
  );
};

export default TopicsHeader;

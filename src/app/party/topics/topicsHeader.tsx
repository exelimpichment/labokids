import Image from 'next/image';
import bee from 'public/bee.webp';
import movingSun from 'public/movingSun.webp';
import movingRocket from 'public/movingRocket.webp';
import { kidFont, textFont, titleFont } from '../../common/fonts';

const TopicsHeader = () => {
  return (
    <div className="relative mt-10 flex max-w-full flex-col items-center justify-center">
      <div className="animate-reciprocal absolute right-0">
        <Image src={movingRocket} alt="picture of a rocket" width={150} />
      </div>
      <div className="animate-reciprocal-horizontal absolute left-0">
        <Image src={movingSun} width={120} alt="picture of a sun" />
      </div>

      <p className={`${kidFont.className} mb-2 text-lg text-laboRed`}>
        HAPPINESS FOR KIDS
      </p>
      <h2 className={`${titleFont.className} mb-5 text-4xl text-laboBlue`}>
        Birthday topics
      </h2>
      <p
        className={`${textFont.className} mb-5 max-w-[50%] text-center text-sm text-gray-900`}
      >
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem quibusdam
        autem, inventore cumque beatae alias quisquam repudiandae excepturi
        veritatis similique.
      </p>
      <Image src={bee} height={25} alt="small bee" />
    </div>
  );
};

export default TopicsHeader;

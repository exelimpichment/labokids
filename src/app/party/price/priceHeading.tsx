import Image from 'next/image';
import { kidFont, textFont, titleFont } from '../../common/fonts';
import bee from 'public/bee.webp';

const PriceHeading = () => {
  return (
    <div className="flex w-full flex-col items-center justify-center">
      <p className={`${kidFont.className} mb-2 text-lg text-laboRed`}>
        BEST PRICE FOR PARENTS
      </p>
      <h2 className={`${titleFont.className} mb-5  text-4xl text-laboBlue`}>
        Pricing
      </h2>
      <p
        className={`${textFont.className} mb-5 max-w-[50%] text-center  text-gray-600`}
      >
        Discover unbeatable prices for unforgettable parties - our commitment to
        affordability ensures you get the best value for your celebrations.
      </p>
      <Image src={bee} height={25} alt="small bee" />
    </div>
  );
};

export default PriceHeading;

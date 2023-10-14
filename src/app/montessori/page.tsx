import PageHero from '../common/pageHero';
import Price from '../common/price/price';
import OurTeachers from '../common/TeachersGallery/ourTeachers';

import { montessoriHeroContent } from './montessoriData';

const Montessori = () => {
  return (
    <>
      <PageHero content={montessoriHeroContent} />
      <OurTeachers />
      <Price />
      <div className="mt-96"></div>
    </>
  );
};

export default Montessori;

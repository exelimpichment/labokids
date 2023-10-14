import OurTeachers from '../common/TeachersGallery/ourTeachers';
import PageHero from '../common/pageHero';
import Price from '../common/price/price';
import { bilingualHeroContent } from './bilingualData';

const Bilingual = () => {
  return (
    <>
      <PageHero content={bilingualHeroContent} />
      <OurTeachers />
      <Price />

      <div className="mt-96"></div>
    </>
  );
};

export default Bilingual;

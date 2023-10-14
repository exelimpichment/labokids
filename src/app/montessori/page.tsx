import ImageGallery from '../common/ImageGallery/ImageGallery';
import PageHero from '../common/pageHero';
import Price from '../common/price/price';
import SectionHeader from '../common/sectionHeader';
import OurTeachers from '../common/TeachersGallery/ourTeachers';

import { imagesHeaderContent, montessoriHeroContent } from './montessoriData';

const Montessori = () => {
  return (
    <>
      <PageHero content={montessoriHeroContent} />
      <OurTeachers />
      <Price />
      <SectionHeader content={imagesHeaderContent} />
      <ImageGallery />
      <div className="mt-96"></div>
    </>
  );
};

export default Montessori;

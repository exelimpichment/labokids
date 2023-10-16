import ImageGallery from '../common/ImageGallery/ImageGallery';
import OurTeachers from '../common/TeachersGallery/ourTeachers';
import PageHero from '../common/pageHero';
import Price from '../common/price/price';
import SectionHeader from '../common/sectionHeader';
import {
  aboutMontessoriHeaderContent,
  imagesHeaderContent,
} from '../montessori/montessoriData';
import {
  bilingualHeroContent,
  bilingualTeachersHeader,
  priceHeaderContent,
} from './bilingualData';

const Bilingual = () => {
  return (
    <>
      <PageHero content={bilingualHeroContent} />
      <SectionHeader content={imagesHeaderContent} />
      <ImageGallery />
      <SectionHeader content={bilingualTeachersHeader} />
      <OurTeachers />
      <SectionHeader content={priceHeaderContent} />
      <Price />

      <div className="mt-96"></div>
    </>
  );
};

export default Bilingual;
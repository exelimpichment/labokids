import { Locale } from '@/i18n.config';
import PageHero from '../common/pageHero';
import Price from '../common/price/price';
import ScrollToComponent from '../common/scrollToComponent';
import ScrollToTopComponent from '../common/scrollToTopComponent';
import SectionHeader from '../common/sectionHeader';
import StaticGallery from '../common/staticGallery/staticGallery';
import Topics from '../common/topics/topics';
import { getDictionary } from '@/lib/dictionary';
import { workshopGalleryPhotoSet } from './workshopImageStoringObj.tsx';

const Workshops = async ({
  params: { lang },
}: {
  params: { lang: Locale };
}) => {
  const {
    heroPageWorkshops,
    heroPageButtonsText,
    workshopAccordionHeaderData,
    accordionWorkshopsData,
    imagesWorkshopsHeaderContent,
    workshopPricingData,
    priceWorkshopsHeaderContent,
  } = await getDictionary(lang);
  return (
    <main className="content">
      <ScrollToTopComponent />
      <PageHero content={{ ...heroPageWorkshops, heroPageButtonsText }} />
      <ScrollToComponent />
      <SectionHeader content={workshopAccordionHeaderData} />
      <Topics accordionData={accordionWorkshopsData} />
      <SectionHeader content={imagesWorkshopsHeaderContent} />
      <StaticGallery galleryImages={workshopGalleryPhotoSet} />
      <SectionHeader content={priceWorkshopsHeaderContent} />
      <Price priceData={workshopPricingData} />
    </main>
  );
};

export default Workshops;

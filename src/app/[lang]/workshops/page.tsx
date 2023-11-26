import { Locale } from '@/i18n.config';
import PageHero from '../common/pageHero';
import Price from '../common/price/price';
import ScrollToComponent from '../common/scrollToComponent';
import ScrollToTopComponent from '../common/scrollToTopComponent';
import SectionHeader from '../common/sectionHeader';
import StaticGallery from '../common/staticGallery/staticGallery';
import Topics from '../common/topics/topics';

import {
  accordionWorkshopData,
  imagesWorkshopHeaderContent,
  priceWorkshopHeaderContent,
  workshopAccordionHeaderData,
  workshopGalleryPhotoSets,
  workshopPricingData,
} from './workshopData';
import { getDictionary } from '@/lib/dictionary';

const Workshops = async ({
  params: { lang },
}: {
  params: { lang: Locale };
}) => {
  const { heroPageWorkshops, heroPageButtonsText } = await getDictionary(lang);
  return (
    <main className="content">
      <ScrollToTopComponent />
      <PageHero content={{ ...heroPageWorkshops, heroPageButtonsText }} />
      <ScrollToComponent />
      <SectionHeader content={workshopAccordionHeaderData} />
      <Topics accordionData={accordionWorkshopData} />
      <SectionHeader content={imagesWorkshopHeaderContent} />
      <StaticGallery galleryImages={workshopGalleryPhotoSets['baloniki']} />
      <SectionHeader content={priceWorkshopHeaderContent} />
      <Price priceData={workshopPricingData} />
    </main>
  );
};

export default Workshops;

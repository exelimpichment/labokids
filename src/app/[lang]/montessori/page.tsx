import PageHero from '../common/pageHero';
import Price from '../common/price/price';
import ScrollToComponent from '../common/scrollToComponent';
import SectionHeader from '../common/sectionHeader';

import MontessoriMethodsList from './MontessoriMethodsList/montessoriMethodsList';
import StaticGallery from '../common/staticGallery/staticGallery';

import ScrollToTopComponent from '../common/scrollToTopComponent';

import TeachersCarousel from '../common/teachersCarousel/teachersCarousel';
import { getDictionary } from '@/lib/dictionary';
import { Locale } from '@/i18n.config';
import { montessoriGalleryPhotoSet } from './montessoriImageStoringObj';

const Montessori = async ({
  params: { lang },
}: {
  params: { lang: Locale };
}) => {
  const {
    heroPageMontessori,
    heroPageButtonsText,
    aboutMontessoriHeaderContent,
    montessoriMethodsList,
    imagesMontessoriHeaderContent,
    teachersMontessoriHeaderContent,
    priceMontessoriHeaderContent,
    montessoriPricingData,
    teachersMontessoriCarouselData,
  } = await getDictionary(lang);

  return (
    <main className="content">
      <ScrollToTopComponent />
      <PageHero content={{ ...heroPageMontessori, heroPageButtonsText }} />
      <ScrollToComponent />
      <SectionHeader content={aboutMontessoriHeaderContent} />
      <MontessoriMethodsList montessoriMethodsList={montessoriMethodsList} />
      <div style={{
        display: "flex",
        justifyContent: "center",
        width: "100%",
        marginTop: "35px"
      }}>
        <a href="/pl/elementy-montessori"><button className="mx-8 inline-flex items-center justify-center font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border hover:text-accent-foreground h-10 px-4 py-2 __className_9ee573 rounded border-transparent bg-laboBlue text-base transition-all duration-500 hover:bg-white" type="button">Elementy montessori</button></a>
        <a href="/pl/przedszkole-integracyjne"><button className="mx-8 inline-flex items-center justify-center font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border hover:text-accent-foreground h-10 px-4 py-2 __className_9ee573 rounded border-transparent bg-laboBlue text-base transition-all duration-500 hover:bg-white" type="button">Przedszkole integracyjne</button></a>
        <a href="/pl/zajecia-anglojezyczne"><button className="mx-8 inline-flex items-center justify-center font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border hover:text-accent-foreground h-10 px-4 py-2 __className_9ee573 rounded border-transparent bg-laboBlue text-base transition-all duration-500 hover:bg-white" type="button">Zajęcia anglojęzyczne</button></a>
      </div>
      <SectionHeader
        content={imagesMontessoriHeaderContent}
        animatedPicture={true}
      />

      <StaticGallery galleryImages={montessoriGalleryPhotoSet} />
      {/* <SectionHeader content={teachersMontessoriHeaderContent} /> */}
      {/* <div className="mb-20">
        <TeachersCarousel carouselData={teachersMontessoriCarouselData} />
      </div> */}
      <SectionHeader content={priceMontessoriHeaderContent} />

      <Price priceData={montessoriPricingData} />
    </main>
  );
};

export default Montessori;

// montessori method list

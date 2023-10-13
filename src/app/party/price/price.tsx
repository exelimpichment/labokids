import Container from '../../common/container';
import SectionHeader from '../../common/sectionHeader';
import PriceCards from './priceCards';
import { content } from './pricingData';

const Price = () => {
  return (
    <section className="mt-10">
      <Container>
        <SectionHeader content={content} />
        <PriceCards />
      </Container>
    </section>
  );
};

export default Price;

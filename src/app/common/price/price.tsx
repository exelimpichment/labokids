import Container from '../container';
import SectionHeader from '../sectionHeader';
import PriceCards from './priceCards';
import { content, priceHeaderContent } from '../../party/partyData';

const Price = () => {
  return (
    <section className="mt-10">
      <Container>
        <SectionHeader content={priceHeaderContent} />
        <PriceCards />
      </Container>
    </section>
  );
};

export default Price;

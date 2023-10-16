import Container from '../container';
import SectionHeader from '../sectionHeader';
import PriceCards from './priceCards';

const Price = () => {
  return (
    <section className="mt-10">
      <Container>
        <PriceCards />
      </Container>
    </section>
  );
};

export default Price;

import Container from '../../common/container';
import PriceCard from './priceCard';
import PriceCards from './priceCards';
import PriceHeading from './priceHeading';
import pricingData from './pricingData';

const Price = () => {
  return (
    <section className="mt-10">
      <Container>
        <PriceHeading />
        <PriceCards />
      </Container>
    </section>
  );
};

export default Price;

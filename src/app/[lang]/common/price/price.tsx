import { PriceDataProps } from '@/lib/types';
import Container from '../container';
import PriceCards from './priceCards';

const Price: React.FC<PriceDataProps> = ({ priceData }) => {
  return (
    <section className="mt-10">
      <Container>
        <PriceCards priceData={priceData} />
      </Container>
    </section>
  );
};

export default Price;

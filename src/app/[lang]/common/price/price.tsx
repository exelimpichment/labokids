import { PriceDataProps } from '@/lib/types';
import Container from '../container';
import PriceCards from './priceCards';

interface IPriceDataProps {
  priceData: {
    id: number;
    header: string;
    paragraph: string;
    price: string;
    advantages: string[];
    hints: string[];
  }[];
}

const Price: React.FC<IPriceDataProps> = ({ priceData }) => {
  return (
    <section className="mt-10">
      <Container>
        <PriceCards priceData={priceData} />
      </Container>
    </section>
  );
};

export default Price;

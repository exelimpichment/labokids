import { IconType } from 'react-icons';
import { LucideIcon } from 'lucide-react';
import Container from '../container';
import PriceCards from './priceCards';

interface PriceDataProps {
  priceData: {
    id: number;
    header: string;
    paragraph: string;
    price: number | string;
    advantages: string[];
    icon: any;
  }[];
}

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

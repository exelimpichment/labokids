import { IconType } from 'react-icons';
import AccordionTopicsList from './AccordionCollapsibleItemsList';
import Container from '../container';
import { LucideIcon } from 'lucide-react';

interface ITopics {
  accordionData: {
    key: number;
    value: string;
    borderColor: string;
    fontColor: string;
    backgroundColor: string;
    heading: string;
    icon: IconType | LucideIcon;
    description: string;
  }[];
}

const Topics: React.FC<ITopics> = ({ accordionData }) => {
  return (
    <section>
      <Container>
        <AccordionTopicsList accordionPartyData={accordionData} />
      </Container>
    </section>
  );
};

export default Topics;

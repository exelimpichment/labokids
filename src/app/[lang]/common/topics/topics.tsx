import AccordionTopicsList from './AccordionCollapsibleItemsList';
import Container from '../container';
import { ITopics } from '@/lib/types';

const Topics: React.FC<ITopics> = ({ accordionData }) => {
  return (
    <section>
      <Container>
        <AccordionTopicsList accordionData={accordionData} />
      </Container>
    </section>
  );
};

export default Topics;

'use client';

import Container from '../../common/container';
import { useGlobalContext } from '../../context/globalContext';
import AccordionTopicsList from './AccordionCollapsibleItemsList';

const Topics = () => {
  return (
    <section>
      <div></div>
      <Container>
        <AccordionTopicsList />
      </Container>
    </section>
  );
};

export default Topics;

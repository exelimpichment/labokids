'use client';

import Container from '../../common/container';
import { useGlobalContext } from '../../context/globalContext';
import AccordionTopicsList from './AccordionCollapsibleItemsList';

const Topics = () => {
  const { topicsRef } = useGlobalContext();
  return (
    <section>
      <div ref={topicsRef} className="border border-transparent"></div>
      <Container>
        <AccordionTopicsList />
      </Container>
    </section>
  );
};

export default Topics;

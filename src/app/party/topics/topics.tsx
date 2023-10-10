'use client';

import Container from '../../common/container';
import { useGlobalContext } from '../../context/globalContext';
import AccordionTopics from './accordionTopics';
import AccordionPrice from './accordionTopics';
import TopicsHeader from './topicsHeader';

import PriceHeader from './topicsHeader';

const Topics = () => {
  const { topicsRef } = useGlobalContext();
  return (
    <section>
      <div ref={topicsRef} className="border border-transparent"></div>
      <Container>
        <TopicsHeader />
        <AccordionTopics />
      </Container>
    </section>
  );
};

export default Topics;

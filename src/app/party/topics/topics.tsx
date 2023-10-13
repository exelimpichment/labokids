'use client';

import Container from '../../common/container';
import SectionHeader from '../../common/sectionHeader';
import { useGlobalContext } from '../../context/globalContext';

import AccordionTopicsList from './AccordionCollapsibleItemsList';
import { content } from './accordionData';

const Topics = () => {
  const { topicsRef } = useGlobalContext();
  return (
    <section>
      <div ref={topicsRef} className="border border-transparent"></div>
      <Container>
        <SectionHeader content={content} />
        <AccordionTopicsList />
      </Container>
    </section>
  );
};

export default Topics;

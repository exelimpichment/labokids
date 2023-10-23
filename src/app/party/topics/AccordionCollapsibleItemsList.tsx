import { Accordion } from '@/components/ui/accordion';

import AccordionCollapsibleItem from './accordionCollapsibleItem';
import { accordionPartyData } from '../partyData';

const AccordionCollapsibleItemsList = () => {
  return (
    <Accordion
      type="single"
      className="mx-auto mt-10 w-full max-w-[100vw] lg:max-w-[75vw] xl:max-w-[55vw]"
      collapsible
    >
      {accordionPartyData.map((item) => (
        <AccordionCollapsibleItem key={item.key} item={item} />
      ))}
    </Accordion>
  );
};

export default AccordionCollapsibleItemsList;

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { FaSoap } from 'react-icons/fa';
import { GiBalloons, GiFoam } from 'react-icons/gi';
import { SlChemistry } from 'react-icons/sl';
import { titleFont } from '../../common/fonts';

const AccordionTopics = () => {
  return (
    <div className="pt-6">
      <Accordion
        type="single"
        className="mx-auto w-full max-w-[60vw]"
        collapsible
      >
        <AccordionItem value="item-1" className="">
          <AccordionTrigger
            className={`${titleFont.className}  text-xl  text-laboRed`}
          >
            <div className="flex items-center justify-center gap-4">
              <div className="relative flex h-14 w-14 items-center justify-center rounded-full bg-laboRed text-white before:absolute before:left-1/2  before:top-1/2 before:h-[60px] before:w-[60px] before:-translate-x-1/2 before:-translate-y-1/2 before:rounded-full before:border before:border-dashed before:border-laboRed hover:before:left-auto hover:before:top-auto before:hover:animate-[rotating_5s_linear_infinite]">
                <div className="translate-y-[-4px]">
                  <FaSoap size={32} />
                </div>
              </div>
              <span>Pachnący świat mydełek</span>
            </div>
          </AccordionTrigger>
          <AccordionContent>
            W trakcie imprezy dzieci dowiedzą się wielu ciekawostek o mydle, a
            następnie stworzą własne, niepowtarzalne, pachnące mydło w wybranym
            przez siebie kształcie. Będzie to swoiste laboratorium, w którym
            uczestnicy mieszać będą kolory, zapachy i inne dodatki. Na koniec
            zapakują mydełka i zabiorą je do domu.
          </AccordionContent>
        </AccordionItem>
        {/* ============== */}
        <AccordionItem value="item-2">
          <AccordionTrigger
            className={`${titleFont.className}  text-xl  text-laboOrange`}
          >
            <div className="flex items-center justify-center gap-4">
              <div className="relative flex h-14 w-14 items-center justify-center rounded-full bg-laboOrange text-white before:absolute before:left-1/2  before:top-1/2 before:h-[60px] before:w-[60px] before:-translate-x-1/2 before:-translate-y-1/2 before:rounded-full before:border before:border-dashed before:border-laboOrange hover:before:left-auto hover:before:top-auto before:hover:animate-[rotating_5s_linear_infinite]">
                <GiFoam size={32} />
              </div>
              <span>W krainie lodu</span>
            </div>
          </AccordionTrigger>
          <AccordionContent>
            Mroźne doświadczenia i gorące emocje. Czy lód to zawsze zamarznięta
            woda? Czy istnieje taki lód, który się nie topi? Wykonamy
            niesamowite eksperymenty z użyciem suchego lodu. Podczas tej wyprawy
            między innymi przekonamy się czym jest suchy lód, sprawdzimy czy
            rzeczywiście jest taki zimny oraz zrobimy tajemniczą mgłę.
          </AccordionContent>
        </AccordionItem>
        {/* ============== */}
        <AccordionItem value="item-3">
          <AccordionTrigger
            className={`${titleFont.className}  text-xl  text-laboBlue`}
          >
            <div className="flex items-center justify-center gap-4">
              <div className="relative flex h-14 w-14 items-center justify-center rounded-full bg-laboBlue text-white before:absolute before:left-1/2  before:top-1/2 before:h-[60px] before:w-[60px] before:-translate-x-1/2 before:-translate-y-1/2 before:rounded-full before:border before:border-dashed before:border-laboBlue hover:before:left-auto hover:before:top-auto before:hover:animate-[rotating_5s_linear_infinite]">
                <GiBalloons size={32} />
              </div>
              <span>Balonowe Party</span>
            </div>
          </AccordionTrigger>
          <AccordionContent>
            Czy wiesz, że balon powstał praktycznie przez przypadek, jako efekt
            uboczny eksperymentów i prób wynalezienia nowego tworzywa na dętki.?
            Czy wiesz, że wynalazł go inżynier chemii, Neil Tillotson? Podczas
            imprezy dzieci nie tylko dowiedzą się wielu ciekawostek, ale także
            napompują balony w niecodzienny sposób oraz nauczą się skręcać różne
            zwierzątka i inne kształty. Po urodzinach każdy wróci do domu z
            pamiątkowymi balonami!
          </AccordionContent>
        </AccordionItem>
        {/* ============== */}
        <AccordionItem value="item-4">
          <AccordionTrigger
            className={`${titleFont.className}  text-xl  text-laboGreen`}
          >
            <div className="flex items-center justify-center gap-4">
              <div className="relative flex h-14 w-14 items-center justify-center rounded-full bg-laboGreen text-white before:absolute before:left-1/2  before:top-1/2 before:h-[60px] before:w-[60px] before:-translate-x-1/2 before:-translate-y-1/2 before:rounded-full before:border before:border-dashed before:border-laboGreen hover:before:left-auto hover:before:top-auto before:hover:animate-[rotating_5s_linear_infinite]">
                <div className="translate-y-[-3px]">
                  <SlChemistry size={32} />
                </div>
              </div>
              <span>Spotkanie z magiczną chemią</span>
            </div>
          </AccordionTrigger>
          <AccordionContent>
            To niezwykła wyprawa w świat chemii. Podczas przyjęcia dzieci
            wykonają niesamowite doświadczenia, m.in. sprawią, że zniknie woda,
            wywołają Dżina z butelki czy rozpalą ogień bez zapałek.
          </AccordionContent>
        </AccordionItem>
        {/* ============== */}
      </Accordion>
    </div>
  );
};

export default AccordionTopics;

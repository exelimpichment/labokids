import { FaSoap } from 'react-icons/fa';
import { GiBalloons, GiFoam } from 'react-icons/gi';
import { SlChemistry } from 'react-icons/sl';

export const content = {
  kidFontText: 'HAPPINESS FOR KIDS',
  header: 'Birthday topics',
  paragraph:
    'Experience the magic of science and amaze your little ones with thrilling experiments! Book a birthday party they’ll never forget.',
};

export const accordionData = [
  {
    value: 'item-0',
    cardColor: 'laboRed',
    heading: 'Pachnący świat mydełek',
    icon: FaSoap,
    transformAmount: '[-4px]',
    description:
      'W trakcie imprezy dzieci dowiedzą się wielu ciekawostek o mydle, a ' +
      'następnie stworzą własne, niepowtarzalne, pachnące mydło w wybranym ' +
      'przez siebie kształcie. Będzie to swoiste laboratorium, w którym ' +
      'uczestnicy mieszać będą kolory, zapachy i inne dodatki. Na koniec ' +
      'zapakują mydełka i zabiorą je do domu.',
  },
  {
    value: 'item-1',
    cardColor: 'laboOrange',
    heading: 'Spotkanie z magiczną chemią',
    icon: SlChemistry,
    transformAmount: '[-3px]',
    description:
      'To niezwykła wyprawa w świat chemii. Podczas przyjęcia dzieci ' +
      'wykonają niesamowite doświadczenia, m.in. sprawią, że zniknie woda, ' +
      'wywołają Dżina z butelki czy rozpalą ogień bez zapałek.',
  },
  {
    value: 'item-2',
    cardColor: 'laboBlue',
    heading: 'W krainie lodu',
    icon: GiFoam,
    description:
      'Mroźne doświadczenia i gorące emocje. Czy lód to zawsze zamarznięta ' +
      'woda? Czy istnieje taki lód, który się nie topi? Wykonamy ' +
      'niesamowite eksperymenty z użyciem suchego lodu. Podczas tej wyprawy ' +
      'między innymi przekonamy się czym jest suchy lód, sprawdzimy czy ' +
      'rzeczywiście jest taki zimny oraz zrobimy tajemniczą mgłę.',
  },
  {
    value: 'item-3',
    cardColor: 'laboGreen',
    heading: 'Balonowe Party',
    icon: GiBalloons,
    description:
      'Czy wiesz, że balon powstał praktycznie przez przypadek, jako efekt ' +
      'uboczny eksperymentów i prób wynalezienia nowego tworzywa na dętki.?' +
      ' Czy wiesz, że wynalazł go inżynier chemii, Neil Tillotson? Podczas ' +
      'imprezy dzieci nie tylko dowiedzą się wielu ciekawostek, ale także ' +
      'napompują balony w niecodzienny sposób oraz nauczą się skręcać różne ' +
      'zwierzątka i inne kształty. Po urodzinach każdy wróci do domu z ' +
      'pamiątkowymi balonami!',
  },
];

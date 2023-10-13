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
    key: 0,
    value: 'item-1',
    borderColor: 'before:border-laboBlue',
    fontColor: 'text-laboBlue',
    backgroundColor: 'bg-laboBlue',
    heading: 'W krainie lodu',
    icon: GiBalloons,
    description:
      'Czy wiesz, że balon powstał praktycznie przez przypadek, ' +
      'jako efekt uboczny eksperymentów i prób wynalezienia nowego tworzywa na dętki.? ' +
      'Czy wiesz, że wynalazł go inżynier chemii, Neil Tillotson? ' +
      'Podczas imprezy dzieci nie tylko dowiedzą się wielu ciekawostek, ' +
      'ale także napompują balony w niecodzienny sposób oraz nauczą się skręcać różne zwierzątka i inne kształty. ' +
      'Po urodzinach każdy wróci do domu z pamiątkowymi balonami!',
  },
  {
    key: 1,
    value: 'item-2',
    borderColor: 'before:border-laboRed',
    fontColor: 'text-laboRed',
    backgroundColor: 'bg-laboRed',
    heading: 'Spotkanie z magiczną chemią',
    icon: SlChemistry,
    description:
      'To niezwykła wyprawa w świat chemii. ' +
      'Podczas przyjęcia dzieci wykonają niesamowite doświadczenia, ' +
      'm.in. sprawią, że zniknie woda, wywołają Dżina z butelki czy rozpalą ogień bez zapałek.',
  },
  {
    key: 2,
    value: 'item-3',

    borderColor: 'before:border-laboGreen',
    fontColor: 'text-laboGreen',
    backgroundColor: 'bg-laboGreen',

    heading: 'Pachnący świat mydełek',
    icon: FaSoap,
    description:
      'W trakcie imprezy dzieci dowiedzą się wielu ciekawostek o mydle, ' +
      'a następnie stworzą własne, niepowtarzalne, pachnące mydło w wybranym przez siebie kształcie. ' +
      'Będzie to swoiste laboratorium, ' +
      'w którym uczestnicy mieszać będą kolory, zapachy i inne dodatki. ' +
      'Na koniec zapakują mydełka i zabiorą je do domu.',
  },
  {
    key: 3,
    value: 'item-4',

    borderColor: 'before:border-laboOrange',
    fontColor: 'text-laboOrange',
    backgroundColor: 'bg-laboOrange',

    heading: 'W krainie lodu',
    icon: GiFoam,
    description:
      'Mroźne doświadczenia i gorące emocje. ' +
      'Czy lód to zawsze zamarznięta woda? ' +
      'Czy istnieje taki lód, który się nie topi? ' +
      'Wykonamy niesamowite eksperymenty z użyciem suchego lodu. ' +
      'Podczas tej wyprawy między innymi przekonamy się czym jest suchy lód, ' +
      'sprawdzimy czy rzeczywiście jest taki zimny oraz zrobimy tajemniczą mgłę.',
  },
];

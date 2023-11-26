import { Locale } from '@/i18n.config';
import { montessoriMethodsList } from '../montessoriData';
import MontessoriMethodsItem from './montessoriMethodsItem';

interface IMontessoriMethodsList {
  lang: Locale;
  montessoriMethodsList: {
    id: number;
    paragraph: string;
    header: string;
  }[];
}

const MontessoriMethodsList: React.FC<IMontessoriMethodsList> = ({
  montessoriMethodsList,
  lang,
}) => {
  return (
    <div className="mt-10 flex flex-col gap-16 lg:gap-10">
      {montessoriMethodsList.map((item) => (
        <MontessoriMethodsItem
          key={item.id}
          montessoriMethodsItem={item}
          lang={lang}
        />
      ))}
    </div>
  );
};

export default MontessoriMethodsList;

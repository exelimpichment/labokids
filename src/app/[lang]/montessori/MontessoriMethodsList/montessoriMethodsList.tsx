import { IMontessoriMethodsList } from '../types/types';
import MontessoriMethodsItem from './montessoriMethodsItem';

const MontessoriMethodsList: React.FC<IMontessoriMethodsList> = ({
  montessoriMethodsList,
}) => {
  return (
    <article className="mt-10 flex flex-col gap-16 lg:gap-10">
      {montessoriMethodsList.map((item) => (
        <MontessoriMethodsItem key={item.id} montessoriMethodsItem={item} />
      ))}
    </article>
  );
};

export default MontessoriMethodsList;

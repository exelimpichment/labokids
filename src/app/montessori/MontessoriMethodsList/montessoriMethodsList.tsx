import Container from '../../common/container';
import { montessoriMethodsList } from '../montessoriData';
import MontessoriMethodsItem from './montessoriMethodsItem';

const MontessoriMethodsList = () => {
  return (
    <div className="mt-10 flex flex-col gap-10">
      {montessoriMethodsList.map((item) => (
        <MontessoriMethodsItem key={item.id} montessoriMethodsItem={item} />
      ))}
    </div>
  );
};

export default MontessoriMethodsList;

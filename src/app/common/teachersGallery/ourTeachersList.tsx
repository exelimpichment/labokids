import { teachersMontessoriCarouselData } from '../../montessori/montessoriData';
import OurTeachersListItem from './ourTeachersListItem';

const OurTeachersList = () => {
  return (
    <div className="mt-10 flex flex-row flex-wrap justify-center gap-6 lg:gap-10">
      {teachersMontessoriCarouselData.map((item) => (
        <OurTeachersListItem key={item.id} teachers={item} />
      ))}
    </div>
  );
};

export default OurTeachersList;

import Container from '../container';
import SectionHeader from '../sectionHeader';
import { teachersHeaderContent } from '../../montessori/montessoriData';
import OurTeachersList from './ourTeachersList';

const OurTeachers = () => {
  return (
    <section>
      <Container>
        <OurTeachersList />
      </Container>
    </section>
  );
};

export default OurTeachers;

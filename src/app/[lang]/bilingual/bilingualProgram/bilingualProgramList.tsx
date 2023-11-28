import { Locale } from '@/i18n.config';
import Container from '../../common/container';
import BilingualProgramItem from './bilingualProgramItem';

interface IBilingualProgram {
  lang: Locale;
  content: {
    key: string;
    header: string;
    description: string;
  }[];
}

const BilingualProgramList: React.FC<IBilingualProgram> = ({
  content,
  lang,
}) => {
  return (
    <article>
      <Container>
        <div className="mt-10 flex flex-col gap-16 lg:gap-10">
          {content.map((bilingualProgramItem) => (
            <BilingualProgramItem
              key={bilingualProgramItem.key}
              programItem={bilingualProgramItem}
              lang={lang}
            />
          ))}
        </div>
      </Container>
    </article>
  );
};

export default BilingualProgramList;

import { Locale } from '@/i18n.config';
import Container from '../common/container';
import FooterNavigationList from './footerNavigationList';
import { getDictionary } from '@/lib/dictionary';
import FooterContactInfo from './footerContactInfo';

const Footer = async ({ lang }: { lang: Locale }) => {
  const { navigation } = await getDictionary(lang);
  return (
    <footer>
      <Container>
        <FooterNavigationList lang={lang} navigation={navigation} />
        <FooterContactInfo />
      </Container>
    </footer>
  );
};

export default Footer;

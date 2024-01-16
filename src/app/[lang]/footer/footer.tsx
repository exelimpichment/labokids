import { Locale } from '@/i18n.config';
import Container from '../common/container';
import FooterNavigationList from './footerNavigationList';
import { getDictionary } from '@/lib/dictionary';
import FooterContactInfo from './footerContactInfo';

const Footer = async ({ lang }: { lang: Locale }) => {
  const { navigation } = await getDictionary(lang);
  return (
    <footer className="min-h-[50px] w-full shrink-0 border-t border-gray-200 p-2">
      <Container>
        <FooterNavigationList lang={lang} navigation={navigation} />
        <FooterContactInfo />
      </Container>
    </footer>
  );
};

export default Footer;

import { Locale } from '@/i18n.config';
import Container from '../common/container';
import FooterNavigationList from './footerNavigationList';
import { getDictionary } from '@/lib/dictionary';

const Footer = async ({ lang }: { lang: Locale }) => {
  const { navigation } = await getDictionary(lang);
  return (
    <footer className="min-h-[50px] w-screen shrink-0 border-t border-gray-200 p-2">
      <Container>
        <FooterNavigationList lang={lang} navigation={navigation} />
      </Container>
    </footer>
  );
};

export default Footer;

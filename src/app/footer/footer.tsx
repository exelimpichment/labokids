import Container from '../common/container';
import FooterNavigationList from './footerNavigationList';

const Footer = () => {
  return (
    <footer className="min-h-[50px] shrink-0 border-t border-gray-200 p-2">
      <Container>
        <FooterNavigationList />
      </Container>
    </footer>
  );
};

export default Footer;

import Container from '../common/container';
import FooterNavigationList from './footerNavigationList';

const Footer = () => {
  return (
    <footer className="hover: h-14 shrink-0 border-t border-gray-200">
      <Container>
        <FooterNavigationList />
      </Container>
    </footer>
  );
};

export default Footer;

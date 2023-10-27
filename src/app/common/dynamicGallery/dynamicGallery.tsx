import Container from '../container';
import ImageGallery from './dynamicImageGallery';
import GalleryNavigationBarList from './dynamicGalleryNavigationBarList';

const DynamicGallery = () => {
  return (
    <section>
      <Container>
        <ImageGallery />
        <GalleryNavigationBarList />
      </Container>
    </section>
  );
};

export default DynamicGallery;

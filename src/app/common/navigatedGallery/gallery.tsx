import Container from '../container';
import ImageGallery from './ImageGallery';
import GalleryNavigationBarList from './galleryNavigationBarList';

const Gallery = () => {
  return (
    <section>
      <Container>
        <ImageGallery />
        <GalleryNavigationBarList />
      </Container>
    </section>
  );
};

export default Gallery;

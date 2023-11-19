import Footer from '../footer/footer';
import Navbar from '../navbar';

export default function MontessoriLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <Navbar />
      {children}
      <Footer />
    </section>
  );
}

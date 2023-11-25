import './globals.css';
import type { Metadata } from 'next';
import { Prompt } from 'next/font/google';
import { GlobalContextProvider } from './context/globalContext';
import Navbar from './navbar';
import ContactUsDialog from './common/contactUsDialog/contactUsDialog';
import { Toaster } from 'sonner';
import Backdrop from './common/backdrop';
import SlidingDownNavigationMenu from './navbar/hamburgerMenu/slidingDownNavigationMenu';
import Footer from './footer/footer';
import ScrollToTopButton from './common/scrollToTopButton';
import { Locale, i18n } from '@/i18n.config';

const prompt = Prompt({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
});

export const metadata: Metadata = {
  title: 'Labokids',
  description: 'Labokids kindergarten website',
};

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: Locale };
}) {
  return (
    <html lang={params.lang}>
      <body className={prompt.className}>
        <GlobalContextProvider>
          <SlidingDownNavigationMenu />
          <Navbar lang={params.lang} />
          {children}
          <Footer lang={params.lang} />
          <Toaster />
          <ContactUsDialog />
          <Backdrop />
          <ScrollToTopButton />
        </GlobalContextProvider>
      </body>
    </html>
  );
}

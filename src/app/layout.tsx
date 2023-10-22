import './globals.css';
import type { Metadata } from 'next';
import { Prompt } from 'next/font/google';
import { GlobalContextProvider } from './context/globalContext';
import Navbar from './navbar';
import ContactUsDialog from './common/contactUsDialog/contactUsDialog';
import { Toaster } from 'sonner';
import Backdrop from './common/backdrop';

const prompt = Prompt({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
});

export const metadata: Metadata = {
  title: 'Labokids',
  description: 'Labokids kindergarten website',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={prompt.className}>
        <GlobalContextProvider>
          <Navbar />
          {children}
          <Toaster />
          <ContactUsDialog />
          <Backdrop />
        </GlobalContextProvider>
      </body>
    </html>
  );
}

import {
  Balsamiq_Sans,
  Shantell_Sans,
  Wix_Madefor_Display,
} from 'next/font/google';

export const kidFont = Shantell_Sans({
  weight: ['400'],
  subsets: ['latin', 'cyrillic'],
  fallback: ['sans-serif'],
  display: 'swap',
  adjustFontFallback: false,
});

export const titleFont = Balsamiq_Sans({
  weight: ['400'],
  subsets: ['latin', 'cyrillic'],
  fallback: ['georgia'],
  display: 'swap',
  adjustFontFallback: false,
});

export const textFont = Wix_Madefor_Display({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin', 'cyrillic'],
  fallback: ['system-ui', 'arial'],
  display: 'swap',
  adjustFontFallback: false,
});

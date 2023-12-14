import {
  Balsamiq_Sans,
  Comfortaa,
  Shantell_Sans,
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

export const textFont = Comfortaa({
  weight: ['400', '700'],
  subsets: ['latin', 'cyrillic'],
  fallback: ['system-ui', 'arial'],
  display: 'swap',
  adjustFontFallback: false,
});

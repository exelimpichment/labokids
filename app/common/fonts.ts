import { Fredoka, Prompt, Schoolbell } from 'next/font/google';

export const kidFont = Schoolbell({
  weight: ['400'],
  subsets: ['latin'],
  fallback: ['sans-serif'],
});

export const titleFont = Fredoka({
  weight: ['500', '600', '700'],
  subsets: ['latin'],
  fallback: ['georgia'],
});

export const textFont = Prompt({
  weight: ['200', '300', '400', '500', '600', '700'],
  subsets: ['latin'],
  fallback: ['system-ui', 'arial'],
});

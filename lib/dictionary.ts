import 'server-only';

import { i18n, type Locale } from '@/i18n.config';

const dictionaries = {
  pl: () => import('@/dictionaries/pl.json').then((module) => module.default),
  en: () => import('@/dictionaries/en.json').then((module) => module.default),
  ua: () => import('@/dictionaries/ua.json').then((module) => module.default),
};

export const getDictionary = async (locale: Locale) =>
  dictionaries[i18n.locales.includes(locale) ? locale : i18n.defaultLocale]();

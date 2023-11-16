/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    // providing the locales supported by your application
    locales: ['pl', 'ukr', 'ru'],
    //  default locale used when the non-locale paths are visited
    defaultLocale: 'pl',
  },
};

module.exports = nextConfig;

/** @type {import('next').NextConfig} */

const { withSentryConfig } = require('@sentry/nextjs');

const nextConfig = {
  reactStrictMode: true,
  experimental: {
    serverActions: true,
    serverComponentsExternalPackages: [
      '@react-email/components',
      '@react-email/render',
      '@react-email/tailwind',
    ],
  },

  webpack: (config) => {
    config.infrastructureLogging = {
      level: 'error',
    };

    return config;
  },

  sentry: {
    hideSourceMaps: true,
  },
};

const sentryWebpackPluginOptions = {
  org: 'exel-development',
  project: 'labokids',

  authToken: process.env.SENTRY_AUTH_TOKEN,

  silent: true,
};

module.exports = withSentryConfig(nextConfig, sentryWebpackPluginOptions);

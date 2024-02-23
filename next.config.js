const { withForms } = require('@tailwindcss/forms');

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Other configurations...

  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.alias['@heroicons/react'] = '@heroicons/react/outline';
      config.resolve.alias['@heroicons/react/solid'] = '@heroicons/react/solid';
    }

    return config;
  },

  withPlugins: [withForms],
};

module.exports = nextConfig;

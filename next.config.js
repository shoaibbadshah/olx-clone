<<<<<<< Updated upstream
const { withForms } = require('@tailwindcss/forms');

=======
const { withForms } = require("@tailwindcss/forms");
const path = require("path");
>>>>>>> Stashed changes
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Other configurations...

  webpack: (config, { isServer }) => {
    if (!isServer) {
<<<<<<< Updated upstream
      config.resolve.alias['@heroicons/react'] = '@heroicons/react/outline';
      config.resolve.alias['@heroicons/react/solid'] = '@heroicons/react/solid';
=======
      config.resolve.alias["@heroicons/react"] = "@heroicons/react/outline";
      config.resolve.alias["@"] = path.join(__dirname, "src");
      config.resolve.alias["@heroicons/react/solid"] = "@heroicons/react/solid";
>>>>>>> Stashed changes
    }

    return config;
  },

  withPlugins: [withForms],
};

module.exports = nextConfig;

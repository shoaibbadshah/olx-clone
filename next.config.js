const { withForms } = require("@tailwindcss/forms");

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["cdn.dummyjson.com", "i.dummyjson.com"], // Define the hostname here
  },
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },

  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.alias["@heroicons/react"] = "@heroicons/react/outline";
      config.resolve.alias["@heroicons/react/solid"] = "@heroicons/react/solid";
    }

    return config;
  },

  ...withForms,
};

module.exports = nextConfig;

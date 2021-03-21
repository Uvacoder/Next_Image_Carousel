const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

const dev = process.env.NODE_ENV !== 'production';

module.exports = server = dev
  ? 'http://localhost:3000'
  : 'https://yourwebsite.com';

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        CLOUDINARY_CLOUD_NAME: 'hackit-africa',
        CLOUDINARY_API_KEY: '725464419265614',
        CLOUDINARY_API_SECRET: 'eR6ZNhy8CtPLrFE4CvjOsBvkQTk',
        CLOUDINARY_UPLOAD_PRESET: 'dev_setups',
      },
    };
  }

  return {
    env: {
      CLOUDINARY_CLOUD_NAME: 'hackit-africa',
      CLOUDINARY_API_KEY: '725464419265614',
      CLOUDINARY_API_SECRET: 'eR6ZNhy8CtPLrFE4CvjOsBvkQTk',
      CLOUDINARY_UPLOAD_PRESET: 'dev_setups',
    },
  };
};

module.exports = {
  images: {
    domains: ['res.cloudinary.com'],
  },
};
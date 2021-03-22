const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

module.exports = () => {
  return {
    images: {
      domains: ['res.cloudinary.com'],
    },
  };
};

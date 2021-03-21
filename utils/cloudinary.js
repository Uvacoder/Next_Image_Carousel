import cloudinary from 'cloudinary';
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function getAllImages() {
  // Get Images from Cloudinary inserted into the Personal Folder
  const response = await cloudinary.v2.api.resources({
    type: 'upload',
    prefix: 'Personal',
  });

  const sliderData = response.resources.map((image, key) => ({
    id: key,
    ...image,
  }));

  return sliderData;
}

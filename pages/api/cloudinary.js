import cloudinary from 'cloudinary';

//Use the cloudinary configuration file
require('../../utils/cloudinary');

async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      // Get Images from Cloudinary inserted into the Personal Folder
      const response = await cloudinary.v2.api.resources({
        type: 'upload',
        prefix: 'Personal',
      });

      // map through the response to convert it into an array of objects
      const images = response.resources.map((image, key) => ({
        id: key,
        ...image,
      }));
      //console.log(images);
      return res.status(200).json(images);
      
    } catch (error) {
      res.status(500).json({ message: 'Getting comments failed.' });
    }
  }
}

export default handler;

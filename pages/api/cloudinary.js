import { getAllImages } from '../../utils/cloudinary';


async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      
      const sliderData = await getAllImages();

      res.status(200).json(sliderData);
      //console.log(sliderData);

    } catch (error) {
      
      res.status(500).json({ message: 'Getting images failed.' });
    }
  }
}

export default handler;

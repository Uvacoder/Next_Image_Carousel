function handler(req, res) {
  if (req.method === 'GET') {
    res.status(200).json({ name: 'Cloudinary Carousel' });
  }
}

export default handler;

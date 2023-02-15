const cloudinary = require('cloudinary').v2;
const { Router } = require('express');
const { unlinkSync } = require('fs');
const multer = require('multer');

const router = Router();
const uploads = multer({ dest: 'tmp/uploads/' });

router.post('/', uploads.single('image'), async (req, res) => {
  try {
    // handle upload errors
    if (!req.file) {
      return res.status(400).json({ msg: 'no file uploaded' });
    }

    // upload to cloudinary
    const cloudImageData = await cloudinary.uploader.upload(req.file.path);

    // load image data. public_id save this to the db
    const cloudImage = `https://res.cloudinary.com/findoneandskate/image/upload/v1593119998/${cloudImageData.public_id}.png`;

    // delete file from server
    unlinkSync(req.file.path);

    // send back the image url
    res.json({ cloudImage });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: 'server error' });
  }
});

// GET /images -- get all images
router.get('/', async (req, res) => {
    try {
        // get the images from cloudinary
        const cloudImages = await cloudinary.api.resources()
        // send back the images
        res.json({ cloudImages })
    } catch (error) {
        console.log(error)
        res.status(500).json({ msg: 'server error' })
    }
})

// GET /images/:id -- get one image
router.get('/:id', async (req, res) => {
    try {
        // get the image from cloudinary
        const cloudImage = await cloudinary.api.resource(req.params.id)
        // send back the image
        res.json({ cloudImage })
    } catch (error) {
        console.log(error)
        res.status(500).json({ msg: 'server error' })
    }
})

// DELETE /images/:id -- delete one image
router.delete('/:id', async (req, res) => {
    try {
        // delete the image from cloudinary
        const cloudImage = await cloudinary.uploader.destroy(req.params.id)
        // send back the image
        res.json({ cloudImage })
    } catch (error) {
        console.log(error)
        res.status(500).json({ msg: 'server error' })
    }
})

module.exports = router
const express = require('express');
const { getGalleryImages, uploadGalleryImage, deleteGalleryImage } = require('../controllers/galleryController');
const { protect } = require('../middleware/auth');
const upload = require('../middleware/upload');

const router = express.Router();

router.route('/')
  .get(getGalleryImages)
  .post(protect, upload.single('image'), uploadGalleryImage);

router.route('/:id')
  .delete(protect, deleteGalleryImage);

module.exports = router;

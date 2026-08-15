const GalleryImage = require('../models/GalleryImage');
const path = require('path');
const fs = require('fs');

// @desc    Get all gallery images
// @route   GET /api/gallery
// @access  Public
exports.getGalleryImages = async (req, res) => {
  try {
    const { category } = req.query;
    let query = {};
    if (category) query.category = category;

    const images = await GalleryImage.find(query).sort('-createdAt');
    res.status(200).json({ success: true, count: images.length, data: images });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Upload new gallery image
// @route   POST /api/gallery
// @access  Private
exports.uploadGalleryImage = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ success: false, message: 'Please upload an image' });
    }

    const { category, title } = req.body;
    
    if (!category) {
      return res.status(400).json({ success: false, message: 'Please provide a category' });
    }

    const image = await GalleryImage.create({
      filename: req.file.path,
      category,
      title
    });

    res.status(201).json({ success: true, data: image });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// @desc    Delete gallery image
// @route   DELETE /api/gallery/:id
// @access  Private
exports.deleteGalleryImage = async (req, res) => {
  try {
    const image = await GalleryImage.findById(req.params.id);
    if (!image) return res.status(404).json({ success: false, message: 'Image not found' });
    
    // Cloudinary images are generally kept or deleted via Cloudinary API. We just remove from DB.
    
    await image.deleteOne();
    res.status(200).json({ success: true, data: {} });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

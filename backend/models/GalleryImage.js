const mongoose = require('mongoose');

const galleryImageSchema = new mongoose.Schema({
  filename: {
    type: String,
    required: [true, 'Please add a filename']
  },
  category: {
    type: String,
    required: [true, 'Please add a category'],
    enum: ['Living Room', 'Kitchen', 'Office', 'Commercial', 'Residential', 'Other']
  },
  title: {
    type: String
  }
}, { timestamps: true });

module.exports = mongoose.model('GalleryImage', galleryImageSchema);

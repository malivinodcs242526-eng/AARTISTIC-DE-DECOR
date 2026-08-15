const mongoose = require('mongoose');

const testimonialSchema = new mongoose.Schema({
  clientName: {
    type: String,
    required: [true, 'Please add a client name']
  },
  content: {
    type: String,
    required: [true, 'Please add a testimonial content']
  },
  rating: {
    type: Number,
    min: 1,
    max: 5,
    default: 5
  },
  projectType: {
    type: String
  }
}, { timestamps: true });

module.exports = mongoose.model('Testimonial', testimonialSchema);

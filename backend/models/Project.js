const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please add a project title'],
    trim: true,
    maxlength: [100, 'Name can not be more than 100 characters']
  },
  description: {
    type: String,
    required: [true, 'Please add a description']
  },
  category: {
    type: String,
    required: [true, 'Please add a category'],
    enum: ['commercial', 'residential']
  },
  location: {
    type: String
  },
  date: {
    type: Date
  },
  tags: {
    type: [String]
  },
  images: {
    type: [String], // Array of filenames
    required: [true, 'Please add at least one image']
  }
}, { timestamps: true });

module.exports = mongoose.model('Project', projectSchema);

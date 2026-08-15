const express = require('express');
const { getProjects, getProject, createProject, updateProject, deleteProject } = require('../controllers/projectsController');
const { protect } = require('../middleware/auth');
const upload = require('../middleware/upload');

const router = express.Router();

router.route('/')
  .get(getProjects)
  .post(protect, upload.array('images', 10), createProject);

router.route('/:id')
  .get(getProject)
  .put(protect, upload.array('images', 10), updateProject)
  .delete(protect, deleteProject);

module.exports = router;

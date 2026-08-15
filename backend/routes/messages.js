const express = require('express');
const { getMessages, submitMessage, markAsRead, deleteMessage } = require('../controllers/messagesController');
const { protect } = require('../middleware/auth');

const router = express.Router();

router.route('/')
  .get(protect, getMessages)
  .post(submitMessage);

router.route('/:id/read')
  .put(protect, markAsRead);

router.route('/:id')
  .delete(protect, deleteMessage);

module.exports = router;

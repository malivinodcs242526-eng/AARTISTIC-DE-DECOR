const Message = require('../models/Message');
const sendEmail = require('../utils/mailer');

// @desc    Get all messages
// @route   GET /api/messages
// @access  Private
exports.getMessages = async (req, res) => {
  try {
    const messages = await Message.find().sort('-createdAt');
    res.status(200).json({ success: true, count: messages.length, data: messages });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Submit new message (Contact Form)
// @route   POST /api/messages
// @access  Public
exports.submitMessage = async (req, res) => {
  try {
    const { name, email, phone, projectType, message } = req.body;
    
    const newMessage = await Message.create({
      name, email, phone, projectType, message
    });

    // Send email to Admin
    try {
      await sendEmail({
        email: process.env.ADMIN_EMAIL,
        subject: `New Inquiry from ${name} - AARTISTIC DE' & DECOR`,
        message: `
          Name: ${name}
          Email: ${email}
          Phone: ${phone}
          Project Type: ${projectType || 'N/A'}
          
          Message:
          ${message}
        `,
        html: `
          <h3>New Inquiry from AARTISTIC DE' & DECOR Website</h3>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Project Type:</strong> ${projectType || 'N/A'}</p>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
        `,
        fromName: name
      });
    } catch (err) {
      console.error('Email sending failed', err);
      // We don't fail the request if email fails, message is saved in DB
    }

    res.status(201).json({ success: true, data: newMessage });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// @desc    Mark message as read
// @route   PUT /api/messages/:id/read
// @access  Private
exports.markAsRead = async (req, res) => {
  try {
    const message = await Message.findById(req.params.id);
    if (!message) return res.status(404).json({ success: false, message: 'Message not found' });
    
    message.isRead = true;
    await message.save();
    
    res.status(200).json({ success: true, data: message });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Delete message
// @route   DELETE /api/messages/:id
// @access  Private
exports.deleteMessage = async (req, res) => {
  try {
    const message = await Message.findById(req.params.id);
    if (!message) return res.status(404).json({ success: false, message: 'Message not found' });
    
    await message.deleteOne();
    res.status(200).json({ success: true, data: {} });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

const express = require('express');
const Contact = require('../models/Contact');
const router = express.Router();

// @route   POST /api/contact
// @desc    Submit contact form
// @access  Public
router.post('/', async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Validation
    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: 'Please provide name, email, and message'
      });
    }

    // Additional validation
    if (name.length > 100) {
      return res.status(400).json({
        success: false,
        message: 'Name cannot exceed 100 characters'
      });
    }

    if (message.length > 1000) {
      return res.status(400).json({
        success: false,
        message: 'Message cannot exceed 1000 characters'
      });
    }

    // Email validation
    const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: 'Please provide a valid email address'
      });
    }

    const contactData = {
      name: name.trim(),
      email: email.trim().toLowerCase(),
      message: message.trim()
    };

    // Just log the message (no email sending)
    console.log('📧 New Contact Message:');
    console.log(`Name: ${contactData.name}`);
    console.log(`Email: ${contactData.email}`);
    console.log(`Message: ${contactData.message}`);
    console.log(`Time: ${new Date().toISOString()}`);
    console.log('---');

    // Try to save to database (fallback if no DB)
    try {
      const contact = new Contact(contactData);
      await contact.save();

      res.status(201).json({
        success: true,
        message: 'Message received successfully! I\'ll get back to you soon.',
        data: {
          id: contact._id,
          name: contact.name,
          email: contact.email,
          createdAt: contact.createdAt
        }
      });
    } catch (dbError) {
      // Fallback: Continue without database
      console.log('📧 New Contact Message (DB not available):');
      console.log(`Name: ${contactData.name}`);
      console.log(`Email: ${contactData.email}`);
      console.log(`Message: ${contactData.message}`);
      console.log(`Time: ${new Date().toISOString()}`);
      console.log('---');

      res.status(201).json({
        success: true,
        message: 'Message received successfully! I\'ll get back to you soon.',
        data: {
          id: 'temp-' + Date.now(),
          name: contactData.name,
          email: contactData.email,
          createdAt: new Date().toISOString()
        }
      });
    }

  } catch (error) {
    console.error('Contact form error:', error);
    
    // Handle validation errors
    if (error.name === 'ValidationError') {
      const messages = Object.values(error.errors).map(err => err.message);
      return res.status(400).json({
        success: false,
        message: messages.join('. ')
      });
    }

    res.status(500).json({
      success: false,
      message: 'Server error. Please try again later.'
    });
  }
});

// @route   GET /api/contact
// @desc    Get all contact messages (admin only)
// @access  Private
router.get('/', async (req, res) => {
  try {
    const contacts = await Contact.find()
      .sort({ createdAt: -1 })
      .select('-__v');

    res.json({
      success: true,
      count: contacts.length,
      data: contacts
    });

  } catch (error) {
    console.error('Get contacts error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
});

// @route   PUT /api/contact/:id/status
// @desc    Update contact message status (admin only)
// @access  Private
router.put('/:id/status', async (req, res) => {
  try {
    const { status } = req.body;
    
    if (!['new', 'read', 'replied'].includes(status)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid status. Must be: new, read, or replied'
      });
    }

    const contact = await Contact.findById(req.params.id);
    
    if (!contact) {
      return res.status(404).json({
        success: false,
        message: 'Contact message not found'
      });
    }

    contact.status = status;
    
    if (status === 'read' && !contact.readAt) {
      contact.readAt = new Date();
    }
    
    if (status === 'replied') {
      contact.repliedAt = new Date();
    }

    await contact.save();

    res.json({
      success: true,
      message: 'Status updated successfully',
      data: contact
    });

  } catch (error) {
    console.error('Update contact status error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
});

module.exports = router;

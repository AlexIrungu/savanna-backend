const transporter = require('../config/mailer');
const {
  generateContactCustomerEmail,
  generateContactBusinessEmail,
  generateSimpleContactCustomerEmail,
  generateSimpleContactBusinessEmail
} = require('../templates/contactTemplates');

/**
 * Handle contact form submissions
 * Supports both simple (HomeContactSection) and detailed (Contact page) forms
 */
exports.createContact = async (req, res) => {
  try {
    const {
      // Common fields
      name,
      fullName,
      email,
      message,

      // HomeContactSection fields
      travelDates,

      // Contact page fields
      location,
      preferredHotels,
      numberOfAdults,
      numberOfChildren,
      checkInDate,
      checkOutDate
    } = req.body;

    // Determine which form type (simple or detailed)
    const isDetailedForm = location || checkInDate || checkOutDate || numberOfAdults;
    const customerName = fullName || name;

    // Validation
    if (!customerName || !email) {
      return res.status(400).json({
        success: false,
        message: 'Please provide your name and email address'
      });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: 'Please provide a valid email address'
      });
    }

    if (isDetailedForm) {
      // Detailed contact form (Contact.js)
      if (!location || !checkInDate || !checkOutDate || !numberOfAdults) {
        return res.status(400).json({
          success: false,
          message: 'Please fill in all required fields'
        });
      }

      // Calculate nights
      const nights = checkInDate && checkOutDate
        ? Math.ceil((new Date(checkOutDate) - new Date(checkInDate)) / (1000 * 60 * 60 * 24))
        : 0;

      // Format dates
      const checkInFormatted = new Date(checkInDate).toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });

      const checkOutFormatted = new Date(checkOutDate).toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });

      const contactData = {
        name: customerName,
        email,
        location,
        preferredHotels: preferredHotels || 'No preference',
        numberOfAdults,
        numberOfChildren: numberOfChildren || '0',
        checkInDate: checkInFormatted,
        checkOutDate: checkOutFormatted,
        nights,
        message: message || 'No additional information provided',
        submittedAt: new Date().toISOString()
      };

      // Send emails
      const customerEmailHtml = generateContactCustomerEmail(contactData);
      await transporter.sendMail({
        from: process.env.EMAIL_FROM,
        to: email,
        subject: `Safari Planning Confirmation - ${location}`,
        html: customerEmailHtml
      });

      const businessEmailHtml = generateContactBusinessEmail(contactData);
      await transporter.sendMail({
        from: process.env.EMAIL_FROM,
        to: process.env.BUSINESS_EMAIL,
        subject: `New Travel Inquiry: ${location} - ${customerName}`,
        html: businessEmailHtml,
        replyTo: email
      });

    } else {
      // Simple contact form (HomeContactSection.js)
      const contactData = {
        name: customerName,
        email,
        travelDates: travelDates || 'Flexible',
        message: message || 'No additional information provided',
        submittedAt: new Date().toISOString()
      };

      // Send emails
      const customerEmailHtml = generateSimpleContactCustomerEmail(contactData);
      await transporter.sendMail({
        from: process.env.EMAIL_FROM,
        to: email,
        subject: 'Thank You for Contacting Savanna Journeys',
        html: customerEmailHtml
      });

      const businessEmailHtml = generateSimpleContactBusinessEmail(contactData);
      await transporter.sendMail({
        from: process.env.EMAIL_FROM,
        to: process.env.BUSINESS_EMAIL,
        subject: `New Contact Form: ${customerName}`,
        html: businessEmailHtml,
        replyTo: email
      });
    }

    // Success response
    res.status(200).json({
      success: true,
      message: 'Thank you for contacting us! Check your email for confirmation.'
    });

  } catch (error) {
    console.error('Contact form error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to send your message. Please try again or contact us directly.',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
};

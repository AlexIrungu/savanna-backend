const { sendMail } = require('../config/mailer');
const {
  generateServiceCustomerEmail,
  generateServiceBusinessEmail
} = require('../templates/serviceTemplates');

/**
 * Handle service booking form submissions
 */
exports.createServiceBooking = async (req, res) => {
  try {
    const {
      name,
      email,
      phone,
      location,
      preferredDate,
      groupSize,
      budget,
      specialRequests,
      service
    } = req.body;

    // Validation
    if (!name || !email || !phone || !service) {
      return res.status(400).json({
        success: false,
        message: 'Please fill in all required fields (name, email, phone, and service)'
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

    // Format preferred date if provided
    let preferredDateFormatted = 'Flexible';
    if (preferredDate) {
      try {
        preferredDateFormatted = new Date(preferredDate).toLocaleDateString('en-US', {
          weekday: 'long',
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        });
      } catch (e) {
        preferredDateFormatted = preferredDate;
      }
    }

    const serviceData = {
      name,
      email,
      phone,
      location: location || 'Not specified',
      preferredDate: preferredDateFormatted,
      groupSize: groupSize || 'Not specified',
      budget: budget || 'Not specified',
      specialRequests: specialRequests || 'None',
      service,
      submittedAt: new Date().toISOString()
    };

    // Send confirmation email to customer
    const customerEmailHtml = generateServiceCustomerEmail(serviceData);
    await sendMail({
      from: process.env.EMAIL_FROM,
      to: email,
      subject: `Service Booking Confirmation - ${service}`,
      html: customerEmailHtml
    });

    // Send notification email to business
    const businessEmailHtml = generateServiceBusinessEmail(serviceData);
    await sendMail({
      from: process.env.EMAIL_FROM,
      to: process.env.BUSINESS_EMAIL,
      subject: `New Service Booking: ${service} - ${name}`,
      html: businessEmailHtml,
      replyTo: email
    });

    // Success response
    res.status(200).json({
      success: true,
      message: 'Service booking request submitted successfully! Check your email for confirmation.'
    });

  } catch (error) {
    console.error('Service booking error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to process your booking. Please try again or contact us directly.',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
};

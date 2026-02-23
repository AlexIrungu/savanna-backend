const { sendMail } = require('../config/mailer');
const {
  generateCustomerEmail,
  generateBusinessEmail
} = require('../templates/emailTemplates');

/**
 * Handle package booking submissions
 * Sends confirmation email to customer and notification email to business
 */
exports.createBooking = async (req, res) => {
  try {
    const {
      // Customer details
      fullName,
      email,
      phone,
      country: customerCountry,

      // Package details
      packageTitle,
      packageCountry,
      duration,

      // Booking details
      checkInDate,
      checkOutDate,
      numberOfTravelers,
      children,
      accommodationType,
      specialRequests,

      // Optional
      newsletter
    } = req.body;

    // Validation
    if (!fullName || !email || !phone || !packageTitle || !packageCountry || !checkInDate || !checkOutDate || !numberOfTravelers) {
      return res.status(400).json({
        success: false,
        message: 'Please fill in all required fields'
      });
    }

    // Check-out must be after check-in
    if (new Date(checkOutDate) <= new Date(checkInDate)) {
      return res.status(400).json({
        success: false,
        message: 'Check-out date must be after check-in date'
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

    // Format children summary
    const childrenList = Array.isArray(children) ? children.filter(c => c.age) : [];

    // Prepare booking data
    const bookingData = {
      fullName,
      email,
      phone,
      customerCountry: customerCountry || 'Not specified',
      packageTitle,
      packageCountry,
      duration,
      checkInDate,
      checkOutDate,
      numberOfTravelers,
      children: childrenList,
      accommodationType: accommodationType || 'Standard',
      specialRequests: specialRequests || 'None',
      newsletter: newsletter || false,
      submittedAt: new Date().toISOString()
    };

    // Send confirmation email to customer
    const customerEmailHtml = generateCustomerEmail(bookingData);
    await sendMail({
      from: process.env.EMAIL_FROM,
      to: email,
      subject: `Booking Confirmation - ${packageTitle}`,
      html: customerEmailHtml
    });

    // Send notification email to business
    const businessEmailHtml = generateBusinessEmail(bookingData);
    await sendMail({
      from: process.env.EMAIL_FROM,
      to: process.env.BUSINESS_EMAIL,
      subject: `New Booking Request: ${packageTitle} - ${fullName}`,
      html: businessEmailHtml,
      replyTo: email
    });

    // Success response
    res.status(200).json({
      success: true,
      message: 'Booking request submitted successfully! Check your email for confirmation.'
    });

  } catch (error) {
    console.error('Booking error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to process booking. Please try again or contact us directly.',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
};

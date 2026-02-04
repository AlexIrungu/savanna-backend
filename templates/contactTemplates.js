/**
 * Email templates for contact forms (simple and detailed)
 */

/**
 * Simple contact form - Customer confirmation (HomeContactSection)
 */
exports.generateSimpleContactCustomerEmail = (contact) => {
  const { name, email, travelDates, message } = contact;

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Message Received</title>
</head>
<body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f5f5f5;">
  <table role="presentation" style="width: 100%; border-collapse: collapse;">
    <tr>
      <td align="center" style="padding: 40px 0;">
        <table role="presentation" style="width: 600px; border-collapse: collapse; background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">

          <!-- Header -->
          <tr>
            <td style="background: linear-gradient(135deg, #2d3748 0%, #1a202c 100%); padding: 40px 30px; text-align: center;">
              <h1 style="margin: 0; color: #ffffff; font-size: 28px; font-weight: bold;">Savanna Journeys</h1>
              <p style="margin: 10px 0 0 0; color: #cbd5e0; font-size: 14px;">Your African Adventure Awaits</p>
            </td>
          </tr>

          <!-- Success Message -->
          <tr>
            <td style="padding: 40px 30px 20px 30px; text-align: center;">
              <div style="background-color: #f0fdf4; border: 2px solid #86efac; border-radius: 8px; padding: 20px; margin-bottom: 30px;">
                <h2 style="margin: 0; color: #166534; font-size: 24px;">Message Received!</h2>
                <p style="margin: 10px 0 0 0; color: #15803d; font-size: 16px;">Thank you for reaching out to us</p>
              </div>
            </td>
          </tr>

          <!-- Message -->
          <tr>
            <td style="padding: 0 30px 30px 30px;">
              <p style="margin: 0 0 20px 0; color: #374151; font-size: 16px; line-height: 1.6;">
                Dear <strong>${name}</strong>,
              </p>
              <p style="margin: 0 0 20px 0; color: #374151; font-size: 16px; line-height: 1.6;">
                We've received your message and our team will get back to you within 24 hours to help plan your perfect safari experience.
              </p>
            </td>
          </tr>

          <!-- Your Message -->
          <tr>
            <td style="padding: 0 30px 30px 30px;">
              <div style="background-color: #fef3c7; border-left: 4px solid #f59e0b; padding: 20px; border-radius: 4px;">
                <h3 style="margin: 0 0 15px 0; color: #92400e; font-size: 18px;">Your Message</h3>
                <table style="width: 100%; border-collapse: collapse;">
                  <tr>
                    <td style="padding: 8px 0; color: #78350f; font-weight: bold; width: 180px;">Email:</td>
                    <td style="padding: 8px 0; color: #78350f;">${email}</td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; color: #78350f; font-weight: bold;">Travel Dates:</td>
                    <td style="padding: 8px 0; color: #78350f;">${travelDates}</td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; color: #78350f; font-weight: bold; vertical-align: top;">Message:</td>
                    <td style="padding: 8px 0; color: #78350f; white-space: pre-wrap;">${message}</td>
                  </tr>
                </table>
              </div>
            </td>
          </tr>

          <!-- Next Steps -->
          <tr>
            <td style="padding: 0 30px 30px 30px;">
              <h3 style="margin: 0 0 15px 0; color: #1f2937; font-size: 18px;">What Happens Next?</h3>
              <ol style="margin: 0; padding-left: 20px; color: #374151; line-height: 1.8;">
                <li style="margin-bottom: 10px;">Our safari expert will review your inquiry</li>
                <li style="margin-bottom: 10px;">We'll reach out within 24 hours to discuss your dream safari</li>
                <li style="margin-bottom: 10px;">Together, we'll create a personalized itinerary just for you</li>
                <li>Get ready for an unforgettable African adventure!</li>
              </ol>
            </td>
          </tr>

          <!-- Contact Info -->
          <tr>
            <td style="padding: 0 30px 40px 30px;">
              <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; text-align: center;">
                <h3 style="margin: 0 0 15px 0; color: #1f2937; font-size: 16px;">Need Immediate Assistance?</h3>
                <p style="margin: 0 0 10px 0; color: #374151;">
                  <strong>Email:</strong> <a href="mailto:journeyssavanna@gmail.com" style="color: #2563eb; text-decoration: none;">journeyssavanna@gmail.com</a>
                </p>
                <p style="margin: 0; color: #374151;">
                  <strong>WhatsApp:</strong> <a href="https://wa.me/254742779434" style="color: #2563eb; text-decoration: none;">+254 742 779 434</a>
                </p>
              </div>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color: #1f2937; padding: 30px; text-align: center;">
              <p style="margin: 0 0 10px 0; color: #9ca3af; font-size: 14px;">
                Savanna Journeys - Unforgettable African Safari Experiences
              </p>
              <p style="margin: 0 0 15px 0; color: #9ca3af; font-size: 12px;">Nairobi, Kenya</p>
              <p style="margin: 0; color: #6b7280; font-size: 12px;">
                © ${new Date().getFullYear()} Savanna Journeys. All rights reserved.
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `;
};

/**
 * Simple contact form - Business notification (HomeContactSection)
 */
exports.generateSimpleContactBusinessEmail = (contact) => {
  const { name, email, travelDates, message, submittedAt } = contact;

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Contact Form</title>
</head>
<body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f5f5f5;">
  <table role="presentation" style="width: 100%; border-collapse: collapse;">
    <tr>
      <td align="center" style="padding: 40px 0;">
        <table role="presentation" style="width: 600px; border-collapse: collapse; background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">

          <!-- Header -->
          <tr>
            <td style="background: linear-gradient(135deg, #dc2626 0%, #991b1b 100%); padding: 30px; text-align: center;">
              <h1 style="margin: 0; color: #ffffff; font-size: 24px; font-weight: bold;">📧 New Contact Form</h1>
              <p style="margin: 10px 0 0 0; color: #fecaca; font-size: 14px;">From website contact section</p>
            </td>
          </tr>

          <!-- Submission Info -->
          <tr>
            <td style="padding: 20px 30px; background-color: #fef3c7; border-bottom: 2px solid #f59e0b;">
              <p style="margin: 0; color: #92400e; font-size: 14px;">
                <strong>Submitted:</strong> ${new Date(submittedAt).toLocaleString('en-US', {
                  dateStyle: 'full',
                  timeStyle: 'short'
                })}
              </p>
            </td>
          </tr>

          <!-- Contact Information -->
          <tr>
            <td style="padding: 30px;">
              <h2 style="margin: 0 0 20px 0; color: #1f2937; font-size: 20px; border-bottom: 2px solid #3b82f6; padding-bottom: 10px;">
                Contact Information
              </h2>
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 10px 0; color: #374151; font-weight: bold; width: 180px;">Name:</td>
                  <td style="padding: 10px 0; color: #1f2937; font-size: 16px; font-weight: bold;">${name}</td>
                </tr>
                <tr>
                  <td style="padding: 10px 0; color: #374151; font-weight: bold;">Email:</td>
                  <td style="padding: 10px 0;">
                    <a href="mailto:${email}" style="color: #2563eb; text-decoration: none; font-weight: bold;">${email}</a>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 10px 0; color: #374151; font-weight: bold;">Travel Dates:</td>
                  <td style="padding: 10px 0; color: #1f2937;">${travelDates}</td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Message -->
          <tr>
            <td style="padding: 0 30px 30px 30px;">
              <h3 style="margin: 0 0 15px 0; color: #1f2937; font-size: 18px;">Message</h3>
              <div style="background-color: #fef3c7; padding: 15px; border-left: 4px solid #f59e0b; border-radius: 4px;">
                <p style="margin: 0; color: #78350f; white-space: pre-wrap;">${message}</p>
              </div>
            </td>
          </tr>

          <!-- Action Required -->
          <tr>
            <td style="padding: 0 30px 40px 30px;">
              <div style="background-color: #fee2e2; border: 2px solid #dc2626; padding: 20px; border-radius: 8px;">
                <h3 style="margin: 0 0 10px 0; color: #991b1b; font-size: 16px;">⚡ Action Required</h3>
                <p style="margin: 0; color: #7f1d1d; line-height: 1.6;">
                  Please respond to this customer within 24 hours.
                </p>
              </div>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color: #1f2937; padding: 20px; text-align: center;">
              <p style="margin: 0; color: #9ca3af; font-size: 12px;">Savanna Journeys Contact System</p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `;
};

/**
 * Detailed contact form - Customer confirmation (Contact.js)
 */
exports.generateContactCustomerEmail = (contact) => {
  const { name, email, location, preferredHotels, numberOfAdults, numberOfChildren, checkInDate, checkOutDate, nights, message } = contact;

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Travel Planning Confirmation</title>
</head>
<body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f5f5f5;">
  <table role="presentation" style="width: 100%; border-collapse: collapse;">
    <tr>
      <td align="center" style="padding: 40px 0;">
        <table role="presentation" style="width: 600px; border-collapse: collapse; background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">

          <!-- Header -->
          <tr>
            <td style="background: linear-gradient(135deg, #2d3748 0%, #1a202c 100%); padding: 40px 30px; text-align: center;">
              <h1 style="margin: 0; color: #ffffff; font-size: 28px; font-weight: bold;">Savanna Journeys</h1>
              <p style="margin: 10px 0 0 0; color: #cbd5e0; font-size: 14px;">Your African Adventure Awaits</p>
            </td>
          </tr>

          <!-- Success Message -->
          <tr>
            <td style="padding: 40px 30px 20px 30px; text-align: center;">
              <div style="background-color: #f0fdf4; border: 2px solid #86efac; border-radius: 8px; padding: 20px; margin-bottom: 30px;">
                <h2 style="margin: 0; color: #166534; font-size: 24px;">Travel Inquiry Received!</h2>
                <p style="margin: 10px 0 0 0; color: #15803d; font-size: 16px;">We're excited to plan your ${location} adventure</p>
              </div>
            </td>
          </tr>

          <!-- Message -->
          <tr>
            <td style="padding: 0 30px 30px 30px;">
              <p style="margin: 0 0 20px 0; color: #374151; font-size: 16px; line-height: 1.6;">
                Dear <strong>${name}</strong>,
              </p>
              <p style="margin: 0 0 20px 0; color: #374151; font-size: 16px; line-height: 1.6;">
                Thank you for your travel inquiry! Our team has received your safari planning details and will create a personalized itinerary for you within 24 hours.
              </p>
            </td>
          </tr>

          <!-- Travel Details -->
          <tr>
            <td style="padding: 0 30px 30px 30px;">
              <div style="background-color: #dbeafe; border-left: 4px solid #3b82f6; padding: 20px; border-radius: 4px;">
                <h3 style="margin: 0 0 15px 0; color: #1e3a8a; font-size: 18px;">Your Travel Details</h3>
                <table style="width: 100%; border-collapse: collapse;">
                  <tr>
                    <td style="padding: 8px 0; color: #1e3a8a; font-weight: bold; width: 180px;">Destination:</td>
                    <td style="padding: 8px 0; color: #1e40af; font-size: 16px; font-weight: bold;">${location}</td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; color: #1e3a8a; font-weight: bold;">Check-in Date:</td>
                    <td style="padding: 8px 0; color: #1e40af;">${checkInDate}</td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; color: #1e3a8a; font-weight: bold;">Check-out Date:</td>
                    <td style="padding: 8px 0; color: #1e40af;">${checkOutDate}</td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; color: #1e3a8a; font-weight: bold;">Duration:</td>
                    <td style="padding: 8px 0; color: #1e40af; font-weight: bold;">${nights} ${nights === 1 ? 'night' : 'nights'}</td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; color: #1e3a8a; font-weight: bold;">Adults:</td>
                    <td style="padding: 8px 0; color: #1e40af;">${numberOfAdults}</td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; color: #1e3a8a; font-weight: bold;">Children:</td>
                    <td style="padding: 8px 0; color: #1e40af;">${numberOfChildren}</td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; color: #1e3a8a; font-weight: bold;">Preferred Hotels:</td>
                    <td style="padding: 8px 0; color: #1e40af;">${preferredHotels}</td>
                  </tr>
                  ${message !== 'No additional information provided' ? `
                  <tr>
                    <td style="padding: 8px 0; color: #1e3a8a; font-weight: bold; vertical-align: top;">Message:</td>
                    <td style="padding: 8px 0; color: #1e40af; white-space: pre-wrap;">${message}</td>
                  </tr>
                  ` : ''}
                </table>
              </div>
            </td>
          </tr>

          <!-- Next Steps -->
          <tr>
            <td style="padding: 0 30px 30px 30px;">
              <h3 style="margin: 0 0 15px 0; color: #1f2937; font-size: 18px;">What Happens Next?</h3>
              <ol style="margin: 0; padding-left: 20px; color: #374151; line-height: 1.8;">
                <li style="margin-bottom: 10px;">Our safari specialist reviews your preferences and travel dates</li>
                <li style="margin-bottom: 10px;">We design a custom itinerary with accommodation options</li>
                <li style="margin-bottom: 10px;">You'll receive a detailed proposal with pricing within 24 hours</li>
                <li>Once approved, we handle all bookings and preparations for your journey!</li>
              </ol>
            </td>
          </tr>

          <!-- Contact Info -->
          <tr>
            <td style="padding: 0 30px 40px 30px;">
              <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; text-align: center;">
                <h3 style="margin: 0 0 15px 0; color: #1f2937; font-size: 16px;">Need Immediate Assistance?</h3>
                <p style="margin: 0 0 10px 0; color: #374151;">
                  <strong>Email:</strong> <a href="mailto:journeyssavanna@gmail.com" style="color: #2563eb; text-decoration: none;">journeyssavanna@gmail.com</a>
                </p>
                <p style="margin: 0; color: #374151;">
                  <strong>WhatsApp:</strong> <a href="https://wa.me/254742779434" style="color: #2563eb; text-decoration: none;">+254 742 779 434</a>
                </p>
              </div>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color: #1f2937; padding: 30px; text-align: center;">
              <p style="margin: 0 0 10px 0; color: #9ca3af; font-size: 14px;">
                Savanna Journeys - Unforgettable African Safari Experiences
              </p>
              <p style="margin: 0 0 15px 0; color: #9ca3af; font-size: 12px;">Nairobi, Kenya</p>
              <p style="margin: 0; color: #6b7280; font-size: 12px;">
                © ${new Date().getFullYear()} Savanna Journeys. All rights reserved.
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `;
};

/**
 * Detailed contact form - Business notification (Contact.js)
 */
exports.generateContactBusinessEmail = (contact) => {
  const { name, email, location, preferredHotels, numberOfAdults, numberOfChildren, checkInDate, checkOutDate, nights, message, submittedAt } = contact;

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Travel Inquiry</title>
</head>
<body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f5f5f5;">
  <table role="presentation" style="width: 100%; border-collapse: collapse;">
    <tr>
      <td align="center" style="padding: 40px 0;">
        <table role="presentation" style="width: 600px; border-collapse: collapse; background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">

          <!-- Header -->
          <tr>
            <td style="background: linear-gradient(135deg, #dc2626 0%, #991b1b 100%); padding: 30px; text-align: center;">
              <h1 style="margin: 0; color: #ffffff; font-size: 24px; font-weight: bold;">✈️ New Travel Inquiry</h1>
              <p style="margin: 10px 0 0 0; color: #fecaca; font-size: 14px;">Safari planning request received</p>
            </td>
          </tr>

          <!-- Submission Info -->
          <tr>
            <td style="padding: 20px 30px; background-color: #fef3c7; border-bottom: 2px solid #f59e0b;">
              <p style="margin: 0; color: #92400e; font-size: 14px;">
                <strong>Submitted:</strong> ${new Date(submittedAt).toLocaleString('en-US', {
                  dateStyle: 'full',
                  timeStyle: 'short'
                })}
              </p>
            </td>
          </tr>

          <!-- Customer Information -->
          <tr>
            <td style="padding: 30px;">
              <h2 style="margin: 0 0 20px 0; color: #1f2937; font-size: 20px; border-bottom: 2px solid #3b82f6; padding-bottom: 10px;">
                Customer Information
              </h2>
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 10px 0; color: #374151; font-weight: bold; width: 180px;">Name:</td>
                  <td style="padding: 10px 0; color: #1f2937; font-size: 16px; font-weight: bold;">${name}</td>
                </tr>
                <tr>
                  <td style="padding: 10px 0; color: #374151; font-weight: bold;">Email:</td>
                  <td style="padding: 10px 0;">
                    <a href="mailto:${email}" style="color: #2563eb; text-decoration: none; font-weight: bold;">${email}</a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Travel Details -->
          <tr>
            <td style="padding: 0 30px 30px 30px;">
              <h2 style="margin: 0 0 20px 0; color: #1f2937; font-size: 20px; border-bottom: 2px solid #10b981; padding-bottom: 10px;">
                Travel Details
              </h2>
              <table style="width: 100%; border-collapse: collapse; background-color: #ecfdf5; padding: 20px; border-radius: 8px;">
                <tr>
                  <td style="padding: 10px 15px; color: #065f46; font-weight: bold; width: 180px;">Destination:</td>
                  <td style="padding: 10px 15px; color: #064e3b; font-size: 16px; font-weight: bold;">${location}</td>
                </tr>
                <tr>
                  <td style="padding: 10px 15px; color: #065f46; font-weight: bold;">Check-in:</td>
                  <td style="padding: 10px 15px; color: #064e3b;">${checkInDate}</td>
                </tr>
                <tr>
                  <td style="padding: 10px 15px; color: #065f46; font-weight: bold;">Check-out:</td>
                  <td style="padding: 10px 15px; color: #064e3b;">${checkOutDate}</td>
                </tr>
                <tr>
                  <td style="padding: 10px 15px; color: #065f46; font-weight: bold;">Duration:</td>
                  <td style="padding: 10px 15px; color: #064e3b; font-size: 16px; font-weight: bold;">${nights} nights</td>
                </tr>
                <tr>
                  <td style="padding: 10px 15px; color: #065f46; font-weight: bold;">Adults:</td>
                  <td style="padding: 10px 15px; color: #064e3b;">${numberOfAdults}</td>
                </tr>
                <tr>
                  <td style="padding: 10px 15px; color: #065f46; font-weight: bold;">Children:</td>
                  <td style="padding: 10px 15px; color: #064e3b;">${numberOfChildren}</td>
                </tr>
                <tr>
                  <td style="padding: 10px 15px; color: #065f46; font-weight: bold;">Preferred Hotels:</td>
                  <td style="padding: 10px 15px; color: #064e3b;">${preferredHotels}</td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Additional Message -->
          ${message !== 'No additional information provided' ? `
          <tr>
            <td style="padding: 0 30px 30px 30px;">
              <h3 style="margin: 0 0 15px 0; color: #1f2937; font-size: 18px;">Additional Information</h3>
              <div style="background-color: #fef3c7; padding: 15px; border-left: 4px solid #f59e0b; border-radius: 4px;">
                <p style="margin: 0; color: #78350f; white-space: pre-wrap;">${message}</p>
              </div>
            </td>
          </tr>
          ` : ''}

          <!-- Action Required -->
          <tr>
            <td style="padding: 0 30px 40px 30px;">
              <div style="background-color: #fee2e2; border: 2px solid #dc2626; padding: 20px; border-radius: 8px;">
                <h3 style="margin: 0 0 10px 0; color: #991b1b; font-size: 16px;">⚡ Action Required</h3>
                <p style="margin: 0; color: #7f1d1d; line-height: 1.6;">
                  Create a personalized itinerary and respond within 24 hours. A confirmation email has been sent to the customer.
                </p>
              </div>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color: #1f2937; padding: 20px; text-align: center;">
              <p style="margin: 0; color: #9ca3af; font-size: 12px;">Savanna Journeys Booking System</p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `;
};

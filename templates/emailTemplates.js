/**
 * Email template generators for booking confirmations and notifications
 */

/**
 * Generate customer confirmation email
 */
exports.generateCustomerEmail = (booking) => {
  const {
    fullName,
    packageTitle,
    packageCountry,
    duration,
    travelDate,
    numberOfTravelers,
    accommodationType,
    specialRequests
  } = booking;

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Booking Confirmation</title>
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
                <h2 style="margin: 0; color: #166534; font-size: 24px;">Booking Request Received!</h2>
                <p style="margin: 10px 0 0 0; color: #15803d; font-size: 16px;">Thank you for choosing Savanna Journeys</p>
              </div>
            </td>
          </tr>

          <!-- Customer Details -->
          <tr>
            <td style="padding: 0 30px 20px 30px;">
              <p style="margin: 0 0 20px 0; color: #374151; font-size: 16px; line-height: 1.6;">
                Dear <strong>${fullName}</strong>,
              </p>
              <p style="margin: 0 0 20px 0; color: #374151; font-size: 16px; line-height: 1.6;">
                We have received your booking request and our team will contact you within 24 hours to confirm your safari details and discuss the next steps.
              </p>
            </td>
          </tr>

          <!-- Booking Details -->
          <tr>
            <td style="padding: 0 30px 30px 30px;">
              <div style="background-color: #fef3c7; border-left: 4px solid #f59e0b; padding: 20px; border-radius: 4px;">
                <h3 style="margin: 0 0 15px 0; color: #92400e; font-size: 18px;">Booking Details</h3>

                <table style="width: 100%; border-collapse: collapse;">
                  <tr>
                    <td style="padding: 8px 0; color: #78350f; font-weight: bold; width: 180px;">Package:</td>
                    <td style="padding: 8px 0; color: #78350f;">${packageTitle}</td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; color: #78350f; font-weight: bold;">Destination:</td>
                    <td style="padding: 8px 0; color: #78350f;">${packageCountry}</td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; color: #78350f; font-weight: bold;">Duration:</td>
                    <td style="padding: 8px 0; color: #78350f;">${duration}</td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; color: #78350f; font-weight: bold;">Travel Date:</td>
                    <td style="padding: 8px 0; color: #78350f;">${travelDate}</td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; color: #78350f; font-weight: bold;">Travelers:</td>
                    <td style="padding: 8px 0; color: #78350f;">${numberOfTravelers} ${numberOfTravelers == 1 ? 'person' : 'people'}</td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; color: #78350f; font-weight: bold;">Accommodation:</td>
                    <td style="padding: 8px 0; color: #78350f;">${accommodationType}</td>
                  </tr>
                  ${specialRequests !== 'None' ? `
                  <tr>
                    <td style="padding: 8px 0; color: #78350f; font-weight: bold; vertical-align: top;">Special Requests:</td>
                    <td style="padding: 8px 0; color: #78350f;">${specialRequests}</td>
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
                <li style="margin-bottom: 10px;">Our safari expert will review your request and contact you within 24 hours</li>
                <li style="margin-bottom: 10px;">We'll provide a detailed itinerary and pricing information</li>
                <li style="margin-bottom: 10px;">Once confirmed, we'll send you booking instructions and payment details</li>
                <li>Get ready for the adventure of a lifetime!</li>
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
              <p style="margin: 0 0 15px 0; color: #9ca3af; font-size: 12px;">
                Nairobi, Kenya
              </p>
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
 * Generate business notification email
 */
exports.generateBusinessEmail = (booking) => {
  const {
    fullName,
    email,
    phone,
    customerCountry,
    packageTitle,
    packageCountry,
    duration,
    travelDate,
    numberOfTravelers,
    accommodationType,
    specialRequests,
    newsletter,
    submittedAt
  } = booking;

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Booking Request</title>
</head>
<body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f5f5f5;">
  <table role="presentation" style="width: 100%; border-collapse: collapse;">
    <tr>
      <td align="center" style="padding: 40px 0;">
        <table role="presentation" style="width: 600px; border-collapse: collapse; background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">

          <!-- Header -->
          <tr>
            <td style="background: linear-gradient(135deg, #dc2626 0%, #991b1b 100%); padding: 30px; text-align: center;">
              <h1 style="margin: 0; color: #ffffff; font-size: 24px; font-weight: bold;">🚨 New Booking Request</h1>
              <p style="margin: 10px 0 0 0; color: #fecaca; font-size: 14px;">Immediate attention required</p>
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
                  <td style="padding: 10px 0; color: #374151; font-weight: bold; width: 180px;">Full Name:</td>
                  <td style="padding: 10px 0; color: #1f2937; font-size: 16px;">${fullName}</td>
                </tr>
                <tr>
                  <td style="padding: 10px 0; color: #374151; font-weight: bold;">Email:</td>
                  <td style="padding: 10px 0;">
                    <a href="mailto:${email}" style="color: #2563eb; text-decoration: none; font-weight: bold;">${email}</a>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 10px 0; color: #374151; font-weight: bold;">Phone:</td>
                  <td style="padding: 10px 0;">
                    <a href="tel:${phone}" style="color: #2563eb; text-decoration: none; font-weight: bold;">${phone}</a>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 10px 0; color: #374151; font-weight: bold;">Country:</td>
                  <td style="padding: 10px 0; color: #1f2937;">${customerCountry}</td>
                </tr>
                <tr>
                  <td style="padding: 10px 0; color: #374151; font-weight: bold;">Newsletter:</td>
                  <td style="padding: 10px 0; color: #1f2937;">${newsletter ? '✅ Yes' : '❌ No'}</td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Package Details -->
          <tr>
            <td style="padding: 0 30px 30px 30px;">
              <h2 style="margin: 0 0 20px 0; color: #1f2937; font-size: 20px; border-bottom: 2px solid #10b981; padding-bottom: 10px;">
                Package Details
              </h2>
              <table style="width: 100%; border-collapse: collapse; background-color: #ecfdf5; padding: 20px; border-radius: 8px;">
                <tr>
                  <td style="padding: 10px 15px; color: #065f46; font-weight: bold; width: 180px;">Package:</td>
                  <td style="padding: 10px 15px; color: #064e3b; font-size: 16px; font-weight: bold;">${packageTitle}</td>
                </tr>
                <tr>
                  <td style="padding: 10px 15px; color: #065f46; font-weight: bold;">Destination:</td>
                  <td style="padding: 10px 15px; color: #064e3b;">${packageCountry}</td>
                </tr>
                <tr>
                  <td style="padding: 10px 15px; color: #065f46; font-weight: bold;">Duration:</td>
                  <td style="padding: 10px 15px; color: #064e3b;">${duration}</td>
                </tr>
                <tr>
                  <td style="padding: 10px 15px; color: #065f46; font-weight: bold;">Travel Date:</td>
                  <td style="padding: 10px 15px; color: #064e3b; font-size: 16px; font-weight: bold;">${travelDate}</td>
                </tr>
                <tr>
                  <td style="padding: 10px 15px; color: #065f46; font-weight: bold;">Number of Travelers:</td>
                  <td style="padding: 10px 15px; color: #064e3b; font-size: 16px; font-weight: bold;">${numberOfTravelers}</td>
                </tr>
                <tr>
                  <td style="padding: 10px 15px; color: #065f46; font-weight: bold;">Accommodation:</td>
                  <td style="padding: 10px 15px; color: #064e3b;">${accommodationType}</td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Special Requests -->
          ${specialRequests !== 'None' ? `
          <tr>
            <td style="padding: 0 30px 30px 30px;">
              <h3 style="margin: 0 0 15px 0; color: #1f2937; font-size: 18px;">Special Requests</h3>
              <div style="background-color: #fef3c7; padding: 15px; border-left: 4px solid #f59e0b; border-radius: 4px;">
                <p style="margin: 0; color: #78350f; white-space: pre-wrap;">${specialRequests}</p>
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
                  Please respond to this customer within 24 hours. A confirmation email has been automatically sent to the customer.
                </p>
              </div>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color: #1f2937; padding: 20px; text-align: center;">
              <p style="margin: 0; color: #9ca3af; font-size: 12px;">
                Savanna Journeys Booking System
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

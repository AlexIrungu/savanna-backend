/**
 * Email templates for service booking forms
 */

/**
 * Generate customer confirmation email for service booking
 */
exports.generateServiceCustomerEmail = (service) => {
  const {
    name,
    email,
    phone,
    location,
    preferredDate,
    groupSize,
    budget,
    specialRequests,
    service: serviceName
  } = service;

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Service Booking Confirmation</title>
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
                <h2 style="margin: 0; color: #166534; font-size: 24px;">Service Booking Received!</h2>
                <p style="margin: 10px 0 0 0; color: #15803d; font-size: 16px;">Thank you for choosing our ${serviceName}</p>
              </div>
            </td>
          </tr>

          <!-- Customer Message -->
          <tr>
            <td style="padding: 0 30px 30px 30px;">
              <p style="margin: 0 0 20px 0; color: #374151; font-size: 16px; line-height: 1.6;">
                Dear <strong>${name}</strong>,
              </p>
              <p style="margin: 0 0 20px 0; color: #374151; font-size: 16px; line-height: 1.6;">
                We've received your service booking request and our team is excited to create an exceptional experience for you. We'll contact you within 24 hours to discuss the details and finalize your booking.
              </p>
            </td>
          </tr>

          <!-- Service Details -->
          <tr>
            <td style="padding: 0 30px 30px 30px;">
              <div style="background-color: #ede9fe; border-left: 4px solid #8b5cf6; padding: 20px; border-radius: 4px;">
                <h3 style="margin: 0 0 15px 0; color: #5b21b6; font-size: 18px;">Your Service Booking</h3>
                <table style="width: 100%; border-collapse: collapse;">
                  <tr>
                    <td style="padding: 8px 0; color: #5b21b6; font-weight: bold; width: 180px;">Service:</td>
                    <td style="padding: 8px 0; color: #6d28d9; font-size: 16px; font-weight: bold;">${serviceName}</td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; color: #5b21b6; font-weight: bold;">Email:</td>
                    <td style="padding: 8px 0; color: #6d28d9;">${email}</td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; color: #5b21b6; font-weight: bold;">Phone:</td>
                    <td style="padding: 8px 0; color: #6d28d9;">${phone}</td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; color: #5b21b6; font-weight: bold;">Your Location:</td>
                    <td style="padding: 8px 0; color: #6d28d9;">${location}</td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; color: #5b21b6; font-weight: bold;">Preferred Date:</td>
                    <td style="padding: 8px 0; color: #6d28d9;">${preferredDate}</td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; color: #5b21b6; font-weight: bold;">Group Size:</td>
                    <td style="padding: 8px 0; color: #6d28d9;">${groupSize}</td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; color: #5b21b6; font-weight: bold;">Budget Range:</td>
                    <td style="padding: 8px 0; color: #6d28d9;">${budget}</td>
                  </tr>
                  ${specialRequests !== 'None' ? `
                  <tr>
                    <td style="padding: 8px 0; color: #5b21b6; font-weight: bold; vertical-align: top;">Special Requests:</td>
                    <td style="padding: 8px 0; color: #6d28d9; white-space: pre-wrap;">${specialRequests}</td>
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
                <li style="margin-bottom: 10px;">Our service specialist will review your booking request and preferences</li>
                <li style="margin-bottom: 10px;">We'll contact you within 24 hours to confirm details and availability</li>
                <li style="margin-bottom: 10px;">Once confirmed, we'll send you a detailed itinerary and pricing</li>
                <li>Get ready for an unforgettable experience!</li>
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
 * Generate business notification email for service booking
 */
exports.generateServiceBusinessEmail = (service) => {
  const {
    name,
    email,
    phone,
    location,
    preferredDate,
    groupSize,
    budget,
    specialRequests,
    service: serviceName,
    submittedAt
  } = service;

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Service Booking</title>
</head>
<body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f5f5f5;">
  <table role="presentation" style="width: 100%; border-collapse: collapse;">
    <tr>
      <td align="center" style="padding: 40px 0;">
        <table role="presentation" style="width: 600px; border-collapse: collapse; background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">

          <!-- Header -->
          <tr>
            <td style="background: linear-gradient(135deg, #dc2626 0%, #991b1b 100%); padding: 30px; text-align: center;">
              <h1 style="margin: 0; color: #ffffff; font-size: 24px; font-weight: bold;">🎯 New Service Booking</h1>
              <p style="margin: 10px 0 0 0; color: #fecaca; font-size: 14px;">Service booking request received</p>
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

          <!-- Service Information -->
          <tr>
            <td style="padding: 30px;">
              <div style="background-color: #ede9fe; border: 2px solid #8b5cf6; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
                <h2 style="margin: 0; color: #5b21b6; font-size: 24px; text-align: center;">${serviceName}</h2>
              </div>

              <h3 style="margin: 0 0 20px 0; color: #1f2937; font-size: 20px; border-bottom: 2px solid #3b82f6; padding-bottom: 10px;">
                Customer Information
              </h3>
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
                  <td style="padding: 10px 0; color: #374151; font-weight: bold;">Phone:</td>
                  <td style="padding: 10px 0;">
                    <a href="tel:${phone}" style="color: #2563eb; text-decoration: none; font-weight: bold;">${phone}</a>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 10px 0; color: #374151; font-weight: bold;">Location:</td>
                  <td style="padding: 10px 0; color: #1f2937;">${location}</td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Booking Details -->
          <tr>
            <td style="padding: 0 30px 30px 30px;">
              <h3 style="margin: 0 0 20px 0; color: #1f2937; font-size: 20px; border-bottom: 2px solid #10b981; padding-bottom: 10px;">
                Booking Details
              </h3>
              <table style="width: 100%; border-collapse: collapse; background-color: #ecfdf5; padding: 20px; border-radius: 8px;">
                <tr>
                  <td style="padding: 10px 15px; color: #065f46; font-weight: bold; width: 180px;">Preferred Date:</td>
                  <td style="padding: 10px 15px; color: #064e3b; font-size: 16px; font-weight: bold;">${preferredDate}</td>
                </tr>
                <tr>
                  <td style="padding: 10px 15px; color: #065f46; font-weight: bold;">Group Size:</td>
                  <td style="padding: 10px 15px; color: #064e3b;">${groupSize}</td>
                </tr>
                <tr>
                  <td style="padding: 10px 15px; color: #065f46; font-weight: bold;">Budget Range:</td>
                  <td style="padding: 10px 15px; color: #064e3b; font-weight: bold;">${budget}</td>
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
                  Please respond to this customer within 24 hours to confirm availability and discuss service details. A confirmation email has been sent to the customer.
                </p>
              </div>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color: #1f2937; padding: 20px; text-align: center;">
              <p style="margin: 0; color: #9ca3af; font-size: 12px;">Savanna Journeys Service Booking System</p>
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

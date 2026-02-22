const { Resend } = require('resend');

const resend = new Resend(process.env.RESEND_API_KEY);

const sendMail = async ({ from, to, subject, html, replyTo }) => {
  const payload = { from, to, subject, html };
  if (replyTo) payload.replyTo = replyTo;

  const { data, error } = await resend.emails.send(payload);

  if (error) {
    throw new Error(error.message || 'Failed to send email via Resend');
  }

  return data;
};

module.exports = { sendMail };

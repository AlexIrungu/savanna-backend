# Savanna Journeys Backend

Node.js/Express backend API for handling booking forms with auto-responder emails.

## Features

- Express.js REST API
- Nodemailer with Gmail SMTP
- Auto-responder emails to customers
- Notification emails to business
- Rate limiting for security
- CORS configured for frontend
- Beautiful HTML email templates

## Setup Instructions

### 1. Install Dependencies

```bash
cd backend
npm install
```

### 2. Configure Gmail App Password

To use Gmail SMTP, you need to create an App Password:

1. Go to your Google Account: https://myaccount.google.com/
2. Select **Security** from the left menu
3. Under "How you sign in to Google," select **2-Step Verification** (you must enable this first)
4. At the bottom, select **App passwords**
5. Select app: **Mail**
6. Select device: **Other** (enter "Savanna Backend")
7. Click **Generate**
8. Copy the 16-character password

### 3. Create Environment File

Create a `.env` file in the `backend/` folder:

```bash
cp .env.example .env
```

Edit `.env` and add your configuration:

```env
PORT=5000

# Frontend URL (update this when deploying)
FRONTEND_URL=http://localhost:3000

# Gmail SMTP Configuration
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_SECURE=false
EMAIL_USER=journeyssavanna@gmail.com
EMAIL_PASS=your-16-char-app-password-here

# Business Email (where booking notifications are sent)
BUSINESS_EMAIL=journeyssavanna@gmail.com

# Email Configuration
EMAIL_FROM=Savanna Journeys <journeyssavanna@gmail.com>
```

### 4. Start Development Server

```bash
npm run dev
```

The server will start on `http://localhost:5000`

### 5. Update Frontend API URL (Production)

When deploying, update the API URL in:
- `src/components/BookingModal.js` - Change `http://localhost:5000` to your production backend URL

## API Endpoints

### Health Check
```
GET /health
```
Returns server status.

### Create Booking
```
POST /api/booking
Content-Type: application/json

{
  "fullName": "John Doe",
  "email": "john@example.com",
  "phone": "+1234567890",
  "country": "United States",
  "packageTitle": "3 Days Masai Mara Safari",
  "packageCountry": "Kenya",
  "duration": "3 Days / 2 Nights",
  "travelDate": "2024-06-15",
  "numberOfTravelers": "2",
  "accommodationType": "Luxury",
  "specialRequests": "Vegetarian meals please",
  "newsletter": true
}
```

**Response (Success):**
```json
{
  "success": true,
  "message": "Booking request submitted successfully! Check your email for confirmation."
}
```

**Response (Error):**
```json
{
  "success": false,
  "message": "Please fill in all required fields"
}
```

## Email Templates

The system sends two emails per booking:

1. **Customer Confirmation Email** - Sent to the customer with booking details and next steps
2. **Business Notification Email** - Sent to business email with full booking information

Templates are located in `templates/emailTemplates.js` and can be customized.

## Production Deployment

### Option 1: Railway

1. Create account at https://railway.app
2. Click "New Project" → "Deploy from GitHub repo"
3. Select your repository
4. Set root directory to `/backend`
5. Add environment variables in Railway dashboard
6. Deploy!

Railway will give you a URL like: `https://your-app.up.railway.app`

### Option 2: Render

1. Create account at https://render.com
2. Click "New +" → "Web Service"
3. Connect your GitHub repository
4. Set root directory to `backend`
5. Build command: `npm install`
6. Start command: `npm start`
7. Add environment variables
8. Deploy!

### Option 3: Heroku

```bash
cd backend
heroku create savanna-backend
heroku config:set EMAIL_USER=your-email@gmail.com
heroku config:set EMAIL_PASS=your-app-password
# ... set other env vars
git subtree push --prefix backend heroku main
```

## Security Notes

- Never commit `.env` file to git
- Use strong app passwords
- Enable 2FA on your Gmail account
- Keep rate limiting enabled
- Update CORS `FRONTEND_URL` to match your production domain

## Troubleshooting

### Email not sending
- Check Gmail app password is correct
- Verify 2-Step Verification is enabled on Google account
- Check for typos in `.env` file
- Look at server console for error messages

### CORS errors
- Update `FRONTEND_URL` in `.env` to match your frontend domain
- Restart the backend server after changing `.env`

### Rate limiting
- Default: 10 requests per 15 minutes per IP
- Adjust in `server.js` if needed for testing

## Support

For issues, contact: journeyssavanna@gmail.com

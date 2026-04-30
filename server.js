const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Nodemailer Transporter
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT),
  secure: true, 
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
  tls: {
    rejectUnauthorized: false
  }
});

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' });
});

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
  const { name, email, phone, requirement } = req.body;

  if (!name || !email || !phone || !requirement) {
    return res.status(400).json({ status: 'error', message: 'Please fill all required fields.' });
  }

  // Admin Email Content
  const adminEmailContent = `
    <html>
    <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
      <div style="max-width: 600px; margin: auto; padding: 20px; border: 1px solid #ddd; border-radius: 12px;">
        <div style="background: #F4B400; color: #111; padding: 15px; border-radius: 8px 8px 0 0; font-size: 1.5rem; font-weight: bold; text-align: center;">
          A. SHUKLA & CO.
        </div>
        <div style="padding: 20px; background: #fff;">
          <p>You have received a new project inquiry through the website.</p>
          
          <div style="margin-bottom: 20px; border-bottom: 1px solid #f0f0f0; padding-bottom: 10px;">
            <div style="font-weight: bold; color: #F4B400; text-transform: uppercase; font-size: 0.8rem; margin-bottom: 5px;">Client Name</div>
            <div style="font-size: 1.1rem; color: #111; font-weight: 500;">${name}</div>
          </div>
          
          <div style="margin-bottom: 20px; border-bottom: 1px solid #f0f0f0; padding-bottom: 10px;">
            <div style="font-weight: bold; color: #F4B400; text-transform: uppercase; font-size: 0.8rem; margin-bottom: 5px;">Email Address</div>
            <div style="font-size: 1.1rem; color: #111; font-weight: 500;">${email}</div>
          </div>
          
          <div style="margin-bottom: 20px; border-bottom: 1px solid #f0f0f0; padding-bottom: 10px;">
            <div style="font-weight: bold; color: #F4B400; text-transform: uppercase; font-size: 0.8rem; margin-bottom: 5px;">Mobile Number</div>
            <div style="font-size: 1.1rem; color: #111; font-weight: 500;">${phone}</div>
          </div>
          
          <div style="margin-bottom: 20px; border-bottom: 1px solid #f0f0f0; padding-bottom: 10px;">
            <div style="font-weight: bold; color: #F4B400; text-transform: uppercase; font-size: 0.8rem; margin-bottom: 5px;">Requirement Detail</div>
            <div style="background: #f9f9f9; padding: 15px; border-radius: 8px; font-size: 1.1rem; color: #111; font-weight: 500;">${requirement}</div>
          </div>
        </div>
        <div style="text-align: center; font-size: 0.8rem; color: #888; margin-top: 20px;">
          &copy; ${new Date().getFullYear()} A. Shukla & Co. | Industrial Electrical Contractors
        </div>
      </div>
    </body>
    </html>
  `;

  // Customer Confirmation Email Content
  const customerEmailContent = `
    <html>
    <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
      <div style="max-width: 600px; margin: auto; padding: 20px; border: 1px solid #ddd; border-radius: 12px;">
        <div style="background: #111; color: #F4B400; padding: 20px; border-radius: 8px 8px 0 0; text-align: center;">
          <h2 style="margin:0;">THANK YOU FOR REACHING OUT</h2>
        </div>
        <div style="padding: 30px; background: #fff; text-align: center;">
          <p>Dear <strong>${name}</strong>,</p>
          <p>Thank you for contacting <strong>A. Shukla & Co.</strong> We have successfully received your inquiry regarding your electrical requirements.</p>
          <p>Our executive team is reviewing your details and will get back to you within 24-48 business hours.</p>
          
          <div style="background: #fdfaf0; padding: 20px; border-radius: 8px; text-align: left; margin: 25px 0;">
            <p style="margin:0; font-weight:bold; color:#F4B400;">YOUR SUBMITTED DETAILS:</p>
            <p style="margin:5px 0; font-size:0.9rem;"><strong>Phone:</strong> ${phone}</p>
            <p style="margin:5px 0; font-size:0.9rem;"><strong>Requirement:</strong> ${requirement}</p>
          </div>

          <p>If you have any urgent queries, feel free to reply to this email.</p>
          
          <a href="https://ashuklaco.in" style="background: #F4B400; color: #111; padding: 12px 25px; text-decoration: none; border-radius: 5px; font-weight: bold; display: inline-block; margin-top: 20px;">Visit Our Website</a>
        </div>
        <div style="text-align: center; font-size: 0.8rem; color: #888; margin-top: 20px; border-top: 1px solid #eee; padding-top: 20px;">
          <strong>A. Shukla & Co.</strong><br>
          Tier-1 Industrial Electrical Contractor<br>
          Bengaluru, India
        </div>
      </div>
    </body>
    </html>
  `;

  try {
    // Send Admin Notification
    await transporter.sendMail({
      from: '"A. Shukla & Co. Website" <info@ashuklaco.in>',
      to: process.env.ADMIN_EMAIL,
      replyTo: email,
      subject: `Project Inquiry: ${name} via ashuklaco.in`,
      html: adminEmailContent,
      text: `New Inquiry from ${name}\nEmail: ${email}\nPhone: ${phone}\nRequirement: ${requirement}`
    });

    // Send Customer Confirmation
    await transporter.sendMail({
      from: '"A. Shukla & Co. Website" <info@ashuklaco.in>',
      to: email,
      subject: "Confirmation: We've received your request - A. Shukla & Co.",
      html: customerEmailContent,
      text: `Hi ${name}, thank you for contacting A. Shukla & Co. We have received your inquiry and will get back to you shortly.`
    });

    res.json({ status: 'success', message: 'Thank you! Your inquiry has been received.' });
  } catch (error) {
    console.error('Mailer Error:', error);
    res.status(500).json({ status: 'error', message: 'Internal server error. Failed to send email.' });
  }
});

const server = app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// For cPanel/Passenger compatibility
server.keepAliveTimeout = 60000;

require("dotenv").config(); // Load environment variables

const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();
const router = express.Router();

app.use(cors());
app.use(express.json());
app.use("/", router);

// Use environment PORT or fallback to 5000
const PORT = process.env.PORT || 5001;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// Debug: Check if EMAIL_USER and PASS are loaded
console.log("Email:", process.env.EMAIL_USER);
console.log("App Password:", process.env.EMAIL_PASS);

// Setup transporter
const contactEmail = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,     // Use from .env
    pass: process.env.EMAIL_PASS      // Use Gmail App Password from .env
  },
});

// Verify connection
contactEmail.verify((error) => {
  if (error) {
    console.error("Error verifying email transporter:", error);
  } else {
    console.log("Email transporter ready.");
  }
});

// POST route for contact form
router.post("/contact", (req, res) => {
  const { firstName, lastName, email, message, phone } = req.body;
  const fullName = `${firstName} ${lastName}`;

  const mail = {
    from: fullName,
    to: process.env.EMAIL_USER, // This is where you'll receive emails
    subject: "Contact Form Submission - Portfolio",
    html: `
      <h3>New message from portfolio contact form</h3>
      <p><strong>Name:</strong> ${fullName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Message:</strong><br>${message}</p>
    `,
  };

  contactEmail.sendMail(mail, (error, info) => {
    if (error) {
      console.error("Error sending email:", error);
      res.status(500).json({ code: 500, status: "Email failed to send" });
    } else {
      console.log("Email sent:", info.response);
      res.status(200).json({ code: 200, status: "Message Sent" });
    }
  });
});



const nodemailer = require("nodemailer");
require("dotenv").config();
console.log("EMAIL:", process.env.EMAIL);
console.log("PASSWORD:", process.env.PASSWORD);

(async () => {
    const transporter = nodemailer.createTransport({
        host: "mail.urbanfootnotes.com",
        port: 465,
        secure: true,
        auth: {
          user: process.env.EMAIL,
          pass: process.env.PASSWORD,
        },
      });
      

  try {
    const info = await transporter.sendMail({
      from: "orders@urbanfootnotes.com", // Sender email
      to: "jye@urbanfootnotes.com", // Replace with a test recipient
      subject: "Test Email from Urban Footnotes",
      text: "This is a test email sent from our server.",
    });

    console.log("Email sent:", info.messageId);
  } catch (error) {
    console.error("Error sending email:", error);
  }
})();

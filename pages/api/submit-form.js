import "dotenv/config";
import nodemailer from "nodemailer";

export default async function handler(req, res) {
  console.log('SMTP config:', {
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: process.env.SMTP_SECURE,
    user: process.env.SMTP_USER
  });
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  // Log incoming request body
  console.log("Request Body:", req.body);

  const {
    clientName,
    email,
    clientCompany,
    clientPhone,
    address,
    logoUrl,
    discretionaryOptions,
    additionalComments,
  } = req.body;

  const maxCommentLength = 2000;

  // Validate required fields with detailed messages
  if (!email) {
    return res.status(400).json({ message: "Email is missing" });
  }
  if (!address) {
    return res.status(400).json({ message: "Address is missing" });
  }
  if (!logoUrl) {
    return res.status(400).json({ message: "Logo URL is missing" });
  }
  if (!Array.isArray(discretionaryOptions)) {
    return res
      .status(400)
      .json({ message: "Discretionary options must be an array" });
  }

  if (additionalComments && additionalComments.length > maxCommentLength) {
    return res.status(400).json({
      message: `Comments must not exceed ${maxCommentLength} characters.`,
    });
  }

  // Ensure discretionaryOptions is always an array
  const options = Array.isArray(discretionaryOptions)
    ? discretionaryOptions
    : [];

  // Generate a timestamp
  const timestamp = new Date().toISOString(); // ISO 8601 format: YYYY-MM-DDTHH:mm:ss.sssZ

  // Generate a unique Order ID
  const orderId = generateOrderId();

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    
    const mailOptions = {
      from: process.env.SMTP_FROM,
      to: 'contact@urbanfootnotes.com',
      subject: orderId,
      html: `
        <p><strong>Time submitted:</strong> ${timestamp}</p> <!-- Display timestamp -->
        <p><strong>Order ID:</strong> ${orderId}</p> <!-- Include Order ID -->
        <p><strong>Client Name:</strong> ${clientName}</p> <!-- Include Order ID -->
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Client Company:</strong> ${clientCompany}</p>
        <p><strong>Client Phone:</strong> ${clientPhone}</p>
        <p><strong>Address:</strong> ${address}</p>
        <p><strong>Logo URL:</strong> <a href="${logoUrl}" target="_blank">${logoUrl}</a></p>
        <p><strong>Discretionary Options:</strong> ${options.length > 0 ? options.join(", ") : "None"}</p>
        <p><strong>Additional Comments:</strong></p>
        <p>${additionalComments || "None"}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    // Respond to the client with the generated Order ID
    res.status(200).json({ message: "Form submitted successfully", orderId });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ message: "Failed to send email" });
  }
}

// Function to generate a unique Order ID
function generateOrderId() {
  const date = new Date().toISOString().split("T")[0].replace(/-/g, ""); // Format: YYYYMMDD
  const uniquePart = Math.random().toString(36).substring(2, 8).toUpperCase(); // Random 6-char string
  return `ORD-${date}-${uniquePart}`; // Example: ORD-20231124-ABC123
}

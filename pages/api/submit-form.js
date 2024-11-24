import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { email, address, logoUrl, discretionaryOptions, additionalComments } = req.body;

  const maxCommentLength = 2000;

  // Validate required fields
  if ( !email || !address || !logoUrl || discretionaryOptions.length === 0) {
    return res.status(400).json({ message: "Missing required form data" });
  }

  if (additionalComments && additionalComments.length > maxCommentLength) {
    return res.status(400).json({
      message: `Comments must not exceed ${maxCommentLength} characters.`,
    });
  }


      // Generate a timestamp
      const timestamp = new Date().toISOString(); // ISO 8601 format: YYYY-MM-DDTHH:mm:ss.sssZ
      
  // Generate a unique Order ID
  const orderId = generateOrderId();

  try {
    const transporter = nodemailer.createTransport({
      host: "mail.urbanfootnotes.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL,
        to: "contact@urbanfootnotes.com",
        subject: `New Form Submission for Order #${orderId}`,
      html: `
        <p><strong>Time submitted:</strong> ${timestamp}</p> <!-- Display timestamp -->
        <p><strong>Order ID:</strong> ${orderId}</p> <!-- Include Order ID -->
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Address:</strong> ${address}</p>
        <p><strong>Logo URL:</strong> <a href="${logoUrl}" target="_blank">${logoUrl}</a></p>
        <p><strong>Discretionary Options:</strong> ${discretionaryOptions.join(", ")}</p>
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

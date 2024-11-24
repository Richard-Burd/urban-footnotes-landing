import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { orderId, email, address, logoUrl, discretionaryOptions, additionalComments } = req.body;

  const maxCommentLength = 1000; // Enforce the max comment length

  // Validate required fields
  if (!orderId || !email || !address || !logoUrl || discretionaryOptions.length === 0) {
    return res.status(400).json({ message: "Missing required form data" });
  }

  if (additionalComments && additionalComments.length > maxCommentLength) {
    return res.status(400).json({
      message: `Comments must not exceed ${maxCommentLength} characters.`,
    });
  }

    // Generate a timestamp
    const timestamp = new Date().toISOString(); // ISO 8601 format: YYYY-MM-DDTHH:mm:ss.sssZ


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
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Address:</strong> ${address}</p> <!-- Ensure address is included -->
          <p><strong>Logo URL:</strong> <a href="${logoUrl}" target="_blank">${logoUrl}</a></p>
          <p><strong>Discretionary Options:</strong> ${discretionaryOptions.join(", ")}</p>
          <p><strong>Additional Comments:</strong></p>
          <p>${additionalComments || "None"}</p>
        `,
      };

    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: "Form submitted successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ message: "Failed to send email" });
  }
}

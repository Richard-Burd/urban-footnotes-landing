import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { orderId, email, logoUrl, discretionaryOptions } = req.body;

  if (!orderId || !email || !logoUrl || discretionaryOptions.length === 0) {
    return res.status(400).json({ message: "Missing form data" });
  }

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
      to: "jye@urbanfootnotes.com",
      subject: `New Form Submission for Order #${orderId}`,
      html: `
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Logo URL:</strong> <a href="${logoUrl}" target="_blank">${logoUrl}</a></p>
        <p><strong>Discretionary Options:</strong> ${discretionaryOptions.join(", ")}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: "Form submitted successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ message: "Failed to send email" });
  }
}

// Gets called by the <ContactUsForm /> component when the user submits the form
export default async function handler(req, res) {
  if (req.method === "POST") {
    const scriptUrl = process.env.GOOGLE_SCRIPT_URL;

    const response = await fetch(scriptUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(req.body),
    });

    const result = await response.json();
    res.status(200).json(result);
  } else {
    res.status(405).json({ message: "Only POST requests allowed" });
  }
}

// pages/api/googleMapsPlatform.js

export default async function handler(req, res) {
  // Your API key is stored in a local environment variable
  const key = process.env.SECRET_API_KEY;

  // Check if the key exists
  const keyExists = Boolean(key);
  console.log(`Key exists: ${keyExists}`);

  // Fetching data from the external API
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const data = await response.json();

  // Sending the data back to the client, including whether the key exists
  res.status(200).json({ data, keyExists });
}

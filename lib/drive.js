
import { google } from "googleapis";
import { Readable } from "stream";

// 1) In-memory creds
if (!process.env.GOOGLE_CREDENTIALS) {
  throw new Error("Missing GOOGLE_CREDENTIALS env var");
}
const credentials = JSON.parse(process.env.GOOGLE_CREDENTIALS);

// 2) Folder lock
if (!process.env.DRIVE_FOLDER_ID) {
  throw new Error("Missing DRIVE_FOLDER_ID env var");
}
const FOLDER_ID = process.env.DRIVE_FOLDER_ID;

// 3) GoogleAuth setup
const auth = new google.auth.GoogleAuth({
  credentials,
  scopes: ["https://www.googleapis.com/auth/drive.file"],
});
const drive = google.drive({ version: "v3", auth });


/**
 * Uploads a Buffer to Google Drive.
 * @param {Buffer} buffer - File contents
 * @param {string} filename - Desired Drive filename
 * @param {string} mimeType - MIME type of the file
 * @returns {{id: string, link: string}}
 */
export async function uploadToDrive(buffer, filename, mimeType) {
  const stream = Readable.from(buffer);
  const response = await drive.files.create({
    requestBody: { name: filename, mimeType, parents: [FOLDER_ID] },
    media: { mimeType, body: stream },
    fields: 'id, webViewLink',
  });
  return { id: response.data.id, link: response.data.webViewLink };
}
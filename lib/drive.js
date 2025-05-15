// lib/drive.js
import { google } from 'googleapis';
import path from 'path';
import fs from 'fs';
import { Readable } from 'stream';

// Determine service account key path
const envKeyPath = process.env.GOOGLE_SERVICE_KEY_PATH;
let KEY_PATH;
if (envKeyPath && fs.existsSync(envKeyPath)) {
  KEY_PATH = envKeyPath;
} else {
  // fallback to keys/drive-upload.json in project root
  KEY_PATH = path.join(process.cwd(), 'keys', 'drive-upload.json');
}

const FOLDER_ID = process.env.DRIVE_FOLDER_ID;

// Authenticate
const auth = new google.auth.GoogleAuth({
  keyFile: KEY_PATH,
  scopes: ['https://www.googleapis.com/auth/drive.file'],
});
const drive = google.drive({ version: 'v3', auth });

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
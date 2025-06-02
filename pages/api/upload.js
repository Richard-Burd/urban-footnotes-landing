// pages/api/upload.js
import { IncomingForm } from 'formidable';
import fs from 'fs';
import { uploadToDrive } from '../../lib/drive';

// Disable Next.js body parsing for multipart
export const config = { api: { bodyParser: false } };

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    // Parse the form
    const { files } = await new Promise((resolve, reject) => {
      const form = new IncomingForm({ maxFileSize: 100 * 1024 * 1024, multiples: false });
      form.parse(req, (err, fields, files) => err ? reject(err) : resolve({ files }));
    });

    // Get the single file entry
    const fileEntry = Array.isArray(files.file) ? files.file[0] : files.file;
    if (!fileEntry?.filepath) {
      return res.status(400).json({ error: 'No file uploaded' });
    }

    // Read temp file into buffer
    const buffer = await fs.promises.readFile(fileEntry.filepath);

    // Upload and respond
    const { id, link } = await uploadToDrive(buffer, fileEntry.originalFilename, fileEntry.mimetype);
    return res.status(200).json({ fileId: id, fileLink: link });

  } catch (err) {
    console.error('▲ /api/upload error:', err);
    return res.status(500).json({ error: err.message || 'Internal Server Error' });
  }
}

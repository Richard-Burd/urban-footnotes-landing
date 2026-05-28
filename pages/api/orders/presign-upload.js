import { getUploadKey, createUploadUrl } from "@/lib/orderStorage";
import {
  generateOrderId,
  validateUploadRequest,
} from "@/lib/orderValidation";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed" });
  }

  const upload = validateUploadRequest(req.body);
  if (upload.error) {
    return res.status(400).json({ error: upload.error });
  }

  const orderId = generateOrderId();
  const key = getUploadKey(orderId, upload.filename);

  try {
    const uploadUrl = await createUploadUrl({
      key,
      contentType: upload.contentType,
    });

    return res.status(200).json({
      orderId,
      uploadUrl,
      upload: {
        key,
        filename: upload.filename,
        contentType: upload.contentType,
        size: upload.size,
      },
    });
  } catch (error) {
    console.error("Error creating upload URL:", error);
    return res.status(500).json({
      error: error.message || "Could not prepare file upload.",
    });
  }
}

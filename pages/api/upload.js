export default function handler(req, res) {
  res.status(410).json({
    error:
      "This upload endpoint has been replaced by /api/orders/presign-upload.",
  });
}

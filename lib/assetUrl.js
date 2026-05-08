export const getAssetBaseUrl = () =>
  (process.env.NEXT_PUBLIC_S3_BASE_URL || "").replace(/\/+$/, "");

export const toAssetUrl = (path, baseUrl = getAssetBaseUrl()) => {
  if (!path) return "";
  if (/^https?:\/\//i.test(path)) return path;

  const normalizedPath = String(path).replace(/^\/+/, "");
  return baseUrl ? `${baseUrl}/${normalizedPath}` : `/${normalizedPath}`;
};

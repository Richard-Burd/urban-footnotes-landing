import {
  GetObjectCommand,
  PutObjectCommand,
  S3Client,
} from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

const SIGNED_URL_TTL_SECONDS = 7 * 24 * 60 * 60;

let s3Client;

function requireEnv(name) {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Missing ${name} env var`);
  }
  return value;
}

export function getOrderBucket() {
  return requireEnv("S3_ORDER_BUCKET");
}

export function getS3Client() {
  if (!s3Client) {
    s3Client = new S3Client({
      region: requireEnv("AWS_REGION"),
      credentials: {
        accessKeyId: requireEnv("AWS_ACCESS_KEY_ID"),
        secretAccessKey: requireEnv("AWS_SECRET_ACCESS_KEY"),
      },
    });
  }
  return s3Client;
}

export function getOrderJsonKey(orderId) {
  return `orders/${orderId}/order.json`;
}

export function getUploadKey(orderId, filename) {
  return `orders/${orderId}/uploads/${filename}`;
}

export async function createUploadUrl({ key, contentType }) {
  const command = new PutObjectCommand({
    Bucket: getOrderBucket(),
    Key: key,
    ContentType: contentType,
  });

  return getSignedUrl(getS3Client(), command, { expiresIn: 15 * 60 });
}

export async function createDownloadUrl(key) {
  if (!key) return "";

  const command = new GetObjectCommand({
    Bucket: getOrderBucket(),
    Key: key,
  });

  return getSignedUrl(getS3Client(), command, {
    expiresIn: SIGNED_URL_TTL_SECONDS,
  });
}

export async function saveOrder(order) {
  const command = new PutObjectCommand({
    Bucket: getOrderBucket(),
    Key: getOrderJsonKey(order.orderId),
    ContentType: "application/json",
    Body: JSON.stringify(order, null, 2),
  });

  await getS3Client().send(command);
}

export async function loadOrder(orderId) {
  const command = new GetObjectCommand({
    Bucket: getOrderBucket(),
    Key: getOrderJsonKey(orderId),
  });

  const response = await getS3Client().send(command);
  const text = await response.Body.transformToString();
  return JSON.parse(text);
}

import WhatsappCloudAPI from "whatsappcloudapi_wrapper";
import { config as dotenvConfig } from "dotenv";
import WhatsApp from "whatsapp";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import OpenAI from 'openai';

dotenvConfig();
const whatsapp1 = new WhatsappCloudAPI({
  accessToken: process.env.ACCESSTOKEN,
  senderPhoneNumberId: process.env.WA_PHONE_NUMBER_ID,
  WABA_ID: process.env.WABA_ID,
});

const s3 = new S3Client({
  region: process.env.PUBLIC_S3_REGION, // Change region here
  credentials: {
    accessKeyId: process.env.PUBLIC_S3_ACCESS_KEY_ID, // Change access key from .env file
    secretAccessKey: process.env.PUBLIC_S3_SECRET_ACCESS_KEY, // Change Secret Access key from .env file
  },
});

const openai = new OpenAI({
    apiKey: process.env.OPENAI_KEY
});

console.log("AWS S3 file loaded");

const senderNumber = process.env.WA_PHONE_NUMBER_ID;
const wa = new WhatsApp(senderNumber);

export { whatsapp1, wa, s3, openai};

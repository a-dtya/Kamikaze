import WhatsappCloudAPI from 'whatsappcloudapi_wrapper';
import { config as dotenvConfig } from 'dotenv';
import WhatsApp from 'whatsapp';

dotenvConfig();
const whatsapp1 = new WhatsappCloudAPI({
    accessToken: process.env.ACCESSTOKEN,
    senderPhoneNumberId: process.env.WA_PHONE_NUMBER_ID,
    WABA_ID: process.env.WABA_ID,
  });
  
  const senderNumber = process.env.WA_PHONE_NUMBER_ID;
  const wa = new WhatsApp(senderNumber);

export { whatsapp1, wa };
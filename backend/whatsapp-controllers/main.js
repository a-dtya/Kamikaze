import { wa, whatsapp1 } from "../config.js";
import { remove_msg } from "./webhook.js";


const mainflow = async (req, res) => {
  try {
    let body = whatsapp1.parseMessage(req.body);

    if (body?.isMessage) {
      let businessId = body.WABA_ID;
      let incomingMessage = body.message;
      let recipientPhone = incomingMessage.from.phone;
      let typeOfMsg = incomingMessage.type;
      let username = incomingMessage.from.name;

      console.log("incomingMessage", incomingMessage);
      console.log("username", username);
      console.log(incomingMessage.from.phone);

      let msg = incomingMessage.text?.body || "";
      const removeStatus = await remove_msg(incomingMessage, res);
      const message = {
        body: ` We're here to help! 💬👍`,
        preview_url: false,
      };
      await wa.messages.text(message, recipientPhone);
      return;
    }
    return;
  } catch (error) {
    console.error(error);
    return res.sendStatus(200);
  }
};
export { mainflow };

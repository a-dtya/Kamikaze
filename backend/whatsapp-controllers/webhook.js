import { mainflow } from "./main.js";



const webhookget = async (req, res) => {
    const VERIFY_TOKEN = "testing";
  
    let mode = req.query["hub.mode"];
    let token = req.query["hub.verify_token"];
    let challenge = req.query["hub.challenge"];
    console.log(token);
  
    if (!mode || !token) {
      return res.status(403).send({ error: "Missing mode or token" });
    }
  
    if (mode === "subscribe" && token === VERIFY_TOKEN) {
      console.log("WEBHOOK_VERIFIED");
      res.setHeader("Content-Type", "text/plain");
      res.send(challenge);
    } else {
      // Responds with '403 Forbidden' if verify tokens do not match
      return res.sendStatus(403);
    }
  };
  
  const webhookpost = async (req, res) => {
    try {
      console.log("yesssss");
      //console.log(req);
      await mainflow(req,res);
      console.log("exit");
  
      return res.sendStatus(200);
    } catch (error) {
      console.error(error);
      return res.sendStatus(200);
    }
  };
  
  
  const remove_msg = async (incomingMessage, res) => {
      const timestamp_str = incomingMessage.timestamp;
      console.log("timestamp_str", timestamp_str);
      const timestamp = new Date(parseInt(timestamp_str) * 1000); 
      const current_utc_time = new Date();
      const time_difference = current_utc_time - timestamp;
      const one_minute = 1 * 60 * 1000; 
      if (time_difference > one_minute) {
        console.log("remove msg", time_difference);
        return "exit";
      }
    
      return "proceed";
    };
  export { webhookget, webhookpost, remove_msg };  
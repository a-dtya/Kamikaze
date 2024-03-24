import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import { webhookget, webhookpost } from "./whatsapp-controllers/webhook.js";
import { getNurtitionalValue } from "./utils/nutrigpt.js";


dotenv.config();

const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.use(
  cors({
    origin: ["*"],
  })
);
app.get("/", (req, res) => {
    res.send("Hello Boys!");
  });

  app.post("/webhook", webhookpost);
  app.get("/webhook", webhookget);

//   app.post('/analyze-image', async (req, res) => {
//     try {
//         // Expecting a body like { "url": "http://example.com/image.jpg" }
//         const { url } = req.body;
//         if (!url) {
//             return res.status(400).send({ error: "URL is required" });
//         }

//         // Call your function with the URL
//         const nutritionalValue = await extractPdfText(url);
        
//         // Send back the result
//         res.json(nutritionalValue);
//     } catch (error) {
//         console.error(error);
//         res.status(500).send({ error: error.message });
//     }
// });
  
  app.listen(process.env.PORT, () => {
    console.log(`Example app listening at http://localhost:${process.env.PORT}`);
  });


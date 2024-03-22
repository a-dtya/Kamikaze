import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import { webhookget, webhookpost } from "./whatsapp-controllers/webhook.js";


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
  
  app.listen(process.env.PORT, () => {
    console.log(`Example app listening at http://localhost:${process.env.PORT}`);
  });


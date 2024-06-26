import { wa, whatsapp1 } from "../config.js";
import { db } from "../utils/db.js";
import {
  extractPdfContent,
  sendGetRequest,
  uploadMediaToS3,
} from "../utils/imagestorage.js";
import { logFoodEntryAndReportStatus } from "../utils/logmeals.js";
import { getNurtitionalValue } from "../utils/nutrigpt.js";
import { getTodayNutritionStatusMessage } from "../utils/nutristats.js";
import {
  downloadPdfFromS3,
  extractTextFromPdfBuffer,
} from "../utils/report.js";
import { symptomquery } from "../utils/symptomchecker.js";

import { remove_msg } from "./webhook.js";

const mainflow = async (req, res) => {
  try {
    let body = whatsapp1.parseMessage(req.body);

    if (body?.isMessage) {
      let businessId = body.WABA_ID;
      let incomingMessage = body.message;
      let recipientPhone = incomingMessage.from.phone;
      let username = incomingMessage.from.name;
      let typeOfMsg = incomingMessage.type;
      console.log("incomingMessage", incomingMessage);

      let msg = incomingMessage.text?.body || "";

      const removeStatus = await remove_msg(incomingMessage, res);

      if (removeStatus === "exit") {
        return "removed";
      }
      let user = await db.user.findUnique({
        where: {
          phone: recipientPhone,
        },
      });
      if (user) {
        console.log("user exists");
      }
      if (!user) {
        user = await db.user.create({
          data: {
            phone: recipientPhone,
            name: username,
          },
        });
      }
      console.log("user", user);
      //uploading image
      if (
        typeOfMsg === "media_message" &&
        incomingMessage.image.mime_type === "image/jpeg"
      ) {
        // const message = {
        //   body: `Image received successfully👍, processing the image...`,
        //   preview_url: false,
        // };
        // await wa.messages.text(message, incomingMessage.from.phone);

        const message1 = {
          body: `Please hang tight! We're processing your meal image... 🔄📷 In a moment, you'll receive the nutritional values like calories, proteins, carbs, and fats`,
          preview_url: false,
        };
        await wa.messages.text(message1, incomingMessage.from.phone);

        const imageUrl = await sendGetRequest(incomingMessage.image.id);
        console.log("imageUrl", imageUrl);
        const nutitionalvalue = await getNurtitionalValue(imageUrl);

        const { nutrientMsg, statusMsg } = await logFoodEntryAndReportStatus(
          user.id,
          nutitionalvalue,
          imageUrl
        );

        const message2 = {
          body: nutrientMsg,
          preview_url: false,
        };
        await wa.messages.text(message2, incomingMessage.from.phone);
        const message3 = {
          body: statusMsg,
          preview_url: false,
        };
        await wa.messages.text(message3, incomingMessage.from.phone);
        console.log("nutitionalvalue", nutitionalvalue.fooditem);
        console.log("url", imageUrl);

        return "done";
      }
      if (incomingMessage.document?.mime_type === "application/pdf") {
        const imageUrl = await sendGetRequest(incomingMessage.document.id);
        const message1 = {
          body: ` Thank you for sending the document, we will process and give personalized recommendations based on the report and daily tips to improve your health.`,
          preview_url: false,
        };
        await wa.messages.text(message1, incomingMessage.from.phone);
        // const pdfBuffer = await downloadPdfFromS3(process.env.PUBLIC_S3_BUCKET_NAME,key);
        // console.log("pdfBuffer", pdfBuffer);
        //          const response = await extractPdfContent(`./downloads/${key}`)
        // console.log("response",response);
        // const bloodreportdata = await extractPdfText(url);
        //  const data = await extractDataFromPdf(pdfBuffer);
        // const response = extractTextFromPdfData(pdfBuffer);
        // const response = await extractTextFromPdfBuffer(pdfBuffer);
        // console.log("data", response);
      }
      //setting calorie goal
      if (
        typeOfMsg === "radio_button_message" &&
        incomingMessage.interactive.type === "list_reply" &&
        incomingMessage.interactive.list_reply.id.includes("sett_calorie")
      ) {
        const prefix = "sett_calorie_";
        const goalId = incomingMessage.interactive.list_reply.id;
        const calorieGoal = parseInt(goalId.substring(prefix.length), 10);
        const dailyGoal = await db.dailyGoal.create({
          data: {
            userId: user.id,
            calorieGoal: calorieGoal,
            date: new Date(),
          },
        });
        const message = {
          body: `Daily Calorie Goal Set to ${calorieGoal} 🎯✅`,
          preview_url: false,
        };
        await wa.messages.text(message, incomingMessage.from.phone);
        return "done";
      }
      //set daily calorie goal options
      if (
        typeOfMsg === "radio_button_message" &&
        incomingMessage.interactive.type === "list_reply" &&
        incomingMessage.interactive.list_reply.id.includes("set_calorie_goal")
      ) {
        const list_message2 = {
          type: "list",

          body: {
            text: "Set your daily calorie goal",
          },

          action: {
            button: "Select a value",
            sections: [
              {
                title: "SECTION_1_TITLE",
                rows: [
                  {
                    id: "sett_calorie_500",
                    title: "500",
                    description: "Set your daily calorie goal to 500",
                  },
                  {
                    id: "sett_calorie_1000",
                    title: "1000",
                    description: "Set your daily calorie goal to 1000",
                  },
                  {
                    id: "sett_calorie_1500",
                    title: "1500",
                    description: "Set your daily calorie goal to 1500",
                  },

                  {
                    id: "sett_calorie_2000",
                    title: "2000",
                    description: "Set your daily calorie goal to 2000",
                  },
                ],
              },
            ],
          },
        };
        await wa.messages.interactive(
          list_message2,
          incomingMessage.from.phone
        );
        return "done";
      }
      //   if (
      //     typeOfMsg === "radio_button_message" &&
      //     incomingMessage.interactive.type === "list_reply" &&
      //     incomingMessage.interactive.list_reply.id.includes("Blood_report")
      //   ) {
      //     const message = {
      //       body: `Please send the document of the blood report`,
      //       preview_url: false,
      //     };

      //     await wa.messages.text(message, recipientPhone);

      //     return "done";
      //   }
      //nutrition status
      if (
        typeOfMsg === "radio_button_message" &&
        incomingMessage.interactive.type === "list_reply" &&
        incomingMessage.interactive.list_reply.id.includes(
          "view_nutition_status"
        )
      ) {
        const body = await getTodayNutritionStatusMessage(user.id);

        const message = {
          body: body,
          preview_url: false,
        };

        await wa.messages.text(message, incomingMessage.from.phone);

        return "done";
      }

      if (
        typeOfMsg === "radio_button_message" &&
        incomingMessage.interactive.type === "list_reply" &&
        incomingMessage.interactive.list_reply.id.includes("calorietracking")
      ) {
        const message = {
          body: "Please Send an Image of Your Meal 🍽️📸",
          preview_url: false,
        };

        await wa.messages.text(message, recipientPhone);

        return "done";
      }
      if (
        typeOfMsg === "radio_button_message" &&
        incomingMessage.interactive.type === "list_reply" &&
        incomingMessage.interactive.list_reply.id.includes("symptomchecker")
      ) {
        await db.user.update({
          where: {
            phone: recipientPhone,
          },
          data: {
            currentservice: "symptomchecker",
          },
        });
        const message = {
          body: "Please Describe Your Symptoms in Detail 📝💬, Mentioning All the Difficulties You're Experiencing.",
          preview_url: false,
        };
        await wa.messages.text(message, recipientPhone);
        return "done";
      }
      if (
        incomingMessage.text &&
        incomingMessage.text.hasOwnProperty("body") &&
        incomingMessage.text.body !== "Hi" &&
        user.currentservice === "symptomchecker"
      ) {
        const response = await symptomquery(incomingMessage.text.body);
        console.log("response", response);

        const message1 = {
          body: response,
          preview_url: false,
        };
        await wa.messages.text(message1, recipientPhone);

        await db.user.update({
          where: {
            phone: recipientPhone,
          },
          data: {
            currentservice: "greet",
          },
        });

        const message = {
          body: `Type Exit to return to main menu`,
          preview_url: false,
        };
        await wa.messages.text(message, recipientPhone);

        return "done";
      }

      if (
        (incomingMessage.text &&
          incomingMessage.text.hasOwnProperty("body") &&
          incomingMessage.text.body === "Hi") ||
        incomingMessage.text.body === "Exit"
      ) {
        console.log("inside hi");
        await db.user.update({
          where: {
            phone: recipientPhone,
          },
          data: {
            currentservice: "greet",
          },
        });
        const list_message1 = {
          type: "list",

          body: {
            text: "Choose Your Health Action ",
          },

          action: {
            button: "Pick Your Health Features ",
            sections: [
              {
                title: "SECTION_1_TITLE",
                rows: [
                  {
                    id: "calorietracking",
                    title: "Update Calorie Intake ",

                    description: "Input Your Calorie Intake ",
                  },
                  {
                    id: "set_calorie_goal",
                    title: "Set Your Calorie Goal ",
                    description: "Set Your Daily Calorie Goal ",
                  },
                  {
                    id: "symptomchecker",
                    title: "Symptom Checker ",
                    description: "Check Your Symptoms ",
                  },

                  {
                    id: "view_nutition_status",
                    title: "View Nutrition Status ",
                    description: "Today's Nutrition Status ",
                  },
                ],
              },
            ],
          },
        };
        const list_message = {
            type: "list",
  

        body: {
            text: "Choose Your Health Action 🌈👩‍⚕️",
          },

          action: {
            button: "Pick Health Features",
            sections: [
              {
                title: "SECTION_1_TITLE",
                rows: [
                  {
                    id: "calorietracking",
                    title: "Update Calorie Intake 🍽️✨",
                    description: "Input Your Calorie Intake 📝🔢",
                  },
                  {
                    id: "symptomchecker",
                    title: "Symptom Checker🩺🔍 ",
                    description: "Check Your Symptoms🤒🔎 ",
                  },
                  
                  {
                    id: "set_calorie_goal",
                    title: "Set Your Calorie Goal 🎯🍏",
                    description: "Set Your Daily Calorie Goal 📅🎯",
                  },

                  {
                    id: "view_nutition_status",
                    title: "View Nutrition Status🍎💪",
                    description: "Today's Nutrition Status 🌟📊",
                  },
                ],
              },
            ],
          },
        };
        console.log("before interactive");
        await wa.messages.interactive(
          list_message,
          incomingMessage.from.phone
        );
        console.log("after interactive");
        return "done";
      }

      return "done";
    }
  } catch (error) {
    console.log("error", error);
    return "error";
  }
};

export { mainflow };

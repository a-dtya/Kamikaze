import { openai, s3 } from "../config.js";
import dotenv from "dotenv";
dotenv.config();
import axios from "axios";
import fetch from 'node-fetch';

import { GetObjectCommand } from "@aws-sdk/client-s3";
// import pdfParse from 'pdf-parse';

async function downloadPdfFromS3(bucketName, fileKey) {
  const params = {
    Bucket: bucketName,
    Key: fileKey,
  };

  try {
    const uploadResult = await s3.send(
      new GetObjectCommand({
        Bucket: process.env.PUBLIC_S3_BUCKET_NAME, // Your bucket name
        Key: fileKey,
      })
    );
    const uploadresult = await uploadResult.Body.transformToString;
    console.log("uploadResult", uploadresult);
    const uploadResultbyte = await uploadResult.Body.transformToByteArray;
    console.log("uploadResultbyte", uploadResultbyte);
    return "done";
  } catch (error) {
    console.error("Error downloading PDF from S3:", error);
    throw error;
  }
}

const extractPdfText = async (pdfUrl) => {
  const apiUrl = process.env.PDF_API_URL;
  const apyToken = process.env.PDF;
  try {
    const options = {
      method: "POST",
      headers: {
        "apy-token": apyToken,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ url: pdfUrl }),
    };

    const response = await fetch(apiUrl, options);
    console.log("response1", response.data);
    const jsonResponse = await response.json();
    console.log("response", jsonResponse);

    return jsonResponse;

    const pdfText = jsonResponse.data;
    console.log("pdfText", pdfText);
  } catch (error) {
    console.error("Error extracting text from PDF:", error);
  }
};
//     // const data = {}
//     //     url: pdfUrl,
//     //   };
//     //   //

//     //     const res = await axios.post(
//     //       "https://learnit-ai-backend.onrender.com/extract-pdf",
//     //       data
//     //     );
//     //     console.log('res',res);

//     return "done";
//   } catch (error) {
//     console.error(error);
//     throw new Error('PDF extraction and completion generation failed');
//   }
// };
// Function to extract text from PDF data
// const extractTextFromPdfData = async (pdfData) => {
//     try {
//       const data = await pdfParse(pdfData);
//       return data.text; // Contains the extracted text
//     } catch (error) {
//       console.error("Error extracting data from PDF:", error);
//       throw error;
//     }
//   };
async function extractTextFromPdfBuffer(pdfBuffer) {
  const pdfDoc = await PDFDocument.load(pdfBuffer);
  const text = [];

  for (const page of pdfDoc.getPages()) {
    // This method extracts text from the page.
    // Note: The effectiveness can vary based on the PDF's structure.
    const pageText = await page.getTextContent();
    text.push(pageText);
  }
  console.log(text);

  return text.join(" ");
}

const dietJsonData = {
  weeklyMealPlan: [
    {
      day: "Monday",
      meals: {
        breakfast: "Oatmeal with sliced bananas and honey",
        lunch: "Grilled chicken salad with mixed greens and vinaigrette",
        dinner: "Baked salmon with quinoa and steamed broccoli",
      },
    },
    {
      day: "Tuesday",
      meals: {
        breakfast: "Greek yogurt with mixed berries and granola",
        lunch: "Turkey and avocado wrap with side salad",
        dinner: "Stir-fried tofu with vegetables and brown rice",
      },
    },
    {
      day: "Wednesday",
      meals: {
        breakfast: "Scrambled eggs with spinach and whole-grain toast",
        lunch: "Quinoa salad with chickpeas, cucumbers, and feta cheese",
        dinner: "Beef stir-fry with bell peppers and noodles",
      },
    },
    {
      day: "Thursday",
      meals: {
        breakfast:
          "Smoothie with spinach, banana, peanut butter, and almond milk",
        lunch: "Lentil soup with whole-grain roll",
        dinner: "Roasted chicken with sweet potatoes and green beans",
      },
    },
    {
      day: "Friday",
      meals: {
        breakfast: "Whole-grain waffles with strawberries and maple syrup",
        lunch: "Grilled fish tacos with cabbage slaw",
        dinner: "Pasta with tomato sauce and meatballs",
      },
    },
    {
      day: "Saturday",
      meals: {
        breakfast: "Pancakes with blueberries and whipped cream",
        lunch: "Chicken Caesar salad",
        dinner: "Homemade pizza with mozzarella, tomatoes, and basil",
      },
    },
    {
      day: "Sunday",
      meals: {
        breakfast: "French toast with powdered sugar and raspberries",
        lunch: "Vegetable stir-fry with tofu and jasmine rice",
        dinner: "Lamb curry with basmati rice and naan bread",
      },
    },
  ],
};

async function generateDiet(extractedData) {
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4-turbo-preview",
      messages: [
        {
          role: "system",
          content:
            "You are a dietitian helping a client plan their meals for the week considering their blood report data that will be provided.",
        },
        {
          role: "user",
          content: `Hi, I have a client who needs a diet plan based on their blood report data. Here is the data:\n${extractedData}\n
              the given ouput should be strictly of this json format ${dietJsonData} and nothing else should be given as output.dont make it as string remove all the \\n and \\  from the output. `,
        },
      ],
    });

    console.log(response);

    return "done";
  } catch (error) {}
}

export {
  downloadPdfFromS3,
  extractTextFromPdfBuffer,
  generateDiet,
  extractPdfText,
};

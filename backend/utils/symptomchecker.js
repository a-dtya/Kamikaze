import axios from "axios";
import { openai } from "../config.js";
const apikey = process.env.HUGGING_FACE_KEY;
async function symptomquery(input) {
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4-turbo-preview",
      messages: [
        {
          role: "system",
          content:
            "You are a doctor diagnosing a patient based on their symptoms. Provide a diagnosis and treatment plan based on the symptoms provided.",
        },
        {
          role: "user",
          content: `Patient symptoms: ${input} \n Provide a diagnosis and treatment plan based on the symptoms.Do not provide any other information.Tell what may be the possible disease and which type of doctor to consult.The output shouldnt contain text with ** or any other special characters.Insert in emojis wherever necessary for a better understanding of user.Make the output as beautiful as possible by formatting the text and adding visual emojis for a poppy look.`,
        },
      ],
    });

    console.log(response.choices[0].message.content);

    return response.choices[0].message.content;
  } catch (error) {
    console.error("Error querying the API:", error.data);
    throw error; // Rethrow the error to be handled by the caller
  }
}

export { symptomquery };

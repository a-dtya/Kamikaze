import { openai } from '../config.js';

const jsonData = `{
    "fooditem": "Chicken Breast",
    "protein": 31,
    "fats": 3.6,
    "carbs": 0,
    "calories": 165
}`;

async function getNurtitionalValue(url, maxRetries = 5) {
    let attempts = 0;

    while (attempts < maxRetries) {
        try {
            const response = await openai.chat.completions.create({
                model: "gpt-4-vision-preview",
                messages: [
                    {
                        role: "user",
                        content: [
                            {
                                type: "text",
                                text: `You will be getting an image of a food item dont give anything else as answer just give the amount of protien carbs and fat in that food item along with the approximate calories in the fooditem .the given ouput should be strictly of this json format ${jsonData} and nothing else should be given as output.dont make it as string remove all the \\n and \\  from the output. `
                            },
                            {
                                type: "image_url",
                                image_url: {
                                    url: url
                                }
                            }
                        ]
                    }
                ],
                max_tokens: 2000,
            });

            const generatedContent = response.choices[0].message.content;
            // Remove newline characters and backslashes from the content
            const cleanedContent = generatedContent.replace(/\\n/g, '').replace(/\\/g, '');

            // Parse the cleaned content string into a JavaScript object
            const parsedContent = JSON.parse(cleanedContent);

            console.log("Generated Content:", parsedContent);
            return parsedContent; // Success: Return the parsed content
        } catch (error) {
            console.error(`Attempt ${attempts + 1} failed:`, error);

            // Check if the error is "BadRequestError: 400 Invalid image"
            if (error.message.includes("400 Invalid image")) {
                attempts++;
                // Optionally: wait before retrying
                await new Promise(resolve => setTimeout(resolve, 1000 * attempts));
                continue; // Retry
            } else {
                // For other errors, rethrow them immediately
                throw error;
            }
        }
    }

    // All retries exhausted
    throw new Error(`Failed to process image after ${maxRetries} attempts.`);
}

export { getNurtitionalValue };

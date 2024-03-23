
import { NextResponse } from 'next/server';
import OpenAI from 'openai';

const openai = new OpenAI({apiKey: process.env.OPENAI_API_KEY}); // Ensure secure storage of API key

 export async function POST(req: Request, res: Response) {
  const dietJsonData1 = {
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

  try {
    const {dietJsonData}  = await req.json();
    console.log("REQUEST",dietJsonData)

   
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
          content: `Hi, I have a client who needs a diet plan based on bmi and health data. Here is the data:\n${dietJsonData}\n
              the given ouput should be strictly of this json format and in the json format output create a json object called diet plan which gives the entire weeks dietplan based on an indian cuisine and nothing else should be given as output.dont make it as string remove all the \\n and \\  from the output. `,
        },
      ],
    });

    // Validate response format based on dietJsonData structure (if possible)
    // ... (implementation depends on the specific structure of dietJsonData)

    // Remove unnecessary characters from response if validation succeeds
    const generatedContent = response.choices[0].message.content;
    // Remove newline characters and backslashes from the content
    const cleanedContent = generatedContent?.replace(/\\n/g, '').replace(/\\/g, '');

    // Parse the cleaned content string into a JavaScript object
    const parsedContent = JSON.parse(cleanedContent || '');
// Use parsedContent here


            // Parse the cleaned content string into a JavaScript object
            

    return NextResponse.json({parsedContent})
  } catch (error) {
    console.error(error);
   
  }
}




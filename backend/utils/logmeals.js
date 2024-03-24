import { db } from "./db.js";

async function logFoodEntryAndReportStatus(userId, foodItem, image_url) {
  try {
    // Step 1: Insert the food item into the FoodEntry model
    const newFoodEntry = await db.foodEntry.create({
      data: {
        userId: userId,
        name: foodItem.fooditem,
        calories: foodItem.calories,
        fats: foodItem.fats,
        protein: foodItem.protein,
        carbohydrates: foodItem.carbs,
        imageUrl: image_url,
      },
    });

    // Step 2: Send a message with nutrient and calorie information
    const nutrientMsg = `🍽️ Logged Meal: ${foodItem.fooditem}\n +
      🔥 Calories: ${foodItem.calories}, 🥩 Protein: ${foodItem.protein}g,\n +
      🥑 Fats: ${foodItem.fats}g, 🍞 Carbs: ${foodItem.carbs}g`;
    console.log(nutrientMsg);

    // Step 3: Fetch today's total calorie intake and the user's daily calorie goal
    const todayStart = new Date();
    todayStart.setUTCHours(0, 0, 0, 0);

    const [totalCaloriesToday, dailyGoal] = await Promise.all([
      db.foodEntry.aggregate({
        _sum: {
          calories: true,
        },
        where: {
          userId: userId,
          entryDate: {
            gte: todayStart,
          },
        },
      }),
      db.dailyGoal.findFirst({
        where: {
          userId: userId,
        },
      }),
    ]);

    const totalCalories = totalCaloriesToday._sum.calories || 0;
    const calorieGoal = dailyGoal?.calorieGoal || 0; // Default to 0 if not set
    console.log(
      `Total calories today: ${totalCalories}, Daily goal: ${calorieGoal}`
    );

    // Step 4: Calculate remaining or exceeded calories
    const remainingCalories = calorieGoal - totalCalories;
    let statusMsg = "";

    if (remainingCalories >= 0) {
      statusMsg = `🌟 You have ${remainingCalories} calories left for today! Keep up the great work! 💪`;
    } else {
      statusMsg = `Oops! You've exceeded your calorie goal by ${-remainingCalories} calories today. 🚀 Let's plan for a balanced tomorrow! 🍏`;
    }

    // Step 5: Send another message about the calorie intake status
    console.log(statusMsg);

    return { nutrientMsg, statusMsg };
  } catch (error) {
    console.error("Error:", error);
    throw error; // Rethrow or handle error as needed
  }
}

export { logFoodEntryAndReportStatus };

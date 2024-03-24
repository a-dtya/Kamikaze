import { db } from "./db.js";

async function getTodayNutritionStatusMessage(userId) {
  const todayStart = new Date();
  todayStart.setUTCHours(0, 0, 0, 0);
  console.log(todayStart);
  const todayEnd = new Date();
  todayEnd.setUTCHours(23, 59, 59, 999);
  console.log(todayEnd);

  try {
    const foodEntries = await db.foodEntry.findMany({
      where: {
        userId: userId,
        entryDate: {
          gte: todayStart,
          lte: todayEnd,
        },
      },
    });

    if (foodEntries.length === 0) {
      return "It looks like you haven't logged any food entries for today. 🗒️ Let's get started on tracking your meals! 🥗";
    }

    let totalCalories = 0;
    let totalFats = 0;
    let totalProtein = 0;
    let totalCarbohydrates = 0;

    foodEntries.forEach((entry) => {
      totalCalories += entry.calories;
      totalFats += entry.fats || 0;
      totalProtein += entry.protein || 0;
      totalCarbohydrates += entry.carbohydrates || 0;
    });

    let message = "✨ Today's Nutrition Summary: ✨\n";
    message += `🔥 Calories: ${totalCalories}\n`;
    message += `🥑 Fats: ${totalFats.toFixed(2)}g\n`;
    message += `🍖 Protein: ${totalProtein.toFixed(2)}g\n`;
    message += `🍞 Carbohydrates: ${totalCarbohydrates.toFixed(2)}g`;
    

    return message;
  } catch (error) {
    console.error("Error fetching today's food entries:", error);
    return "An error occurred while fetching your nutrition status for today.";
  }
}

export { getTodayNutritionStatusMessage };

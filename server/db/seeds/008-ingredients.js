/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("ingredients").del();
  await knex("ingredients").insert([
    { id: 1, foodId: 1, ingredientId: 396, quantity: 2, unit: "合" },
    { id: 2, foodId: 2, ingredientId: 390, quantity: 1, unit: "大さじ" },
    { id: 3, foodId: 2, ingredientId: 394, quantity: 2, unit: "大さじ" },
    { id: 4, foodId: 2, ingredientId: 314, quantity: 2, unit: "大さじ" },
    { id: 5, foodId: 2, ingredientId: 315, quantity: 1, unit: "大さじ" },
    { id: 6, foodId: 2, ingredientId: 521, quantity: 1, unit: "大さじ" },
    { id: 7, foodId: 2, ingredientId: 187, quantity: 300, unit: "g" },
    { id: 8, foodId: 2, ingredientId: 43, quantity: 150, unit: "g" },
    { id: 9, foodId: 3, ingredientId: 189, quantity: 200, unit: "g" },
    { id: 10, foodId: 3, ingredientId: 47, quantity: 160, unit: "g" },
    { id: 11, foodId: 3, ingredientId: 54, quantity: 100, unit: "g" },
    { id: 12, foodId: 3, ingredientId: 316, quantity: 1, unit: "大さじ" },
    { id: 13, foodId: 3, ingredientId: 323, quantity: 1, unit: "大さじ" },
    { id: 14, foodId: 3, ingredientId: 315, quantity: 1, unit: "大さじ" },
    { id: 15, foodId: 3, ingredientId: 395, quantity: 1, unit: "大さじ" },
    { id: 16, foodId: 3, ingredientId: 318, quantity: 1, unit: "少々" },
    { id: 17, foodId: 3, ingredientId: 321, quantity: 1, unit: "少々" },
    { id: 18, foodId: 3, ingredientId: 521, quantity: 1, unit: "小さじ" },
    { id: 19, foodId: 7, ingredientId: 58, quantity: 150, unit: "g" },
    { id: 20, foodId: 7, ingredientId: 519, quantity: 10, unit: "g" },
    { id: 21, foodId: 7, ingredientId: 375, quantity: 1, unit: "大さじ" },
    { id: 22, foodId: 7, ingredientId: 314, quantity: 1, unit: "小さじ" },
    { id: 23, foodId: 7, ingredientId: 568, quantity: 1, unit: "大さじ" },
    { id: 24, foodId: 8, ingredientId: 74, quantity: 0.5, unit: "個" },
    { id: 25, foodId: 8, ingredientId: 569, quantity: 5, unit: "個" },
    { id: 26, foodId: 8, ingredientId: 314, quantity: 0.5, unit: "大さじ" },
    { id: 27, foodId: 8, ingredientId: 326, quantity: 1, unit: "小さじ" },
    { id: 28, foodId: 12, ingredientId: 67, quantity: 0.25, unit: "個" },
    { id: 29, foodId: 12, ingredientId: 564, quantity: 4, unit: "g" },
    { id: 30, foodId: 12, ingredientId: 570, quantity: 3, unit: "大さじ" },
    { id: 31, foodId: 12, ingredientId: 316, quantity: 1, unit: "大さじ" },
    { id: 32, foodId: 13, ingredientId: 49, quantity: 45, unit: "g" },
    { id: 33, foodId: 13, ingredientId: 73, quantity: 0.25, unit: "パック" },
    { id: 34, foodId: 13, ingredientId: 575, quantity: 0.5, unit: "小さじ" },
    { id: 35, foodId: 13, ingredientId: 106, quantity: 1, unit: "カップ" },
    { id: 36, foodId: 13, ingredientId: 314, quantity: 0.5, unit: "小さじ" },
    { id: 37, foodId: 13, ingredientId: 321, quantity: 1, unit: "少々" },
    { id: 38, foodId: 13, ingredientId: 568, quantity: 0.5, unit: "大さじ" },
  ]);
};

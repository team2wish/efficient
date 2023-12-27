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
    { id: 39, foodId: 11, ingredientId: 43, quantity: 150, unit: "g" },
    { id: 40, foodId: 11, ingredientId: 576, quantity: 1, unit: "適量" },
    { id: 41, foodId: 11, ingredientId: 570, quantity: 2, unit: "大さじ" },
    { id: 42, foodId: 11, ingredientId: 521, quantity: 2, unit: "大さじ" },
    { id: 43, foodId: 11, ingredientId: 320, quantity: 1, unit: "小さじ" },
    { id: 44, foodId: 11, ingredientId: 319, quantity: 1, unit: "小さじ" },
    { id: 45, foodId: 11, ingredientId: 577, quantity: 1, unit: "小さじ" },
    { id: 46, foodId: 10, ingredientId: 80, quantity: 100, unit: "g" },
    { id: 47, foodId: 10, ingredientId: 578, quantity: 2, unit: "大さじ" },
    { id: 48, foodId: 9, ingredientId: 120, quantity: 150, unit: "g" },
    { id: 49, foodId: 9, ingredientId: 86, quantity: 100, unit: "g" },
    { id: 50, foodId: 9, ingredientId: 314, quantity: 2, unit: "大さじ" },
    { id: 51, foodId: 9, ingredientId: 326, quantity: 1, unit: "小さじ" },
    { id: 52, foodId: 5, ingredientId: 188, quantity: 200, unit: "g" },
    { id: 53, foodId: 5, ingredientId: 579, quantity: 100, unit: "g" },
    { id: 54, foodId: 5, ingredientId: 580, quantity: 0.5, unit: "本" },
    { id: 55, foodId: 5, ingredientId: 53, quantity: 50, unit: "g" },
    { id: 56, foodId: 5, ingredientId: 581, quantity: 3, unit: "枚" },
    { id: 57, foodId: 5, ingredientId: 582, quantity: 0.5, unit: "枚" },
    { id: 58, foodId: 5, ingredientId: 583, quantity: 1, unit: "大さじ" },
    { id: 59, foodId: 5, ingredientId: 314, quantity: 2, unit: "大さじ" },
    { id: 60, foodId: 5, ingredientId: 395, quantity: 2, unit: "大さじ" },
    { id: 61, foodId: 5, ingredientId: 319, quantity: 1, unit: "大さじ" },
    { id: 62, foodId: 6, ingredientId: 188, quantity: 200, unit: "g" },
    { id: 63, foodId: 6, ingredientId: 314, quantity: 1, unit: "大さじ" },
    { id: 64, foodId: 6, ingredientId: 315, quantity: 1, unit: "大さじ" },
    { id: 65, foodId: 6, ingredientId: 394, quantity: 0.5, unit: "小さじ" },
    { id: 66, foodId: 6, ingredientId: 577, quantity: 0.5, unit: "小さじ" },
    { id: 67, foodId: 6, ingredientId: 321, quantity: 1, unit: "少々" },
    { id: 68, foodId: 6, ingredientId: 584, quantity: 4, unit: "大さじ" },
    { id: 69, foodId: 6, ingredientId: 583, quantity: 1, unit: "適量" },
    { id: 70, foodId: 4, ingredientId: 560, quantity: 1, unit: "個" },
    { id: 71, foodId: 4, ingredientId: 388, quantity: 1, unit: "大さじ" },
    { id: 72, foodId: 4, ingredientId: 200, quantity: 350, unit: "g" },
    { id: 73, foodId: 4, ingredientId: 584, quantity: 3, unit: "大さじ" },
    { id: 74, foodId: 4, ingredientId: 583, quantity: 2, unit: "大さじ" },
    { id: 75, foodId: 4, ingredientId: 585, quantity: 2, unit: "本" },
    { id: 76, foodId: 4, ingredientId: 318, quantity: 1, unit: "少々" },
    { id: 77, foodId: 4, ingredientId: 321, quantity: 1, unit: "少々" },
    { id: 78, foodId: 4, ingredientId: 315, quantity: 2, unit: "小さじ" },
    { id: 79, foodId: 4, ingredientId: 324, quantity: 2, unit: "大さじ" },
    { id: 80, foodId: 4, ingredientId: 320, quantity: 2, unit: "大さじ" },
    { id: 81, foodId: 4, ingredientId: 319, quantity: 1, unit: "小さじ" },
  ]);
};

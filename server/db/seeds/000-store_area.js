/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.seed = function (knex) {
  return knex("store_area")
    .del()
    .then(function () {
      return knex("store_area").insert([
        { id: 1, name: "青果" },
        { id: 2, name: "野菜" },
        { id: 3, name: "豆腐" },
        { id: 4, name: "魚" },
        { id: 5, name: "肉" },
        { id: 6, name: "麺類" },
        { id: 7, name: "調味料" },
        { id: 8, name: "米" },
        { id: 9, name: "乳製品" },
        { id: 10, name: "卵" },
        { id: 11, name: "パン類" },
        { id: 12, name: "その他" },
      ]);
    });
};

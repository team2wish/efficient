/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("menus", function (table) {
    table.increments("id").primary();
    table.integer("userId").unsigned().references("id").inTable("users");
    table.integer("foodId").unsigned().references("id").inTable("foods");
    table.date("startWeek");
    table.date("date");
    table.integer("timingFlag");
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("menus");
};

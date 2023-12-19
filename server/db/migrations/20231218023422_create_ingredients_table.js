/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("ingredients", function (table) {
    table.increments("id").primary();
    table.integer("foodId").unsigned().references("id").inTable("foods");
    table
      .integer("ingredientId")
      .unsigned()
      .references("id")
      .inTable("ingredientList");
    table.float("quantity", 8, 2);
    table.string("unit");
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("ingredients");
};

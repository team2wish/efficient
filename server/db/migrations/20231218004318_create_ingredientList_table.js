/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("ingredientList", function (table) {
    table.increments("id").primary();
    table.string("name").notNullable();
    table
      .integer("genreId")
      .notNullable()
      .unsigned()
      .references("id")
      .inTable("storeArea");
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("ingredientList");
};

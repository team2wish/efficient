/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("recipes", function (table) {
    table.increments("id").primary();
    table.integer("foodId").unsigned().references("id").inTable("foods");
    table.string("text").notNullable();
    table.integer("imageId").unsigned().references("id").inTable("images");
    table.integer("kindId").unsigned().references("id").inTable("cookKinds");
    table.integer("workTime");
    table.boolean("canWrap").notNullable();
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("recipes");
};

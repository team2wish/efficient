/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("foods", function (table) {
    table.increments("id").primary();
    table.string("name").notNullable();
    table.boolean("isMain");
    table.boolean("isSoup");
    table.boolean("isRice");
    table
      .integer("categoryId")
      .unsigned()
      .references("id")
      .inTable("categories");
    table.integer("genreId").unsigned().references("id").inTable("storeArea");
    table.boolean("shrimp").defaultTo(false);
    table.boolean("crab").defaultTo(false);
    table.boolean("wheat").defaultTo(false);
    table.boolean("buckwheat_noodles").defaultTo(false);
    table.boolean("egg").defaultTo(false);
    table.boolean("milk").defaultTo(false);
    table.boolean("peanut").defaultTo(false);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("foods");
};

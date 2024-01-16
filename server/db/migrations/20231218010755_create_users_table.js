/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("users", function (table) {
    table.increments("id").primary();
    table.string("userName").notNullable();
    table.string("mail").notNullable();
    table.string("salt");
    table.string("hash");
    table.integer("numOfAdults");
    table.integer("numOfChildren");
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
  return knex.schema.dropTable("users");
};

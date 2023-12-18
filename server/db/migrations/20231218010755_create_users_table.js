/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("users", function (table) {
    table.increments("id").primary();
    table.string("userName");
    table.string("mail").notNullable();
    table.string("salt");
    table.string("hash");
    table.integer("numOfAdults");
    table.integer("numOfChildren");
    table.boolean("shrimp").defaultTo(true);
    table.boolean("crab").defaultTo(true);
    table.boolean("wheat").defaultTo(true);
    table.boolean("buckwheat_noodles").defaultTo(true);
    table.boolean("egg").defaultTo(true);
    table.boolean("milk").defaultTo(true);
    table.boolean("peanut").defaultTo(true);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("users");
};

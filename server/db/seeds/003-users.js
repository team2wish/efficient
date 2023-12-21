/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("users")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("users").insert([
        {
          id: 1,
          userName: "tanachu",
          mail: "test@test",
          salt: "sample",
          hash: "pass",
          numOfAdults: 2,
          numOfChildren: 1,
          shrimp: false,
          crab: false,
          wheat: false,
          buckwheat_noodles: false,
          egg: false,
          milk: false,
          peanut: false,
        },
      ]);
    });
};

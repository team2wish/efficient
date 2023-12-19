const knex = require("knex");
const knexConfig = require("./knexfile");
require("dotenv").config();

const enviroment = process.env.NODE_ENV;
console.log("process.env.NODE_ENV", process.env.NODE_ENV);

module.exports = knex(knexConfig[enviroment]);

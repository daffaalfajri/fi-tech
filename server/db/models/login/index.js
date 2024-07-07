const knexConfig =
  require("../../knexfile")[process.env.NODE_ENV || "development"];
const knex = require("knex")(knexConfig);

function getUserByName(name) {
  return knex("users").where({ name }).first();
}

module.exports = {
  getUserByName,
};

const knexConfig =
  require("../../knexfile")[process.env.NODE_ENV || "development"];
const knex = require("knex")(knexConfig);

function getUsers() {
  return knex("users").select();
}

function getUserById(id) {
  return knex("users").where({ id }).first();
}

function createUser(user) {
  return knex("users").insert(user).returning("*");
}

function updateUser(id, user) {
  return knex("users").where({ id }).update(user).returning("*");
}

function deleteUser(id) {
  return knex("users").where({ id }).del();
}

module.exports = {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};

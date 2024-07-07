const knexConfig =
  require("../../knexfile")[process.env.NODE_ENV || "development"];
const knex = require("knex")(knexConfig);

const getDataChat = () => {
  return knex.select("*").from("barang");
};

module.exports = {
  getDataChat,
};

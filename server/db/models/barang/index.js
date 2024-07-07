const knexConfig =
  require("../../knexfile")[process.env.NODE_ENV || "development"];
const knex = require("knex")(knexConfig);

function getDataBarang() {
  return knex("barang").select();
}

function getDataBarangById(idBarang) {
  return knex("barang").where({ idBarang }).first();
}

function createBarang(barang) {
  return knex("barang")
    .insert({
      Nama: barang.nama,
      Merek: barang.merek,
      BeratBersih: barang.beratBersih,
      Harga: barang.harga,
      gambar: barang.gambar,
    })
    .returning("*");
}

function deleteBarang(idBarang) {
  return knex("barang").where({ idBarang }).del();
}

module.exports = {
  getDataBarang,
  getDataBarangById,
  createBarang,
  deleteBarang,
};

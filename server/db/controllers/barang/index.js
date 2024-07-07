const barangModel = require("../../models/barang");

async function getDataBarang(req, res) {
  try {
    const dataBarang = await barangModel.getDataBarang();
    res.json(dataBarang);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function createBarang(req, res) {
  try {
    const barang = req.body;
    const newBarang = await barangModel.createBarang(barang);
    res.json(newBarang[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function deleteBarang(req, res) {
  try {
    const { idBarang } = req.params;
    const deletedBarang = await barangModel.deleteBarang(idBarang);
    res.json(deletedBarang);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = {
  getDataBarang,
  createBarang,
  deleteBarang,
};

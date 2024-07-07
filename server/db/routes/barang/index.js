const express = require("express");
const router = express.Router();
const barangController = require("../../controllers/barang");

router.get("/api/v2/data-barang", barangController.getDataBarang);
router.post("/api/v2/data-barang", barangController.createBarang);
router.delete("/api/v2/data-barang/:idBarang", barangController.deleteBarang);

module.exports = router;

const express = require("express");
const router = express.Router();
const loginController = require("../../controllers/login");

router.post("/api/v2/login", loginController.loginUser);

module.exports = router;

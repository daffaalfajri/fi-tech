const express = require("express");
const router = express.Router();
const chatController = require("../../controllers/chat");

router.post("/api/v2/data-chat", chatController.handleChatbotRequest);

module.exports = router;

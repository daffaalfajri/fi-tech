const express = require("express");
const router = express.Router();
const userController = require("../../controllers/users");

router.get("/api/v2/users", userController.getUsers);
router.get("/api/v2/users/:id", userController.getUserById);
router.post("/api/v2/users", userController.createUser);
router.put("/api/v2/users/:id", userController.updateUser);
router.delete("/api/v2/users/:id", userController.deleteUser);
router.get("/api/v2/users/login", (req, res) => {
  const userId = req.session.userId; // Assuming user ID is stored in session
  if (!userId) {
    return res.status(401).json({ error: "Unauthorized" });
  }
  userModel
    .getUserById(userId)
    .then((user) => {
      if (user) {
        res.json([user]); // Wrap user in an array to match the expected response format
      } else {
        res.status(404).json({ error: "User not found" });
      }
    })
    .catch((error) => res.status(500).json({ error: error.message }));
});
module.exports = router;

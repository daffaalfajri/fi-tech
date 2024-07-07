const loginModel = require("../../models/login");

const loginController = {
  loginUser: async (req, res) => {
    const { name, password } = req.body;

    if (!name || !password) {
      return res
        .status(400)
        .json({ success: false, error: "Username and password are required" });
    }

    try {
      const user = await loginModel.getUserByName(name);
      if (user && password === user.password) {
        if (!req.session) {
          req.session = {};
        }
        req.session.userId = user.id;
        req.session.username = user.name;
        return res.status(200).json({
          success: true,
          session: req.session,
          username: user.name,
        });
      } else {
        return res
          .status(401)
          .json({ success: false, error: "Invalid username or password" });
      }
    } catch (error) {
      console.error("Database query failed:", error);
      return res
        .status(500)
        .json({ success: false, error: "Database query failed" });
    }
  },
};

module.exports = loginController;

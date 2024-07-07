require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 3080;
const cors = require("cors");
const path = require("path");
const middleware = require("./db/middleware");
const session = require("express-session");
const bodyParser = require("body-parser");
const barangRoutes = require("./db/routes/barang");
const chatRoutes = require("./db/routes/chat");
const userRoutes = require("./db/routes/users");
const loginRoutes = require("./db/routes/login");

app.use(express.json());

const corsOptions = {
  origin: (origin, callback) => {
    if (!origin) {
      callback(null, true);
    } else if (origin === "http://localhost:3000") {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
  methods: ["DELETE", "GET", "PATCH", "POST", "PUT"],
};

// middleware
app.use(cors(corsOptions));
app.use(middleware);
app.use(express.static(path.join(__dirname, "client/public")));
app.use(bodyParser.json());

// rute
app.use(barangRoutes);
app.use(chatRoutes);
app.use(userRoutes);
app.use(loginRoutes);

app.use(
  session({
    secret: "your_secret_key",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false },
  })
);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

module.exports = app;

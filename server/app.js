const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

// import routes
const userRoutes = require("./routes/user");

// app
const app = express();

// DB
mongoose
  .connect(process.env.DATABASE, {})
  .then(() => console.log("DB connected"))
  .catch((err) => console.log("DB Error => ", err));

// routes middleware
app.use("/api", userRoutes);

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

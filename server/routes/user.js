const express = require("express");
const router = express.Router();

const { signup } = require("../controllers/user");

// router.get("/", (req, res) => {
//   res.send("Hello from node haha");
// });

// router.get("/", sayHi);

router.post("/signup", signup);

module.exports = router;

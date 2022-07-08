const express = require("express");
const router = express.Router();

const { sayHi } = require("../controllers/user");

// router.get("/", (req, res) => {
//   res.send("Hello from node haha");
// });

router.get("/", sayHi);

module.exports = router;

const express = require("express");
const router = express.Router();

const { signup } = require("../controllers/user");
const { userSignupValidator } = require("../validator");

// router.get("/", (req, res) => {
//   res.send("Hello from node haha");
// });

// router.get("/", sayHi);

router.post("/signup", userSignupValidator, signup);

module.exports = router;

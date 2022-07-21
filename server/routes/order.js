const express = require("express");
const router = express.Router();

const { requireSignin, isAuth, isAdmin } = require("../controllers/auth");
const { userById } = require("../controllers/user");
const {
  create,
  // listOrders,
  // getStatusValues,
  // orderById,
  // updateOrderStatus
} = require("../controllers/order");

router.post("/order/create/:userId", requireSignin, isAuth, create);

router.param("userId", userById);

module.exports = router;

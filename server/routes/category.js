const express = require("express");
const router = express.Router();

const {
  create,
  // categoryById,
  // read,
  // update,
  // remove,
  // list,
} = require("../controllers/category");

router.post("/category/create", create);

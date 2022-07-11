const mongoose = require("mongoose");
const crypto = require("crypto");
const uuidv1 = require("uuid/v1");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      require: true,
      maxlength: 32,
    },
    email: {
      type: String,
      trim: true,
      require: true,
      unique: true,
    },
    hashed_password: {
      type: String,
      require: true,
    },
    about: {
      type: String,
      trim: true,
      require: true,
      maxlength: 32,
    },
    salt: String,
    role: {
      type: Number,
      default: 0,
    },
    history: {
      type: Array,
      default: [],
    },
  },
  { timestamps: true }
);

// virtual field
// userSchema.virtual('password')

const mongoose = require("mongoose");

const { Schema, model } = mongoose;

const AdminSchema = new Schema({
  email: {
    type: String,
    required: true
  },
  passwordHash: {
    type: String
  }
});

const Admin = model("Admin", AdminSchema);

module.exports = Admin;

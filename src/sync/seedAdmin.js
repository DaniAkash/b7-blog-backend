require("../config/db");
const Admin = require("../models/admin");
const { generateHashSync } = require("../utils/hash");

const seedAdmin = () => {
  const adminUser = new Admin({
    email: "admin@test.com",
    passwordHash: generateHashSync("admin")
  });
  adminUser
    .save()
    .then(console.log)
    .catch(console.log);
};

const clearAdmin = () => {
  Admin.remove({})
    .then(console.log)
    .catch(console.error);
};

// clearAdmin();
seedAdmin();

module.exports = seedAdmin;

const adminTokenValidator = require("../utils/adminTokenManager");

const adminAuth = (req, res, next) => {
  const jwt = req.header("Authorization");
  if (adminTokenValidator(jwt)) {
    next();
  } else {
    res.status(401).send("unauthorized");
  }
};

module.exports = adminAuth;

const jwt = require("jsonwebtoken");

const jwtKey = process.env.JWT_KEY;

exports.adminTokenGenerator = (email = "") => {
  const token = jwt.sign(
    {
      sub: "admin",
      email
    },
    jwtKey,
    {
      expiresIn: "3 hours"
    }
  );
  return token;
};

exports.adminTokenValidator = (token = "") => {
  try {
    return jwt.verify(token, jwtKey);
  } catch (e) {
    console.error(e);
    return false;
  }
};

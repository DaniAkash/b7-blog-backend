const express = require("express");
const Admin = require("../models/admin");
const { compareHash } = require("../utils/hash");
const {
  adminTokenGenerator,
  adminTokenValidator
} = require("../utils/adminTokenManager");

const adminRouter = express.Router();

adminRouter
  .post("/login", async (req, res) => {
    try {
      const { email, password } = req.body;
      const admin = await Admin.findOne({ email }).exec();
      if (admin) {
        const result = await compareHash(password, admin.passwordHash);
        if (result) {
          const jwtToken = adminTokenGenerator({ email });
          res.cookie("jwt", jwtToken); // cookie will not work in another domain
          res.status(200).json({
            status: "Success",
            jwtToken // usually token is not sent back, here sending for the workaround
          });
        } else {
          res.status(400).send("Invalid Request");
        }
      } else {
        res.status(400).send("Invalid Request");
      }
    } catch (e) {
      res.status(500).send("Internal Server Error");
    }
  })
  .get("/isLoggedIn", async (req, res) => {
    // const { jwt = "" } = req.cookies; // use this if using cookies
    const jwt = req.header("Authorization");
    if (adminTokenValidator(jwt)) {
      res.status(200).json({ message: "logged in" });
    } else {
      res.status(401).send("unauthorized");
    }
  });

module.exports = adminRouter;

const express = require("express");
const sql = require("mssql");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const UserAuth = require("../middleware/authentication");

const router = express.Router();

/* Checks if a user exist if so returns the token otherwise error. */
router.post("/login", async (req, res, next) => {
  try {
    const user = await sql.query(
      `SELECT Email,Password,FirstName,LastName FROM Users WHERE Email='${req.body.email}'`
    );
    if (user.recordset.length === 0) throw new Error("User does not exist");
    const isMatch = await bcrypt.compare(
      req.body.password,
      user.recordset[0].Password
    );
    if (!isMatch) throw new Error("Invalid Password");
    const token = jwt.sign(
      { payload: user.recordset[0].Email },
      process.env.TOKEN_SECRET,
      { expiresIn: "1h" }
    );
    res.send({
      token,
      firstName: user.recordset[0].FirstName,
      lastName: user.recordset[0].LastName,
      email: user.recordset[0].Email,
    });
  } catch (e) {
    return next(e);
  }
});

/* Creates a user in the SQL DB with Email and hashed password. */
router.post("/register", async (req, res, next) => {
  try {
    const user = {
      email: req.body.email,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      phoneNumber: req.body.phoneNumber,
      password: await bcrypt.hash(req.body.password, 8),
    };
    const newUser = await sql.query(
      `INSERT INTO Users VALUES('${user.email}','${user.firstName}','${user.lastName}','${user.phoneNumber}','${user.password}')`
    );
    const token = jwt.sign(
      { payload: newUser.email },
      process.env.TOKEN_SECRET,
      {
        expiresIn: "1h",
      }
    );
    res.send({
      token,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
    });
  } catch (e) {
    return next(e);
    // res.status(500).send({ Error: e.message });
  }
});

module.exports = router;

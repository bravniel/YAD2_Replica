const jwt = require("jsonwebtoken");
const sql = require("mssql");

const userAuth = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    console.log('token',token);
    const decoded = jwt.verify(token, process.env.TOKEN_SECRET);
    const user = await sql.query(
      `SELECT Email FROM Users WHERE Email = N'${decoded.payload}'`
    );
    if (user.recordset.length === 0)
      return res.status(404).send({ Message: "No Authentication." });
    req.user = user.recordset[0].Email;
    next();
  } catch (e) {
    res.status(403).send({ Message: "No Authentication." });
  }
};

module.exports = userAuth;

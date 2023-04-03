const sql = require("mssql");

const sqlConfig = {
  user: process.env.SQL_DB_USER,
  password: process.env.SQL_DB_PASSWORD,
  database: process.env.SQL_DB_NAME,
  server: process.env.SQL_SERVER_PATH,
  options: {
    trustedConnection: true,
    keepAlive: true,
    trustServerCertificate: true,
  },
};

const connectDb = async () => {
  try {
    await sql.connect(sqlConfig);
  } catch (err) {
    console.log(`mssql err connection: ${err}`);
  }
};

module.exports = connectDb;

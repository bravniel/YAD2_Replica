const sql = require('mssql');

const chechIfUserExistsInDB = async (userId) =>
  await sql.query(
    `SELECT Email,Password,FirstName,LastName FROM Users WHERE Email='${userId}'`
  );

const insertUserDataToDB = async (user) =>
  await sql.query(
    `INSERT INTO Users VALUES('${user.email}','${user.firstName}','${user.lastName}','${user.phoneNumber}','${user.password}')`
  );

const getUserDataFromDB = async (userId) =>
  await sql.query(`SELECT * FROM Users WHERE Email='${userId}'`);

const updateUserDataOnDB = async (userId, data) =>
  await sql.query(
    `UPDATE Users SET 
      FirstName = N'${data.FirstName}',
      LastName = N'${data.LastName}',
      PhoneNumber = N'${data.PhoneNumber}',
      dateOfBirth = N'${data.dateOfBirth}',
      city = N'${data.city}',
      street = N'${data.street}',
      houseNumber = N'${data.houseNumber}' 
      WHERE Users.Email='${userId}'`
  );

module.exports = {
  chechIfUserExistsInDB,
  insertUserDataToDB,
  getUserDataFromDB,
  updateUserDataOnDB,
};

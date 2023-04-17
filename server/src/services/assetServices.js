const sql = require('mssql');

const insertAssetToDB = async (propertyColumns, propertyValues) =>
  await sql.query(
    `INSERT INTO Property (${propertyColumns}) VALUES (${propertyValues})`
  );
const insertAssetPropsToDB = async (
  propertyPropsColumns,
  propertyPropsValues
) =>
  await sql.query(
    `INSERT INTO Props (${propertyPropsColumns}) VALUES (${propertyPropsValues})`
  );

const getAssetsFromDB = async (queryString, orderBy, offset) =>
  await sql.query(
    `SELECT * FROM Property join Props on Property.propertyId = Props.propertyId ${queryString} ORDER BY
       CASE 
        WHEN adTrack = N'בולט במיוחד' THEN 1
        WHEN adTrack = N'בולט' THEN 2
        WHEN adTrack = N'בסיסי' THEN 3
        ELSE 4
       END, adTrack, ${orderBy} OFFSET ${offset} ROWS FETCH NEXT 5 ROWS ONLY;`
  );
const countAllAssetsFromDB = async (queryString) =>
  await sql.query(
    `SELECT COUNT(*) AS count FROM Property join Props on Property.propertyId = Props.propertyId ${queryString};`
  );

module.exports = {
  insertAssetToDB,
  insertAssetPropsToDB,
  getAssetsFromDB,
  countAllAssetsFromDB,
};

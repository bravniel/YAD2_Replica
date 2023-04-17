const sql = require('mssql');

const insertLikedAdToDB = async (favoriteAdId, userId, adId) =>
  await sql.query(
    `INSERT INTO FavoriteAds (favoriteAdId, userId, adId) VALUES (N'${favoriteAdId}', N'${userId}', N'${adId}')`
  );

const deleteLikedAdFromDB = async (adId) =>
  await sql.query(`DELETE FROM FavoriteAds WHERE adId = N'${adId}'`);

const getAllLikedAdsDataFromDB = async (userId) =>
  await sql.query(
    `SELECT p.*, pr.* FROM Property p JOIN Props pr ON p.propertyId = pr.propertyId JOIN FavoriteAds fa ON p.propertyId = fa.adId WHERE fa.userId = N'${userId}'`
  );

const getAllLikedAdsFromDB = async (userId) =>
  await sql.query(`SELECT adId FROM FavoriteAds WHERE userId = N'${userId}'`);

const getAllUserPublishedAdsDataFromDB = async (userId) =>
  await sql.query(
    `SELECT * FROM Property join Props on Property.propertyId = Props.propertyId WHERE Property.owner = N'${userId}' ORDER BY
       CASE 
        WHEN adTrack = N'בולט במיוחד' THEN 1
        WHEN adTrack = N'בולט' THEN 2
        WHEN adTrack = N'בסיסי' THEN 3
        ELSE 4
       END, adTrack`
  );

module.exports = {
  insertLikedAdToDB,
  deleteLikedAdFromDB,
  getAllLikedAdsDataFromDB,
  getAllLikedAdsFromDB,
  getAllUserPublishedAdsDataFromDB,
};

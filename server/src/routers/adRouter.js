const express = require('express');
const sql = require('mssql');

const { v4: uuidv4 } = require('uuid');

const router = express.Router();

/* Adds a liked ad to the DB. */
router.post('/ad', async (req, res, next) => {
  try {
    const state = req.body;
    const uuid = uuidv4();
    let keys = 'favoriteAdId';
    let values = "N'" + uuid + "'";
    for (const key in req.body) {
      keys += ', ' + key;
      values += ", N'" + req.body[key] + "'";
    }
    let queryString = `INSERT INTO FavoriteAds (${keys}) VALUES (${values})`;
    console.log('queryString: ', queryString);
    const result = await sql.query(queryString);
    res.send({});
  } catch (error) {
    return next(error);
  }
});

/* Returns the liked ads. */
router.get('/ad', async (req, res, next) => {
  const userId = `${req.query.userId}`;
  try {
    const ads = await sql.query(
      `SELECT * FROM Property inner join FavoriteAds on Property.propertyId = FavoriteAds.adId where FavoriteAds.userId = ${userId};`
    );
    const finalAds = ads.recordsets[0];
    if (finalAds.length === 0) throw new Error('No liked ads in DB.');
    res.send(ads.recordset);
  } catch (error) {
    return next(error);
  }
});

module.exports = router;

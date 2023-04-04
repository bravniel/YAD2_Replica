const express = require('express');
const sql = require('mssql');

const { v4: uuidv4 } = require('uuid');
const userAuth = require('../middleware/authentication');

const router = express.Router();

/* Adds a liked ad to the DB. */
router.post('/user/liked-ad',userAuth, async (req, res, next) => {
  try {
    const adId = req.body.adId;
    const uuid = uuidv4();
    // let keys = 'favoriteAdId';
    // let values = "N'" + uuid + "'";
    // for (const key in req.body) {
    //   keys += ', ' + key;
    //   values += ", N'" + req.body[key] + "'";
    // }
    let queryString = `INSERT INTO FavoriteAds (favoriteAdId, userId, adId) VALUES (N'${uuid}', N'${req.user}', N'${adId}')`;
    console.log('queryString: ', queryString);
    const result = await sql.query(queryString);
    res.send({});
  } catch (error) {
    return next(error);
  }
});

/* Returns the liked ads. */
router.get('/user/liked-ads', userAuth, async (req, res, next) => {
  //   const userId = `${req.query.userId}`;
  try {
    const ads = await sql.query(
      `SELECT * FROM Property inner join FavoriteAds on Property.propertyId = FavoriteAds.adId where FavoriteAds.userId = ${req.user};`
    );
    const finalAds = ads.recordsets[0];
    if (finalAds.length === 0) throw new Error('No liked ads in DB.');
    res.send(ads.recordset);
  } catch (error) {
    return next(error);
  }
});

/* Returns all ads that user published. */
router.get('/user/all-ads', userAuth, async (req, res, next) => {
  //   const userId = `${req.query.userId}`;
  try {
    const ads = await sql.query(
      `SELECT * FROM Property inner join FavoriteAds on Property.propertyId = FavoriteAds.adId where FavoriteAds.userId = ${req.user};`
    );
    const finalAds = ads.recordsets[0];
    if (finalAds.length === 0) throw new Error('No liked ads in DB.');
    res.send(ads.recordset);
  } catch (error) {
    return next(error);
  }
});

module.exports = router;

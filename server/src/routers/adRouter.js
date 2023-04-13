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

/* remove a liked ad from the DB. */
router.delete('/user/liked-ad',userAuth, async (req, res, next) => {
  try {
    const adId = req.body.adId;
    let queryString = `DELETE FROM FavoriteAds WHERE adId = N'${adId}'`;
    console.log('queryString: ', queryString);
    const result = await sql.query(queryString);
    res.send({});
  } catch (error) {
    return next(error);
  }
});

/* Returns the liked ads. */
router.get('/user/liked-ads', userAuth, async (req, res, next) => {
  try {
    const ads = await sql.query(
      `SELECT p.*, pr.* FROM Property p JOIN Props pr ON p.propertyId = pr.propertyId JOIN FavoriteAds fa ON p.propertyId = fa.adId WHERE fa.userId = N'${req.user}'`
    );
    const finalAds = ads.recordsets[0];
    // if (finalAds.length === 0) throw new Error('No liked ads in DB.');
    res.send(ads.recordset);
  } catch (error) {
    return next(error);
  }
});

router.get('/user/all-liked-ads', userAuth, async (req, res, next) => {
  try {
    const ads = await sql.query(
      `SELECT adId FROM FavoriteAds WHERE userId = N'${req.user}'`
    );
    const finalAds = ads.recordsets[0];
    // if (finalAds.length === 0) throw new Error('No liked ads in DB.');
    res.send(ads.recordset);
  } catch (error) {
    return next(error);
  }
});

/* Returns all ads that user published. */
router.get('/user/all-ads', userAuth, async (req, res, next) => {
  try {
    const ads = await sql.query(
      `SELECT * FROM Property join Props on Property.propertyId = Props.propertyId WHERE Property.owner = N'${req.user}' ORDER BY
       CASE 
        WHEN adTrack = N'בולט במיוחד' THEN 1
        WHEN adTrack = N'בולט' THEN 2
        WHEN adTrack = N'בסיסי' THEN 3
        ELSE 4
       END, adTrack`
    );
    const finalAds = ads.recordsets[0];
    if (finalAds.length === 0) throw new Error('No liked ads in DB.');
    res.send(ads.recordset);
  } catch (error) {
    return next(error);
  }
});

module.exports = router;

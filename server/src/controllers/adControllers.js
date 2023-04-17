const { v4: uuidv4 } = require('uuid');
const adServices = require('../services/adServices');

const addLikedAd = async (req, res, next) => {
  try {
    const adId = req.body.adId;
    const uuid = uuidv4();
    const result = await adServices.insertLikedAdToDB(uuid, req.user, adId);
    res.send({});
  } catch (error) {
    return next(error);
  }
};

const removeLikedAd = async (req, res, next) => {
  try {
    const adId = req.body.adId;
    const result = await adServices.deleteLikedAdFromDB(adId);
    res.send({});
  } catch (error) {
    return next(error);
  }
};

const getAllLikedAdsData = async (req, res, next) => {
  try {
    const ads = await adServices.getAllLikedAdsDataFromDB(req.user);
    res.send(ads.recordset);
  } catch (error) {
    return next(error);
  }
};

const getAllLikedAds = async (req, res, next) => {
  try {
    const ads = await adServices.getAllLikedAdsFromDB(req.user);
    res.send(ads.recordset);
  } catch (error) {
    return next(error);
  }
};

const getAllUserPublishedAds = async (req, res, next) => {
  try {
    const ads = await adServices.getAllUserPublishedAdsDataFromDB(req.user);
    const finalAds = ads.recordsets[0];
    if (finalAds.length === 0) throw new Error('No liked ads in DB.');
    res.send(ads.recordset);
  } catch (error) {
    return next(error);
  }
};

module.exports = {
  addLikedAd,
  removeLikedAd,
  getAllLikedAdsData,
  getAllLikedAds,
  getAllUserPublishedAds,
};

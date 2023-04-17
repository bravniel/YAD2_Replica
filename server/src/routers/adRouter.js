const express = require('express');
const userAuth = require('../middleware/authentication');

const adControllers = require('../controllers/adControllers');

const router = express.Router();

/* Adds a liked ad to the DB. */
router.post('/user/liked-ad', userAuth, adControllers.addLikedAd);

/* remove a liked ad from the DB. */
router.delete('/user/liked-ad', userAuth, adControllers.removeLikedAd);

/* Returns the liked ads. */
router.get('/user/liked-ads', userAuth, adControllers.getAllLikedAdsData);

router.get('/user/all-liked-ads', userAuth, adControllers.getAllLikedAds);

/* Returns all ads that user published. */
router.get('/user/all-ads', userAuth, adControllers.getAllUserPublishedAds);

module.exports = router;

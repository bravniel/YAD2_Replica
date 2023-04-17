const express = require('express');

const assetControllers = require('../controllers/assetControllers');

const router = express.Router();

/* Adds a realestate sell to the DB. */
router.post('/asset', assetControllers.addAsset);

/* Returns the states according to the search form input with sort and filter. */
router.get('/assets', assetControllers.getAssets);

module.exports = router;

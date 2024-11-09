const express = require('express');
const router = express.Router();
const { getPrediction } = require('../controllers/predictionController');

// POST route to make predictions
router.post('/', getPrediction);

module.exports = router;

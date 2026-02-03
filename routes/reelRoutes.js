const express = require('express');
const { getReels } = require('../controllers/reelController');

const router = express.Router();

router.get('/', getReels);

module.exports = router;

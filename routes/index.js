const express = require('express');
const router = express.Router();
const movieController = require('../controllers/movieController')


/* GET home page. */
router.get('/', movieController.index);

module.exports = router;

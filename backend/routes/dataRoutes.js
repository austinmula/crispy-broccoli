const router = require('express').Router();

const { getData } = require('../controllers/dataControllers');

router.get('/', getData);

module.exports = router;

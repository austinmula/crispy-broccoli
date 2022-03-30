const router = require('express').Router();

const { postData } = require('../controllers/dataControllers');

router.post('/', postData);

module.exports = router;

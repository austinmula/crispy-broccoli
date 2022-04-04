const router = require('express').Router();

const {
  getData,
  hourlyData,
  getFullData,
  weeklyData,
} = require('../controllers/dataControllers');

router.get('/', getData);
router.get('/hourly', hourlyData);
router.get('/weekly', weeklyData);
router.get('/full', getFullData);

module.exports = router;

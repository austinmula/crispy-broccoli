const router = require('express').Router();

const { getEvents, addEvent } = require('../controllers/eventControllers');
const { authorize } = require('../middleware/authorization');

router.get('/', authorize, getEvents);
router.post('/', authorize, addEvent);

module.exports = router;

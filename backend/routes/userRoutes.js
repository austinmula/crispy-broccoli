const router = require('express').Router();

const {
  fetchAllusers,
  fetchOneuser,
  deleteUser,
  getProfile,
  getweeklyUsers,
} = require('../controllers/userControllers');
const { authorize } = require('../middleware/authorization');

router.get('/summary', getweeklyUsers);
router.get('/profile', authorize, getProfile);
router.get('/', authorize, fetchAllusers);
router.get('/:id', authorize, fetchOneuser);
router.delete('/:id', authorize, deleteUser);

module.exports = router;

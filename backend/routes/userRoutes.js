const router = require('express').Router();

const {
  fetchAllusers,
  fetchOneuser,
  deleteUser,
  getProfile,
  getweeklyUsers,
  editUser,
  addContactInfo,
  getcountyDistribution,
  fetchAllusersDetailed,
} = require('../controllers/userControllers');
const { authorize } = require('../middleware/authorization');

router.get('/summary', getweeklyUsers);
router.get('/profiledetailed', fetchAllusersDetailed);
router.get('/distribution', getcountyDistribution);
router.post('/', addContactInfo);
router.get('/profile', authorize, getProfile);
router.get('/', authorize, fetchAllusers);
router.get('/:id', authorize, fetchOneuser);
router.delete('/:id', authorize, deleteUser);
router.put('/:id', authorize, editUser);

module.exports = router;

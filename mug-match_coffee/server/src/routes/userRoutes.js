const express = require ('express');
const { signUp, login, getProfile, updateProfile } = require ('../controllers/userController.js');
const router = express.Router();

router.post('/signUp', signUp);
router.post('/login', login);
router.get('/profile', getProfile);
router.put('/updateProfile', updateProfile);

module.exports = router;
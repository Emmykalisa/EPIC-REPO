import express from 'express';
import User from '../controllers/User';
import validator from '../middleware/validator';
const router = express.Router();

router.post('/signup', validator.signupvali , User.create);
router.post('/signin', User.loginUser);
router.get('/users', User.getAll);

module.exports = router;
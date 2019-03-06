import express from 'express';
import User from '../controllers/User';
const router = express.Router();

router.post('/signup', User.create);
router.get('/users', User.getAll);
router.get('/users/:id', User.getOne);
router.put('/users/:id', User.update);
router.delete('/users/:id', User.delete);

module.exports = router;
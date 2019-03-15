import express from 'express';
import Message from '../controllers/Message';
import validator from '../middleware/validator';
const router = express.Router();

router.post('/messages',validator.isLoggedIn,validator.allmessages, Message.create);
router.get('/messages', validator.isLoggedIn,Message.getAll);
router.get('/messages/unread',validator.isLoggedIn, Message.getUnread);
router.get('/messages/sent', validator.isLoggedIn,Message.getSent);
router.get('/messages/:id', validator.isLoggedIn,Message.getOne);
router.delete('/messages/:id', validator.isLoggedIn,Message.delete);

module.exports = router;
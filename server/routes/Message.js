import express from 'express';
import Message from '../controllers/Message';
import validator from '../middleware/validator';
const router = express.Router();

router.post('/messages',validator.allmessages, Message.create);
router.get('/messages', Message.getAll);
router.get('/messages/unread', Message.getUnread);
router.get('/messages/sent', Message.getSent);
router.get('/messages/:id', Message.getOne);
router.delete('/messages/:id', Message.delete);

module.exports = router;
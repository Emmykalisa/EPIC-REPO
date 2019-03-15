import MessageModel from '../models/Message';

const Message = {
  /**
   * 
   * @param {object} req 
   * @param {object} res
   * @returns {object} message object 
   */
  create(req, res) {
    if (!req.body.subject && !req.body.message && !req.body.parentMessageId && !req.body.status) {
     
      // return res.status(400).send({'message': 'All fields are required'})
      return res.status(400).json({status:400,message:'All fields are required'});
    }
    req.body.email= req.session.user.email;
    const message = MessageModel.create(req.body);
    // return res.status(201).send(message);
    return res.status(201).json({status:201,message:'Message sent',data:message});
  },
  /**
   * 
   * @param {object} req 
   * @param {object} res 
   * @returns {object} messages array
   */
  getAll(req, res) {
    const messages = MessageModel.findAll(req.session.user.email);
    return res.status(200).json({status:200, message:'This is the list of all messages', data:messages});
  },
  /**
   * 
   * @param {object} req 
   * @param {object} res
   * @returns {object} message object
   */
  getOne(req, res) {
    const message = MessageModel.findOne(req.params.id);
    if (!message) {
      return res.status(404).json({status:404, message: 'message not found'});
    }
    // return res.status(200).send(message);
    return res.status(200).json({status:200, message:'This is one message', data:message});
  },
  /**
   * 
   * @param {object} req 
   * @param {object} res
   * @returns {object} message object
   */
  getUnread(req, res) {
    const messages = MessageModel.findMessages('Unread',req.session.user.email);
    if (!messages) {
      return res.status(404).json({status:404 ,message: 'message not found'});
    }
    return res.status(200).json({status:200, message:'This is the list of all unread messages', data:messages});
  },
  /**
   * 
   * @param {object} req 
   * @param {object} res
   * @returns {object} message object
   */
  getSent(req, res) {
    const messages = MessageModel.findMessages('Sent',req.session.user.email);
    if (!messages) {
      return res.status(404).send({status:404, message: 'message not found'});
    }
    return res.status(200).send(messages);
  },
  /**
   * 
   * @param {object} req 
   * @param {object} res 
   * @returns {void} return statuc code 204 
   */
  delete(req, res) {
    const message = MessageModel.findOne(req.params.id);
    if (!message) {
      return res.status(404).send({'message': 'message not found'});
    }
    const mes = MessageModel.delete(req.params.id);
    return res.status(200).send(mes);
  }
}

export default Message;

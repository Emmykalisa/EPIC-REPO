import moment from 'moment';
import uuid from 'uuid';
import async from 'async';

class Message {
  /**
   * class constructor
   * @param {object} data
   */
  constructor() {
    this.messages = [
        {
            "id": "ae0f724b-8f6d-4234-877a-1848ca412f41",
            "subject": "Hi",
            "message": "cn ufjv dk",
            "parentMessageId": "KALISA",
            "status": "Unread",
            "createdOn": 1551871527723
        },
        {
            "id": "d1081ada-49d5-4a0a-b97e-e10b85ba68eb",
            "subject": "Test",
            "message": "I will came",
            "parentMessageId": "344",
            "status": "Sent",
            "createdOn": 1551871605364
        }
    ]
  }
  /**
   * 
   * @returns {object} message object
   */
  create(data) {
    const newMessage = {
      id: uuid.v4(),
      subject: data.subject || '',
      message: data.message || '',
      parentMessageId: data.parentMessageId || '',
      status: data.status || '',
      createdOn: moment.now()
    };
    this.messages.push(newMessage);
    return newMessage
  }
  /**
   * 
   * @param {uuid} id
   * @returns {object} message object
   */
  findOne(id) {
    return this.messages.find(mess => mess.id === id);
  }
  findMessages(status){
      let readMsgs = [];
      async.eachSeries(this.messages, (current, cb)=>{
          if(current.status==status) readMsgs.push(current);
          cb(null);
      },(err)=>{

      })
      return readMsgs;
  }
  /**
   * @returns {object} returns all messages
   */
  findAll() {
    return this.messages;
  }
  
  /**
   * 
   * @param {uuid} id 
   */
  delete(id) {
    const message = this.findOne(id);
    const index = this.messages.indexOf(message);
    this.messages.splice(index, 1);
    return {};
  }
}
export default new Message();
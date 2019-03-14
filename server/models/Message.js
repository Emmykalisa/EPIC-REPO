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
        "id":"d1081ada-49d5-4a0a-b97e-e10b85ba68eb",
        "subject":"Test",
        "message":"I will came",
        "parentMessageId":"344",
        "status":"Sent",
        "createdOn":1551871605364
      },
      {
        "id":"65262e7b-0143-486d-b735-630e2fb64396",
        "subject":"Test2",
        "message":"I will came tomorrow",
        "parentMessageId":"556665665",
        "status":"Sent",
        "createdOn":1552243675280
      },
      {
        "id":"f3de91e9-bc4b-48fb-9670-67f38dce8eec",
        "subject":"BootCamp",
        "message":"Tomorrow will be a boot camp of andela",
        "parentMessageId":"556665665",
        "status":"Sent",
        "createdOn":1552243727849
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
      createdOn: moment()
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
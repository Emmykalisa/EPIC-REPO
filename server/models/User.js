import moment from 'moment';
import uuid from 'uuid';
import async from 'async';

class User {
  /**
   * class constructor
   * @param {object} data
   */
  constructor() {
    this.users = [
      {
        "id": "c2097163-7122-4ba3-8792-79bd13bb906f",
        "email": "emmykalisa8@gmail.com",
        "firstName": "Emmy",
        "lastName": "KALISA",
        "password": "kalisa"
    }
    ];
  }
  /**
   * 
   * @returns {object} user object
   */
  create(data) {
    const newUser = {
      id: uuid.v4(),
      email: data.email || '',
      firstName: data.firstName || '',
      lastName: data.lastName || '',
      password: data.password || ''
    };
    this.users.push(newUser);
    return newUser
  }
  /**
   * @returns {object} returns all users
   */
  findAll() {
    return this.users;
  }
  /**
   * Sign in user
   * with email and password
   */
  signUser(info, userCallBack){
    let email = info.email;
    let password = info.password;
    let user;
    async.eachSeries(this.users, (currentUser, callBack)=>{
      if(currentUser.email != email) return callBack('Email not found');
      else if(currentUser.password != password) return callBack('Password not found');
      else if(currentUser.email != email&&currentUser.password != password) return callBack('Password and email are not matching');
      user = currentUser;
      return callBack(null);
    },(err)=>{
      return userCallBack(err, user);
    })
  }
}
export default new User();
import moment from 'moment';
import uuid from 'uuid';

class User {
  /**
   * class constructor
   * @param {object} data
   */
  constructor() {
    this.users = [];
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
      lastName: data.lastName || ''
    };
    this.users.push(newUser);
    return newUser
  }
  /**
   * 
   * @param {uuid} id
   * @returns {object} user object
   */
  findOne(id) {
    return this.users.find(reflect => reflect.id === id);
  }
  /**
   * @returns {object} returns all users
   */
  findAll() {
    return this.users;
  }
  /**
   * 
   * @param {uuid} id
   * @param {object} data 
   */
  update(id, data) {
    const user = this.findOne(id);
    const index = this.users.indexOf(user);
    this.users[index].email = data['email'] || user.email;
    this.users[index].firstName = data['firstName'] || user.firstName;
    this.users[index].lastName = data['lastName'] || user.lastName
    return this.users[index];
  }
  /**
   * 
   * @param {uuid} id 
   */
  delete(id) {
    const user = this.findOne(id);
    const index = this.users.indexOf(user);
    this.users.splice(index, 1);
    return {};
  }
}
export default new User();
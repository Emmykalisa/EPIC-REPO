'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _uuid = require('uuid');

var _uuid2 = _interopRequireDefault(_uuid);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var User = function () {
  /**
   * class constructor
   * @param {object} data
   */
  function User() {
    _classCallCheck(this, User);

    this.users = [];
  }
  /**
   * 
   * @returns {object} user object
   */


  _createClass(User, [{
    key: 'create',
    value: function create(data) {
      var newUser = {
        id: _uuid2.default.v4(),
        email: data.email || '',
        firstName: data.firstName || '',
        lastName: data.lastName || ''
      };
      this.users.push(newUser);
      return newUser;
    }
    /**
     * 
     * @param {uuid} id
     * @returns {object} user object
     */

  }, {
    key: 'findOne',
    value: function findOne(id) {
      return this.users.find(function (reflect) {
        return reflect.id === id;
      });
    }
    /**
     * @returns {object} returns all users
     */

  }, {
    key: 'findAll',
    value: function findAll() {
      return this.users;
    }
    /**
     * 
     * @param {uuid} id
     * @param {object} data 
     */

  }, {
    key: 'update',
    value: function update(id, data) {
      var user = this.findOne(id);
      var index = this.users.indexOf(user);
      this.users[index].email = data['email'] || user.email;
      this.users[index].firstName = data['firstName'] || user.firstName;
      this.users[index].lastName = data['lastName'] || user.lastName;
      return this.users[index];
    }
    /**
     * 
     * @param {uuid} id 
     */

  }, {
    key: 'delete',
    value: function _delete(id) {
      var user = this.findOne(id);
      var index = this.users.indexOf(user);
      this.users.splice(index, 1);
      return {};
    }
  }]);

  return User;
}();

exports.default = new User();
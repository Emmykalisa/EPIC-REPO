'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _User = require('../models/User');

var _User2 = _interopRequireDefault(_User);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var User = {
  /**
   * 
   * @param {object} req 
   * @param {object} res
   * @returns {object} user object 
   */
  create: function create(req, res) {
    if (!req.body.email && !req.body.firstName && !req.body.lastName) {
      return res.status(400).send({ 'message': 'All fields are required' });
    }
    var user = _User2.default.create(req.body);
    return res.status(201).send(user);
  },

  /**
   * 
   * @param {object} req 
   * @param {object} res 
   * @returns {object} users array
   */
  getAll: function getAll(req, res) {
    var users = _User2.default.findAll();
    return res.status(200).send(users);
  },

  /**
   * 
   * @param {object} req 
   * @param {object} res
   * @returns {object} user object
   */
  getOne: function getOne(req, res) {
    var user = _User2.default.findOne(req.params.id);
    if (!user) {
      return res.status(404).send({ 'message': 'user not found' });
    }
    return res.status(200).send(user);
  },

  /**
   * 
   * @param {object} req 
   * @param {object} res 
   * @returns {object} updated user
   */
  update: function update(req, res) {
    var user = _User2.default.findOne(req.params.id);
    if (!user) {
      return res.status(404).send({ 'message': 'user not found' });
    }
    var updatedUser = _User2.default.update(req.params.id, req.body);
    return res.status(200).send(updatedUser);
  },

  /**
   * 
   * @param {object} req 
   * @param {object} res 
   * @returns {void} return statuc code 204 
   */
  delete: function _delete(req, res) {
    var user = _User2.default.findOne(req.params.id);
    if (!user) {
      return res.status(404).send({ 'message': 'user not found' });
    }
    var us = _User2.default.delete(req.params.id);
    return res.status(204).send(us);
  }
};

exports.default = User;
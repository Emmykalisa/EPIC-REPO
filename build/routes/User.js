'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _User = require('../controllers/User');

var _User2 = _interopRequireDefault(_User);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

router.post('/signup', _User2.default.create);
router.get('/users', _User2.default.getAll);
router.get('/users/:id', _User2.default.getOne);
router.put('/users/:id', _User2.default.update);
router.delete('/users/:id', _User2.default.delete);

module.exports = router;
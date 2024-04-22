"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
require("reflect-metadata");
var _typeorm = require("typeorm");
var _Post = require("./entity/Post");
(0, _typeorm.createConnection)().then( /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(connection) {
    var posts;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return connection.manager.find(_Post.Post);
          case 2:
            posts = _context.sent;
            if (!(posts.length === 0)) {
              _context.next = 6;
              break;
            }
            _context.next = 6;
            return connection.manager.save([new _Post.Post('Post 1', 'This is the content of Post 1'), new _Post.Post('Post 2', 'This is the content of Post 2'), new _Post.Post('Post 3', 'This is the content of Post 3'), new _Post.Post('Post 4', 'This is the content of Post 4'), new _Post.Post('Post 5', 'This is the content of Post 5'), new _Post.Post('Post 6', 'This is the content of Post 6'), new _Post.Post('Post 7', 'This is the content of Post 7'), new _Post.Post('Post 8', 'This is the content of Post 8'), new _Post.Post('Post 9', 'This is the content of Post 9'), new _Post.Post('Post 10', 'This is the content of Post 10')]);
          case 6:
            connection.close();
          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return function (_x) {
    return _ref.apply(this, arguments);
  };
}())["catch"](function (error) {
  return console.log(error);
});
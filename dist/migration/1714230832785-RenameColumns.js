"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RenameColumns1591209418688 = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var RenameColumns1591209418688 = exports.RenameColumns1591209418688 = /*#__PURE__*/function () {
  function RenameColumns1591209418688() {
    (0, _classCallCheck2["default"])(this, RenameColumns1591209418688);
  }
  (0, _createClass2["default"])(RenameColumns1591209418688, [{
    key: "up",
    value: function () {
      var _up = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(queryRunner) {
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return queryRunner.renameColumn('users', 'password_digest', 'passwordDigest');
              case 2:
                _context.next = 4;
                return queryRunner.renameColumn('posts', 'author_id', 'authorId');
              case 4:
                _context.next = 6;
                return queryRunner.renameColumn('comments', 'user_id', 'userId');
              case 6:
                _context.next = 8;
                return queryRunner.renameColumn('comments', 'post_id', 'postId');
              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));
      function up(_x) {
        return _up.apply(this, arguments);
      }
      return up;
    }()
  }, {
    key: "down",
    value: function () {
      var _down = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(queryRunner) {
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return queryRunner.renameColumn('users', 'passwordDigest', 'password_digest');
              case 2:
                _context2.next = 4;
                return queryRunner.renameColumn('posts', 'authorId', 'author_id');
              case 4:
                _context2.next = 6;
                return queryRunner.renameColumn('comments', 'userId', 'user_id');
              case 6:
                _context2.next = 8;
                return queryRunner.renameColumn('comments', 'postId', 'post_id');
              case 8:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));
      function down(_x2) {
        return _down.apply(this, arguments);
      }
      return down;
    }()
  }]);
  return RenameColumns1591209418688;
}();
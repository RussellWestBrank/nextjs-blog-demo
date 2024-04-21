"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreatePost1713623936885 = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _typeorm = require("typeorm");
var CreatePost1713623936885 = exports.CreatePost1713623936885 = /*#__PURE__*/function () {
  function CreatePost1713623936885() {
    (0, _classCallCheck2["default"])(this, CreatePost1713623936885);
  }
  (0, _createClass2["default"])(CreatePost1713623936885, [{
    key: "up",
    value: function () {
      var _up = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(queryRunner) {
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                //升级数据库
                queryRunner.createTable(new _typeorm.Table({
                  name: 'posts',
                  columns: [{
                    name: 'id',
                    type: 'int',
                    isPrimary: true,
                    //主键
                    isGenerated: true,
                    //自动增长
                    generationStrategy: 'increment'
                  }, {
                    name: 'title',
                    type: 'varchar'
                  }, {
                    name: 'content',
                    type: 'text'
                  }]
                }));
              case 1:
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
                //降级数据库
                queryRunner.dropTable('posts');
              case 1:
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
  return CreatePost1713623936885;
}();
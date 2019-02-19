"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _default2 = _interopRequireDefault(require("./theme/default"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  font-family: ", ";\n  font-size: 18px;\n  line-height: 22px;\n  color: #fff;\n  background-color: #f44336;\n  padding: 20px;\n  opacity: 0.83;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var ErrorMessage = _styledComponents.default.p(_templateObject(), function (_ref) {
  var theme = _ref.theme;
  return theme.fontFamily;
});

ErrorMessage.defaultProps = {
  theme: _default2.default
};
var _default = ErrorMessage;
exports.default = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  display: inline-block;\n  position: relative;\n  width: ", "px;\n  height: ", "px;\n  div {\n    position: absolute;\n    border: 4px solid #000;\n    opacity: 1;\n    border-radius: 50%;\n    animation: ", " 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;\n  }\n  div:nth-child(2) {\n    animation-delay: -0.5s;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  0% {\n    top: ", "px;\n    left: ", "px;\n    width: 0;\n    height: 0;\n    opacity: 1;\n  }\n  100% {\n    top: -1px;\n    left: -1px;\n    width: ", "px;\n    height: ", "px;\n    opacity: 0;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var loadingAnimation = function loadingAnimation(props) {
  return (0, _styledComponents.keyframes)(_templateObject(), props.size / 2, props.size / 2, props.size, props.size);
};

var Container = _styledComponents.default.div(_templateObject2(), function (props) {
  return props.size;
}, function (props) {
  return props.size;
}, loadingAnimation);

var Loading = function Loading(_ref) {
  var className = _ref.className,
      size = _ref.size;
  return _react.default.createElement(Container, {
    className: className,
    size: size
  }, _react.default.createElement("div", null), _react.default.createElement("div", null));
};

Loading.defaultProps = {
  size: 58
};
var _default = Loading;
exports.default = _default;
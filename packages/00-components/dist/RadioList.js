"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: inline-block;\n  label {\n    margin-left: 10px;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Container = _styledComponents.default.div(_templateObject());

var RadioList = function RadioList(_ref) {
  var className = _ref.className,
      title = _ref.title,
      name = _ref.name,
      options = _ref.options,
      value = _ref.value,
      _onChange = _ref.onChange;
  return _react.default.createElement(Container, {
    className: className
  }, _react.default.createElement("strong", null, title), options.map(function (option) {
    return _react.default.createElement("label", {
      key: "".concat(name, "-").concat(option.value)
    }, _react.default.createElement("input", {
      type: "radio",
      name: name,
      value: option.value,
      checked: option.value === value,
      onChange: function onChange(event) {
        return _onChange(event.target.value);
      }
    }), "\xA0 ", option.text);
  }));
};

RadioList.defaultProps = {
  onChange: function onChange() {
    return undefined;
  }
};
var _default = RadioList;
exports.default = _default;
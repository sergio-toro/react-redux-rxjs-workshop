"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _default2 = _interopRequireDefault(require("./theme/default"));

var _cat = _interopRequireDefault(require("./assets/cat.svg"));

var _dog = _interopRequireDefault(require("./assets/dog.svg"));

var _snail = _interopRequireDefault(require("./assets/snail.svg"));

var _horse = _interopRequireDefault(require("./assets/horse.svg"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  margin-right: 20px;\n  width: 100px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  min-height: 75px;\n  padding: 20px 30px 20px 10px;\n  font-family: ", ";\n  font-size: 20px;\n  font-weight: lighter;\n  line-height: 25px;\n  background: ", ";\n  color: ", ";\n  border-color: ", ";\n  border-width: 2px;\n  border-style: solid;\n  border-radius: 5px;\n  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.9);\n  text-align: justify;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var animals = {
  horse: {
    color: {
      primary: "#4B4298",
      secondary: "#E6E4F7"
    },
    image: _horse.default
  },
  dog: {
    color: {
      primary: "#DB834C",
      secondary: "#FFF1E9"
    },
    image: _dog.default
  },
  snail: {
    color: {
      primary: "#318D79",
      secondary: "#E0F5F1"
    },
    image: _snail.default
  },
  cat: {
    color: {
      primary: "#D8C685",
      secondary: "#FFFAE9"
    },
    image: _cat.default
  }
};

var Container = _styledComponents.default.div(_templateObject(), function (_ref) {
  var theme = _ref.theme;
  return theme.fontFamily;
}, function (props) {
  return animals[props.type].color.secondary;
}, function (props) {
  return animals[props.type].color.primary;
}, function (props) {
  return animals[props.type].color.primary;
});

Container.defaultProps = {
  theme: _default2.default
};

var Icon = _styledComponents.default.img(_templateObject2());

var Fact = function Fact(_ref2) {
  var className = _ref2.className,
      text = _ref2.text,
      type = _ref2.type;
  return _react.default.createElement(Container, {
    className: className,
    type: type
  }, _react.default.createElement(Icon, {
    src: animals[type].image
  }), text);
};

var _default = Fact;
exports.default = _default;
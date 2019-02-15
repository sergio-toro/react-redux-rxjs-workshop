import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  position: absolute;\n  top: calc(50% - 50px);\n  left: 10px;\n  width: 100px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  position: relative;\n  padding: 20px 30px 20px 130px;\n  font-family: ", ";\n  font-size: 20px;\n  font-weight: lighter;\n  line-height: 25px;\n  background: ", ";\n  color: ", ";\n  border-color: ", ";\n  border-width: 2px;\n  border-style: solid;\n  border-radius: 5px;\n  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.9);\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

import React from "react";
import styled from "styled-components";
import defaultTheme from "./theme/default";
import cat from "./assets/cat.svg";
import dog from "./assets/dog.svg";
import snail from "./assets/snail.svg";
import horse from "./assets/horse.svg";
var animals = {
  horse: {
    color: {
      primary: "#4B4298",
      secondary: "#E6E4F7"
    },
    image: horse
  },
  dog: {
    color: {
      primary: "#DB834C",
      secondary: "#FFF1E9"
    },
    image: dog
  },
  snail: {
    color: {
      primary: "#318D79",
      secondary: "#E0F5F1"
    },
    image: snail
  },
  cat: {
    color: {
      primary: "#D8C685",
      secondary: "#FFFAE9"
    },
    image: cat
  }
};
var Container = styled.div(_templateObject(), function (_ref) {
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
  theme: defaultTheme
};
var Icon = styled.img(_templateObject2());

var Fact = function Fact(_ref2) {
  var className = _ref2.className,
      text = _ref2.text,
      type = _ref2.type;
  return React.createElement(Container, {
    className: className,
    type: type
  }, React.createElement(Icon, {
    src: animals[type].image
  }), text);
};

export default Fact;
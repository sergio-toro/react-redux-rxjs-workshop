import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";

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

import React from "react";
import styled, { keyframes } from "styled-components";

var loadingAnimation = function loadingAnimation(props) {
  return keyframes(_templateObject(), props.size / 2, props.size / 2, props.size, props.size);
};

var Container = styled.div(_templateObject2(), function (props) {
  return props.size;
}, function (props) {
  return props.size;
}, loadingAnimation);

var Loading = function Loading(_ref) {
  var className = _ref.className,
      size = _ref.size;
  return React.createElement(Container, {
    className: className,
    size: size
  }, React.createElement("div", null), React.createElement("div", null));
};

Loading.defaultProps = {
  size: 58
};
export default Loading;
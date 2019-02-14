import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n      background: black;\n      color: white;\n      &:hover {\n        background: rgba(0, 0, 0, 0.7);\n      }\n    "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: inline-block;\n  text-align: center;\n  border-radius: 3px;\n  padding: 0.5rem 0;\n  margin: 0.5rem 1rem;\n  width: 11rem;\n  background: transparent;\n  color: black;\n  border: 2px solid black;\n  font-family: ", ";\n  cursor: pointer;\n\n  &:hover {\n    background: rgba(0, 0, 0, 0.1);\n  }\n\n  ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

import styled, { css } from "styled-components";
import defaultTheme from "./theme/default";
var Button = styled.a(_templateObject(), function (_ref) {
  var theme = _ref.theme;
  return theme.fontFamily;
}, function (props) {
  return props.primary && css(_templateObject2());
});
Button.defaultProps = {
  theme: defaultTheme
};
export default Button;
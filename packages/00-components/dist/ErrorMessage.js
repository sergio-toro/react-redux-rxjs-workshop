import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  font-family: ", ";\n  font-size: 18px;\n  line-height: 22px;\n  color: #fff;\n  background-color: #f44336;\n  padding: 20px;\n  opacity: 0.83;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

import styled from "styled-components";
import defaultTheme from "./theme/default";
var ErrorMessage = styled.p(_templateObject(), function (_ref) {
  var theme = _ref.theme;
  return theme.fontFamily;
});
ErrorMessage.defaultProps = {
  theme: defaultTheme
};
export default ErrorMessage;
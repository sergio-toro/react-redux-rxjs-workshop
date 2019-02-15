import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: inline-block;\n  label {\n    margin-left: 10px;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

import React from "react";
import styled from "styled-components";
var Container = styled.div(_templateObject());

var RadioList = function RadioList(_ref) {
  var className = _ref.className,
      title = _ref.title,
      name = _ref.name,
      options = _ref.options,
      value = _ref.value,
      _onChange = _ref.onChange;
  return React.createElement(Container, {
    className: className
  }, React.createElement("strong", null, title), options.map(function (option) {
    return React.createElement("label", {
      key: "".concat(name, "-").concat(option.value)
    }, React.createElement("input", {
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
export default RadioList;
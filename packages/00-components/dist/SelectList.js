import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: inline-block;\n  select {\n    margin-left: 10px;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

import React from "react";
import styled from "styled-components";
var Container = styled.label(_templateObject());

var SelectList = function SelectList(_ref) {
  var className = _ref.className,
      title = _ref.title,
      name = _ref.name,
      options = _ref.options,
      value = _ref.value,
      _onChange = _ref.onChange;
  return React.createElement(Container, {
    className: className
  }, React.createElement("strong", null, title), React.createElement("select", {
    name: name,
    value: value,
    onChange: function onChange(event) {
      return _onChange(event.target.value);
    }
  }, options.map(function (option) {
    return React.createElement("option", {
      key: option.value,
      value: option.value
    }, option.text);
  })));
};

SelectList.defaultProps = {
  onChange: function onChange() {
    return undefined;
  }
};
export default SelectList;
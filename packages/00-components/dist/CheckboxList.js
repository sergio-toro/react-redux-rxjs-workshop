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

var CheckboxList = function CheckboxList(_ref) {
  var className = _ref.className,
      title = _ref.title,
      name = _ref.name,
      options = _ref.options,
      values = _ref.values,
      _onChange = _ref.onChange;
  var valuesSet = new Set(values);
  return React.createElement(Container, {
    className: className
  }, React.createElement("strong", null, title), options.map(function (option) {
    return React.createElement("label", {
      key: "".concat(name, "-").concat(option.value)
    }, React.createElement("input", {
      type: "checkbox",
      name: name,
      value: option.value,
      checked: valuesSet.has(option.value),
      onChange: function onChange(event) {
        if (valuesSet.has(option.value)) {
          valuesSet.delete(option.value);
        } else {
          valuesSet.add(option.value);
        }

        _onChange(Array.from(valuesSet));
      }
    }), "\xA0 ", option.text);
  }));
};

CheckboxList.defaultProps = {
  values: [],
  onChange: function onChange() {
    return undefined;
  }
};
export default CheckboxList;
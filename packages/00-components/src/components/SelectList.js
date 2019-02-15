// @flow
import React from "react";
import styled from "styled-components";

const Container = styled.label`
  display: inline-block;
  select {
    margin-left: 10px;
  }
`;

type Props = {
  className: string,
  title: string,
  name: string,
  value: string,
  onChange: Function,
  options: Array<{
    value: string,
    text: string
  }>
};

const SelectList = ({ className, title, name, options, value, onChange }: Props) => (
  <Container className={className}>
    <strong>{title}</strong>
    <select name={name} value={value} onChange={event => onChange(event.target.value)}>
      {options.map(option => (
        <option key={option.value} value={option.value}>
          {option.text}
        </option>
      ))}
    </select>
  </Container>
);

SelectList.defaultProps = {
  onChange: () => undefined
};

export default SelectList;

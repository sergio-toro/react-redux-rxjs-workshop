// @flow
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: inline-block;
  label {
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

const RadioList = ({ className, title, name, options, value, onChange }: Props) => (
  <Container className={className}>
    <strong>{title}</strong>
    {options.map(option => (
      <label key={`${name}-${option.value}`}>
        <input
          type="radio"
          name={name}
          value={option.value}
          checked={option.value === value}
          onChange={event => onChange(event.target.value)}
        />
        &nbsp; {option.text}
      </label>
    ))}
  </Container>
);

RadioList.defaultProps = {
  onChange: () => undefined
};

export default RadioList;

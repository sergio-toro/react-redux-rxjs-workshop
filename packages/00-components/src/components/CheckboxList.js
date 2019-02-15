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
  values: Array<string>,
  onChange: Function,
  options: Array<{
    value: string,
    text: string
  }>
};

const CheckboxList = ({ className, title, name, options, values, onChange }: Props) => {
  const valuesSet = new Set(values);
  return (
    <Container className={className}>
      <strong>{title}</strong>
      {options.map(option => (
        <label key={`${name}-${option.value}`}>
          <input
            type="checkbox"
            name={name}
            value={option.value}
            checked={valuesSet.has(option.value)}
            onChange={event => {
              if (valuesSet.has(option.value)) {
                valuesSet.delete(option.value);
              } else {
                valuesSet.add(option.value);
              }
              onChange(Array.from(valuesSet));
            }}
          />
          &nbsp; {option.text}
        </label>
      ))}
    </Container>
  );
};

CheckboxList.defaultProps = {
  values: [],
  onChange: () => undefined
};

export default CheckboxList;

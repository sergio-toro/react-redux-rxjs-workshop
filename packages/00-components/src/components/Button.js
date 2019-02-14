// @flow
import styled, { css } from "styled-components";

import defaultTheme from "./theme/default";

type Props = {
  primary: boolean
};

const Button = styled.a`
  display: inline-block;
  text-align: center;
  border-radius: 3px;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  width: 11rem;
  background: transparent;
  color: black;
  border: 2px solid black;
  font-family: ${({ theme }) => theme.fontFamily};
  cursor: pointer;

  &:hover {
    background: rgba(0, 0, 0, 0.1);
  }

  ${(props: Props) =>
    props.primary &&
    css`
      background: black;
      color: white;
      &:hover {
        background: rgba(0, 0, 0, 0.7);
      }
    `}
`;

Button.defaultProps = {
  theme: defaultTheme
};

export default Button;

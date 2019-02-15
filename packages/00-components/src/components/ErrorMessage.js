// @flow
import styled from "styled-components";

import defaultTheme from "./theme/default";

const ErrorMessage = styled.p`
  font-family: ${({ theme }) => theme.fontFamily};
  font-size: 18px;
  line-height: 22px;
  color: #fff;
  background-color: #f44336;
  padding: 20px;
  opacity: 0.83;
`;

ErrorMessage.defaultProps = {
  theme: defaultTheme
};

export default ErrorMessage;

// @flow
import React from "react";
import styled, { keyframes } from "styled-components";

type Props = {
  primary: boolean
};

const loadingAnimation = keyframes`
  0% {
    top: 28px;
    left: 28px;
    width: 0;
    height: 0;
    opacity: 1;
  }
  100% {
    top: -1px;
    left: -1px;
    width: 58px;
    height: 58px;
    opacity: 0;
  }
`;

const Container = styled.div`
  display: inline-block;
  position: relative;
  width: ${props => props.size};
  height: ${props => props.size};
  div {
    position: absolute;
    border: 4px solid #000;
    opacity: 1;
    border-radius: 50%;
    animation: ${loadingAnimation} 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
  }
  div:nth-child(2) {
    animation-delay: -0.5s;
  }
`;

const Loading = ({ className, size }: Props) => (
  <Container size={size}>
    <div />
    <div />
  </Container>
);

Loading.defaultProps = {
  size: "58px"
};

export default Loading;

// @flow
import React from "react";
import styled, { keyframes } from "styled-components";

const loadingAnimation = props => keyframes`
  0% {
    top: ${props.size / 2}px;
    left: ${props.size / 2}px;
    width: 0;
    height: 0;
    opacity: 1;
  }
  100% {
    top: -1px;
    left: -1px;
    width: ${props.size}px;
    height: ${props.size}px;
    opacity: 0;
  }
`;

const Container = styled.div`
  display: inline-block;
  position: relative;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
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

type Props = {
  className: string,
  size: number
};

const Loading = ({ className, size }: Props) => (
  <Container className={className} size={size}>
    <div />
    <div />
  </Container>
);

Loading.defaultProps = {
  size: 58
};

export default Loading;

// @flow
import React from "react";
import styled from "styled-components";

import defaultTheme from "./theme/default";

import cat from "./assets/cat.svg";
import dog from "./assets/dog.svg";
import snail from "./assets/snail.svg";
import horse from "./assets/horse.svg";

const animals = {
  horse: {
    color: {
      primary: "#4B4298",
      secondary: "#E6E4F7"
    },
    image: horse
  },
  dog: {
    color: {
      primary: "#DB834C",
      secondary: "#FFF1E9"
    },
    image: dog
  },
  snail: {
    color: {
      primary: "#318D79",
      secondary: "#E0F5F1"
    },
    image: snail
  },
  cat: {
    color: {
      primary: "#D8C685",
      secondary: "#FFFAE9"
    },
    image: cat
  }
};

const Container = styled.div`
  position: relative;
  padding: 20px 30px 20px 130px;
  font-family: ${({ theme }) => theme.fontFamily};
  font-size: 20px;
  font-weight: lighter;
  line-height: 25px;
  background: ${props => animals[props.type].color.secondary};
  color: ${props => animals[props.type].color.primary};
  border-color: ${props => animals[props.type].color.primary};
  border-width: 2px;
  border-style: solid;
  border-radius: 5px;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.8);
`;

const Icon = styled.img`
  position: absolute;
  top: calc(50% - 50px);
  left: 10px;
  width: 100px;
`;

type Props = {
  text: string,
  type: "cat" | "dog" | "snail" | "horse",
  className: string
};
const Fact = ({ className, text, type }: Props) => (
  <Container className={className} type={type}>
    <p>
      <Icon src={animals[type].image} />
      {text}
    </p>
  </Container>
);

Fact.defaultProps = {
  theme: defaultTheme
};

export default Fact;

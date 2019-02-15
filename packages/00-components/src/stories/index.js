import React from "react";

import { storiesOf } from "@storybook/react";
import { Fact, Button, Loading, ErrorMessage } from "../components";

const text =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu ipsum mollis, accumsan ligula ac, gravida velit. Nam euismod viverra.";

storiesOf("Fact", module)
  .add("cat", () => <Fact text={text} type="cat" />)
  .add("dog", () => <Fact text={text} type="dog" />)
  .add("snail", () => <Fact text={text} type="snail" />)
  .add("horse", () => <Fact text={text} type="horse" />);

storiesOf("Button", module)
  .add("default", () => <Button>Some action</Button>)
  .add("primary", () => <Button primary>Some action</Button>);

storiesOf("Loading", module).add("default", () => <Loading />);

storiesOf("ErrorMessage", module).add("default", () => <ErrorMessage>Error while performing some action</ErrorMessage>);

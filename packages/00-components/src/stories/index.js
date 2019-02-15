import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import { CheckboxList, SelectList, RadioList, Fact, Button, Loading, ErrorMessage } from "../components";

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

storiesOf("SelectList", module)
  .add("default", () => (
    <SelectList
      title="Options"
      name="options"
      options={[{ value: "1", text: "Option 1" }, { value: "2", text: "Option 2" }]}
      onChange={action("change")}
    />
  ))
  .add("option 2 selected", () => (
    <SelectList
      title="Options"
      name="options"
      value="2"
      options={[{ value: "1", text: "Option 1" }, { value: "2", text: "Option 2" }]}
      onChange={action("change")}
    />
  ));

storiesOf("RadioList", module)
  .add("default", () => (
    <RadioList
      title="Options"
      name="options"
      options={[{ value: "1", text: "Option 1" }, { value: "2", text: "Option 2" }]}
      onChange={action("change")}
    />
  ))
  .add("option 2 checked", () => (
    <RadioList
      title="Options"
      name="options"
      value="2"
      options={[{ value: "1", text: "Option 1" }, { value: "2", text: "Option 2" }]}
      onChange={action("change")}
    />
  ));

storiesOf("CheckboxList", module)
  .add("default", () => (
    <CheckboxList
      title="Options"
      name="options"
      options={[{ value: "1", text: "Option 1" }, { value: "2", text: "Option 2" }]}
      onChange={action("change")}
    />
  ))
  .add("option 2 checked", () => (
    <CheckboxList
      title="Options"
      name="options"
      values={["2"]}
      options={[{ value: "1", text: "Option 1" }, { value: "2", text: "Option 2" }]}
      onChange={action("change")}
    />
  ));

import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withKnobs, select, text, boolean, number } from "@storybook/addon-knobs";

import { CheckboxList, SelectList, RadioList, Fact, Button, Loading, ErrorMessage } from "../components";

const lorem =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu ipsum mollis, accumsan ligula ac, gravida velit. Nam euismod viverra.";
const options = ["cat", "dog", "snail", "horse"];
storiesOf("Fact", module)
  .addDecorator(withKnobs)
  .add("cat", () => <Fact text={text("Text", lorem)} type={select("type", options, "cat")} />)
  .add("dog", () => <Fact text={text("Text", lorem)} type={select("type", options, "dog")} />)
  .add("snail", () => <Fact text={text("Text", lorem)} type={select("type", options, "snail")} />)
  .add("horse", () => <Fact text={text("Text", lorem)} type={select("type", options, "horse")} />);

storiesOf("Button", module)
  .addDecorator(withKnobs)
  .add("default", () => (
    <Button onClick={action("click")} primary={boolean("Primary", false)}>
      Some action
    </Button>
  ))
  .add("primary", () => (
    <Button onClick={action("click")} primary={boolean("Primary", true)}>
      Some action
    </Button>
  ));

storiesOf("Loading", module)
  .addDecorator(withKnobs)
  .add("default", () => <Loading size={number("Size", 65)} />);

storiesOf("ErrorMessage", module)
  .addDecorator(withKnobs)
  .add("default", () => <ErrorMessage>{text("Message", "Error while performing some action")}</ErrorMessage>);

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

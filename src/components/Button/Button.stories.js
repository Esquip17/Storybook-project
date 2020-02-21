import React from "react";
import { storiesOf } from "@storybook/react";
import "./Button.css";
import Button from "./Button";

const style = {
  backgroundColor: "#0069D9",
  color: "white",
  borderRadius: "2px",
  padding: "5px 25px",
  border: "#0069D9"
};
const dangerStyle = {
  backgroundColor: "red"
};
const successStyle = {
  backgroundColor: "green"
};
const warningStyle = {
  backgroundColor: "yellow"
};
//This is adding attributes that we can access later.
storiesOf("Button", module)
  .add("Primary", () => <Button label="Primary" type="primary" style={style} />)
  .add("Large Primary", () => (
    <Button label="Large Primary Button" type="primary" large />
  ))
  .add("Danger", () => (
    <Button label="Danger" type="danger" style={dangerStyle} />
  ))
  .add("Success", () => (
    <Button label="Success" type="success" style={successStyle} />
  ))
  .add("Warning", () => (
    <Button label="Warning" type="warning" style={warningStyle} />
  ));

import "./styles.css";
import React from "react";

export default function Button(props) {
  const { text, type, disabled } = props;
  return (
    <button className="ui-button" type={type} disabled={disabled}>
      {text}
    </button>
  );
}

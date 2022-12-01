import "./styles.css";
import React from "react";

export default function Link(props) {
  const { text, href, disabled } = props;
  return (
    <a className="ui-link" href={href}>
      {text}
    </a>
  );
}

import React from "react";
import { render } from "react-dom";

import Button from "./Button";
import Link from "./Link";
import Container from "./Container";
import Input from "./Input";

function App() {
  return (
    <>
      <Container>
        <Button />
        <Input />
        <Link />
      </Container>
    </>
  );
}

render(<App />, document.querySelector("#root"));

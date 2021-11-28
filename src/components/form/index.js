import React from "react";
import { Container, Base, Title, Error, Input, Submit } from "./styles/form";

export default function Form({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

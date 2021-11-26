import React, { useState } from "react";
import { Body, Title, Header, Container, Inner } from "./styles/accordion";

export default function Accordion({ children, ...restProps }) {
  return (
    <Container {...restProps}>
      <Inner>{children}</Inner>
    </Container>
  );
}

Accordion.Title = function AccordionTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Accordion.Header = function AccordionHeader({ children, ...restProps }) {
  return <Header {...restProps}>{children}</Header>;
};

Accordion.Body = function AccordionBody({ children, ...restProps }) {
  return <Body {...restProps}>{children}</Body>;
};
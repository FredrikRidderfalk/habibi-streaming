import React from "react";

export default function Jumbotron({
  children,
  direction = "row",
  ...restProps
}) {
  return (
    <Item {...restProps}>
      <Inner direction={direction}>{children}</Inner>
    </Item>
  );
}

Jumpotron.Container = function JumboContainer({ children, ...restProps }) {
  return <this.Container {...restProps}>{children}</this.Container>;
};

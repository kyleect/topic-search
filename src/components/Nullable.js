import React from "react";
import Either from "./Either";

export default props => (
  <Either if={props.if} or={null}>
    {props.children}
  </Either>
);

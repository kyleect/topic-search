import React from "react";

export default props => {
  return (
    <a href={`https://www.google.com/search?q=${props.topic} ${props.query}`}>
      {props.children}
    </a>
  );
};
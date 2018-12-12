import React from "react";

export const queryUrl = query => `https://www.google.com/search?q=${query}`;

export const QueryLink = props => {
  return (
    <a href={queryUrl(`${props.topic} ${props.query}`)} target="_blank">
      {props.children}
    </a>
  );
};

export default { queryUrl, QueryLink };

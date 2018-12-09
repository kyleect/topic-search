import React, { useState } from "react";
import styled from "styled-components";

const Style = styled.div``;

export default props => {
  const defaultQuery = "";
  const [query, setQuery] = useState(defaultQuery);

  const onChange = e => {
    const query = e.target.value;
    setQuery(query);
  };

  return (
    <Style>
      <div>
        <label htmlFor="topic">Query Topic: {props.topic} </label>
        <input type="text" value={query} onChange={onChange} />
      </div>

      {query ? (
        <a href={`https://www.google.com/search?q=${props.topic} ${query}`}>
          Query
        </a>
      ) : null}
    </Style>
  );
};

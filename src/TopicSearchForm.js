import React, { useState } from "react";
import styled from "styled-components";

const Style = styled.form``;

export default props => {
  const defaultQuery = "";
  const [query, setQuery] = useState(defaultQuery);

  const onSubmit = e => (
    e.preventDefault(),
    props.onSubmit && props.onSubmit(query),
    setQuery(defaultQuery)
  );

  const onChange = e => {
    const query = e.target.value;
    setQuery(query);
  };

  return (
    <Style onSubmit={onSubmit}>
      <div>
        <label htmlFor="query">Query Topic: {props.topic} </label>
        <input autoFocus type="text" value={query} onChange={onChange} />
      </div>

      <button>Save</button>
    </Style>
  );
};

import React, { useState } from "react";
import styled from "styled-components";
import TextField from "@material-ui/core/TextField";

const Style = styled.form`
  width: 100%;
`;

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
      <TextField
        label={`Query: '${props.topic}'`}
        required
        fullWidth
        autoFocus
        type="text"
        value={query}
        onChange={onChange}
      />
    </Style>
  );
};

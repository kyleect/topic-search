import React, { useState } from "react";
import styled from "styled-components";
import TextField from "@material-ui/core/TextField";

const Style = styled.form`
  width: 100%;
`;

export default props => {
  const defaultTopic = "";
  const [topic, setTopic] = useState(defaultTopic);

  const onSubmit = e => (
    e.preventDefault(),
    props.onSubmit && props.onSubmit(topic),
    setTopic(defaultTopic)
  );

  const onChange = e => {
    const topic = e.target.value;
    setTopic(topic);
  };

  return (
    <Style onSubmit={onSubmit}>
      <TextField
        label="Topic"
        required
        fullWidth
        autoFocus
        type="text"
        value={topic}
        onChange={onChange}
      />
    </Style>
  );
};

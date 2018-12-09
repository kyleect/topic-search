import React, { useState } from "react";
import styled from "styled-components";

const Style = styled.form``;

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
      <div>
        <label htmlFor="topic">Topic: </label>
        <input autoFocus type="text" value={topic} onChange={onChange} />
        <button>Save</button>
      </div>
    </Style>
  );
};

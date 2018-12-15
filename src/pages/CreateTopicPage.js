import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import { Link } from "@reach/router";
import React, { useState } from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import LinkList from "../components/LinkList";
import useLocalStorage from "../hooks/useLocalStorage";

const Style = styled.form`
  width: 100%;
`;

export default props => {
  const defaultTopic = "";
  const [topic, setTopic] = useState(defaultTopic);
  const [history, setHistory] = useLocalStorage("topicHistory", []);

  const onSubmit = e => (
    e.preventDefault(),
    props.onSubmit && props.onSubmit(topic),
    setHistory([...history, topic]),
    setTopic(defaultTopic)
  );

  const onChange = e => {
    const topic = e.target.value;
    setTopic(topic);
  };

  return (
    <Style onSubmit={onSubmit}>
      <Helmet>
        <title>Topic Search</title>
      </Helmet>

      <TextField
        label="Topic"
        required
        fullWidth
        autoFocus
        type="text"
        value={topic}
        onChange={onChange}
      />

      {history.length ? (
        <LinkList items={history}>{renderHistoryLink}</LinkList>
      ) : null}
    </Style>
  );
};

const renderHistoryLink = topic => (
  <Link to={`/${topic}`}>
    <Typography variant="body1">{topic}</Typography>
  </Link>
);

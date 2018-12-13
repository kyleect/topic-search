import React, { useState } from "react";
import styled from "styled-components";
import TextField from "@material-ui/core/TextField";
import useLocalStorage from "../hooks/useLocalStorage";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { Link } from "@reach/router";

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
        <List>
          {history.map((topic, i) => (
            <ListItem key={i}>
              <ListItemText>
                <Link to={`/${topic}`}>"{topic}"</Link>
              </ListItemText>
            </ListItem>
          ))}
        </List>
      ) : null}
    </Style>
  );
};

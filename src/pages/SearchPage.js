import React, { useState } from "react";
import styled from "styled-components";
import TextField from "@material-ui/core/TextField";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

import * as engines from "../engines";
import useLocalStorage from "../hooks/useLocalStorage";

const Style = styled.form`
  width: 100%;
`;

const { queryUrl, QueryLink } = engines.google;

export default props => {
  const defaultQuery = "";
  const [query, setQuery] = useState(defaultQuery);
  const [history, setHistory] = useLocalStorage("queryHistory", []);

  const onSubmit = e => {
    e.preventDefault();
    setQuery(defaultQuery);
    setHistory([...history, { topic: props.topic, query }]);
    window.open(queryUrl(`${props.topic} ${query}`));
  };

  const onChange = e => {
    const query = e.target.value;
    setQuery(query);
  };

  const topicHistory = history.filter(({ topic }) => topic === props.topic);

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

      {topicHistory.length ? (
        <List>
          {topicHistory.map(({ topic, query }, i) => (
            <ListItem key={i}>
              <ListItemText>
                <QueryLink query={`${topic} ${query}`}>"{query}"</QueryLink>
              </ListItemText>
            </ListItem>
          ))}
        </List>
      ) : null}
    </Style>
  );
};
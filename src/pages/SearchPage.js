import React, { useState, Fragment } from "react";
import { Link } from "@reach/router";
import styled from "styled-components";
import TextField from "@material-ui/core/TextField";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import { Helmet } from "react-helmet";

import * as engines from "../engines";
import useLocalStorage from "../hooks/useLocalStorage";

const Style = styled.form`
  width: 100%;
`;

const HeaderLink = styled(Link)`
  text-decoration: none;
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
      <Helmet>
        <title>{props.topic} Search</title>
      </Helmet>
      <HeaderLink to="/">
        <Typography variant="h2" gutterBottom>
          {props.topic}
        </Typography>
      </HeaderLink>

      <TextField
        label="Query"
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
            <Fragment key={i}>
              <ListItem>
                <ListItemText>
                  <QueryLink query={`${topic} ${query}`}>
                    <Typography variant="body1">{query}</Typography>
                  </QueryLink>
                </ListItemText>
              </ListItem>
              <Divider />
            </Fragment>
          ))}
        </List>
      ) : null}
    </Style>
  );
};

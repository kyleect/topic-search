import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import { Link } from "@reach/router";
import React, { useState } from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import LinkList from "../components/LinkList";
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
        <LinkList items={topicHistory}>
          {({ topic, query }) => (
            <QueryLink query={`${topic} ${query}`}>
              <Typography variant="body1">{query}</Typography>
            </QueryLink>
          )}
        </LinkList>
      ) : null}
    </Style>
  );
};

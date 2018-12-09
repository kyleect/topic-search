import React, { useState } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import SetTopicForm from "./SetTopicForm";
import TopicSearchForm from "./TopicSearchForm";
import SearchLink from "./SearchLink";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

const Style = styled.div`
  font-style: bold;
`;

const App = () => {
  const [topic, setTopic] = useState("");
  const [history, setHistory] = useState([]);

  const clearTopic = e => {
    e.preventDefault();
    setTopic("");
    setHistory([]);
  };

  const onSubmitSearch = query => {
    setHistory([...history, { topic, query }]);
  };

  return (
    <Style>
      {topic ? (
        <TopicSearchForm topic={topic} onSubmit={onSubmitSearch} />
      ) : (
        <SetTopicForm onSubmit={setTopic} />
      )}

      {history.length > 0 ? (
        <List>
          {history.map(({ topic, query }) => (
            <ListItem>
              <ListItemText>
                <SearchLink topic={topic} query={query}>
                  "{topic} {query}"
                </SearchLink>
              </ListItemText>
            </ListItem>
          ))}
        </List>
      ) : null}
    </Style>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));

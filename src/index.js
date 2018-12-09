import React, { useState } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import SetTopicForm from "./SetTopicForm";
import TopicSearchForm from "./TopicSearchForm";
import SearchLink from "./SearchLink";

const Style = styled.div`
  font-style: bold;
`;

const App = () => {
  const [topic, setTopic] = useState("");
  const [query, setQuery] = useState("");

  const clearTopic = e => {
    e.preventDefault();
    setTopic("");
  };

  const clearQuery = e => {
    e.preventDefault();
    setQuery("");
  };

  return (
    <Style>
      {topic ? (
        <div>
          <p>
            Topic: {topic}{" "}
            <a href="" onClick={clearTopic}>
              Clear
            </a>
          </p>

          <TopicSearchForm topic={topic} onSubmit={setQuery} />
        </div>
      ) : (
        <SetTopicForm onSubmit={setTopic} />
      )}
      {topic && query ? (
        <div>
          <hr />
          <SearchLink topic={topic} query={query}>
            "{topic} {query}"
          </SearchLink>
        </div>
      ) : null}
    </Style>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));

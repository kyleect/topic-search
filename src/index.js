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
        <div>
          <p>
            Topic: {topic}{" "}
            <a href="" onClick={clearTopic}>
              Clear
            </a>
          </p>

          <TopicSearchForm topic={topic} onSubmit={onSubmitSearch} />
        </div>
      ) : (
        <SetTopicForm onSubmit={setTopic} />
      )}

      {history.length > 0 ? (
        <div>
          <hr />

          <ol>
            {history.map(({ topic, query }) => (
              <li>
                <SearchLink topic={topic} query={query}>
                  "{topic} {query}"
                </SearchLink>
              </li>
            ))}
          </ol>
        </div>
      ) : null}
    </Style>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));

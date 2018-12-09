import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Link, Router, navigate } from "@reach/router";
import styled from "styled-components";
import SetTopicForm from "./SetTopicForm";
import SetQueryForm from "./SetQueryForm";

import HistoryList from "./HistoryList";

const Style = styled.div`
  font-style: bold;
`;

const SetTopicPage = props => {
  return <SetTopicForm onSubmit={props.setTopic} />;
};

const SetQueryPage = props => {
  return <SetQueryForm topic={props.topic} onSubmit={props.onSubmitSearch} />;
};

const App = () => {
  const [history, setHistory] = useState([]);

  const onSubmitSearch = topicQuery => setHistory([...history, topicQuery]);

  return (
    <Style>
      <Router>
        <SetTopicPage path="/" setTopic={topic => navigate(`/${topic}`)} />
        <SetQueryPage path="/:topic" onSubmitSearch={onSubmitSearch} />
      </Router>

      <HistoryList history={history} />
    </Style>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));

import { navigate, Router } from "@reach/router";
import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import useLocalStorage from "./hooks/useLocalStorage";
import * as engines from "./engines";
import HistoryList from "./HistoryList";
import SetQueryForm from "./SetQueryForm";
import SetTopicForm from "./SetTopicForm";

const { queryUrl, QueryLink } = engines.google;

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
  const [history, setHistory] = useLocalStorage("history", []);

  const onSubmitSearch = ({ topic, query }) => {
    setHistory([...history, { topic, query }]);
    window.open(queryUrl(`${topic} ${query}`));
  };

  return (
    <Style>
      <Router>
        <SetTopicPage path="/" setTopic={topic => navigate(`/${topic}`)} />
        <SetQueryPage path="/:topic" onSubmitSearch={onSubmitSearch} />
      </Router>

      <HistoryList history={history} link={QueryLink} />
    </Style>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));

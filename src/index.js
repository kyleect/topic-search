import { navigate, Router } from "@reach/router";
import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

import SetQueryForm from "./SetQueryForm";
import SetTopicForm from "./SetTopicForm";

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
  return (
    <Style>
      <Router>
        <SetTopicPage path="/" setTopic={topic => navigate(`/${topic}`)} />
        <SetQueryPage path="/:topic" />
      </Router>
    </Style>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));

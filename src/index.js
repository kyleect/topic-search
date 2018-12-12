import { navigate, Router } from "@reach/router";
import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

import SetQueryForm from "./SetQueryForm";
import SetTopicForm from "./SetTopicForm";

const Style = styled.div`
  font-style: bold;
`;

const App = () => {
  return (
    <Style>
      <Router>
        <SetTopicForm path="/" onSubmit={topic => navigate(`/${topic}`)} />
        <SetQueryForm path="/:topic" />
      </Router>
    </Style>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
